/* Rubylode Azurite, a theme for Redmine 7
 * Copyright (C) 2026  Nick Gorbikoff
 * GNU General Public License, version 2 or later. See the LICENSE file.
 * Generated from the shared base of the Rubylode themes: a change made here is overwritten by the next build. */

/* Two small touches CSS cannot do alone. It only reads the page and writes nothing to Redmine; without it the theme still works.
 *  1. In an issue list grouped by status, each group row gets data-group-status with the status id of its issues, so the
 *     stylesheet can put the status dot beside the group name.
 *  2. Once the page is scrolled, the body gets the class page-scrolled, which gives the top bar a soft shadow. */
(function () {
  "use strict";

  function tagStatusGroups() {
    document.querySelectorAll("table.list.issues tr.group").forEach(function (group) {
      var row = group.nextElementSibling;
      while (row && !row.classList.contains("group") && !row.classList.contains("issue")) { row = row.nextElementSibling; }
      if (!row || !row.classList.contains("issue")) { return; }
      var match = row.className.match(/(?:^|\s)status-(\d+)(?:\s|$)/);
      if (!match) { return; }
      var statusIds = [];
      for (var next = row; next && !next.classList.contains("group"); next = next.nextElementSibling) {
        var found = next.className.match(/(?:^|\s)status-(\d+)(?:\s|$)/);
        if (found && statusIds.indexOf(found[1]) === -1) { statusIds.push(found[1]); }
      }
      if (statusIds.length === 1) { group.setAttribute("data-group-status", statusIds[0]); }
    });
  }

  function watchScroll() {
    var update = function () { document.body.classList.toggle("page-scrolled", window.scrollY > 4); };
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  function start() {
    tagStatusGroups();
    watchScroll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();

/* Helpers for a theme's own script (extra.js), which follows them in this file. They read the page and change nothing.
 *   RubylodeTheme.ready(callback)       run callback once the page is parsed (at once when it already is)
 *   RubylodeTheme.initials(name)        "Jane van Dyke" gives "JD", "admin" gives "A", an empty name ""
 *   RubylodeTheme.tone(text, count)     a whole number from 0 to count - 1 (6 by default), always the same for the same text
 *   RubylodeTheme.currentUser()         { name, login } of the person signed in, or null
 *   RubylodeTheme.currentProject()      { identifier, name, url } of the project the page belongs to, or null */
(function () {
  "use strict";

  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  function initials(name) {
    var words = String(name || "").trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) { return ""; }
    var letters = words[0].charAt(0) + (words.length > 1 ? words[words.length - 1].charAt(0) : "");
    return letters.toUpperCase();
  }

  function tone(text, count) {
    var sum = 0;
    var value = String(text || "");
    for (var index = 0; index < value.length; index++) { sum += value.charCodeAt(index); }
    return sum % (count || 6);
  }

  function currentUser() {
    var name = document.querySelector("#account .user-info .user-name");
    var login = document.querySelector("#account .user-info .user-login");
    if (!name && !login) { return null; }
    return {
      name: name ? name.textContent.trim() : "",
      login: login ? login.textContent.trim().replace(/^@/, "") : ""
    };
  }

  function currentProject() {
    var match = document.body.className.match(/(?:^|\s)project-(\S+)/);
    if (!match) { return null; }
    var current = document.querySelector("#header h1 .current-project");
    var overview = document.querySelector("#main-menu a.overview");
    return {
      identifier: match[1],
      name: current ? current.textContent.trim() : "",
      url: overview ? overview.getAttribute("href") : null
    };
  }

  window.RubylodeTheme = { ready: ready, initials: initials, tone: tone, currentUser: currentUser, currentProject: currentProject };
})();

/* Rubylode Azurite's own script, from themes/azurite/extra.js. */
/* Azurite's own script, built in after the shared helpers. It adds four things CSS cannot: a ring round each issue number in a
 * list, a ring with the assignee's initials beside the name, a row of view tabs (Issues, Gantt, Calendar, Activity) above the
 * issue list, and a title block at the foot of the page. It reads the page and writes nothing to Redmine. Without it the theme
 * still works, with plain numbers and names and the project menu for the views. */
(function () {
  "use strict";

  var VIEW_PAGES = ".controller-issues.action-index, .controller-gantts, .controller-calendars, .controller-activities";
  var VIEW_MENU_ITEMS = ["issues", "gantt", "calendar", "activity"];

  function addIssueNumberRings() {
    document.querySelectorAll("table.list td.id a").forEach(function (link) {
      if (link.querySelector(".issue-number-ring")) { return; }
      var ring = document.createElement("span");
      ring.className = "issue-number-ring";
      ring.textContent = link.textContent.trim();
      link.textContent = "";
      link.appendChild(ring);
    });
  }

  function addAssigneeInitials() {
    document.querySelectorAll("table.list td.assigned_to").forEach(function (cell) {
      var link = cell.querySelector("a");
      if (!link || cell.querySelector(".assignee-initials")) { return; }
      var name = link.textContent.trim();
      var badge = document.createElement("span");
      badge.className = "assignee-initials";
      badge.setAttribute("aria-hidden", "true");
      badge.textContent = RubylodeTheme.initials(name);
      badge.title = name;
      link.classList.add("assignee-name");
      cell.insertBefore(badge, cell.firstChild);
    });
  }

  function addViewTabs() {
    var title = document.querySelector("#content > h2");
    if (!document.body.matches(VIEW_PAGES) || !title || document.querySelector("nav.view-tabs")) { return; }
    var sources = VIEW_MENU_ITEMS.map(function (name) {
      return document.querySelector("#main-menu a." + name);
    }).filter(Boolean);
    if (sources.length < 2) { return; }
    var nav = document.createElement("nav");
    nav.className = "view-tabs";
    nav.setAttribute("aria-label", "Views");
    sources.forEach(function (source) {
      var tab = document.createElement("a");
      tab.href = source.getAttribute("href");
      tab.textContent = source.textContent.trim();
      if (source.pathname === window.location.pathname) {
        tab.className = "selected";
        tab.setAttribute("aria-current", "page");
      }
      nav.appendChild(tab);
    });
    title.insertAdjacentElement("afterend", nav);
  }

  function addTitleBlock() {
    var content = document.querySelector("#content");
    var heading = document.querySelector("#header h1");
    var project = RubylodeTheme.currentProject();
    var projectName = project ? project.name : (heading ? heading.textContent.trim() : "");
    if (!content || !projectName || document.querySelector(".title-block")) { return; }
    var block = document.createElement("div");
    block.className = "title-block";
    block.setAttribute("aria-hidden", "true");
    var today = new Date().toISOString().slice(0, 10);
    var cells = [["Project", projectName], ["Sheet", document.title.split(" - ")[0].slice(0, 24)], ["Date", today]];
    cells.forEach(function (pair) {
      var cell = document.createElement("div");
      var label = document.createElement("b");
      label.textContent = pair[0];
      cell.appendChild(label);
      cell.appendChild(document.createTextNode(pair[1]));
      block.appendChild(cell);
    });
    content.appendChild(block);
  }

  RubylodeTheme.ready(function () {
    addIssueNumberRings();
    addAssigneeInitials();
    addViewTabs();
    addTitleBlock();
  });
})();
