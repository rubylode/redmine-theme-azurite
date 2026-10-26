/* Azurite, a theme for Redmine 7
 * Copyright (C) 2026  Nick Gorbikoff
 * GNU General Public License, version 2 or later. See the LICENSE file.
 *
 * A small script that adds a few things CSS cannot: a callout bubble round issue numbers, a title block at the foot of the page, initials next to assignees and a row of view tabs. It reads the page and writes nothing to Redmine.
 * Without it the theme still works. */
(function () {
  "use strict";

  function slug(text) {
    return text.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function markGroups() {
    document.querySelectorAll("table.list tr.group").forEach(function (row) {
      var name = row.querySelector("span.name");
      if (name) { row.setAttribute("data-group", slug(name.textContent)); }
    });
  }

  function addInitials() {
    document.querySelectorAll("table.list td.assigned_to").forEach(function (cell) {
      var link = cell.querySelector("a");
      if (!link || cell.querySelector(".assignee-initials")) { return; }
      var words = link.textContent.trim().split(/\s+/);
      var initials = (words[0][0] + (words.length > 1 ? words[words.length - 1][0] : "")).toUpperCase();
      var sum = 0;
      for (var index = 0; index < initials.length; index++) { sum += initials.charCodeAt(index); }
      var badge = document.createElement("span");
      badge.className = "assignee-initials tone-" + (sum % 6);
      badge.setAttribute("aria-hidden", "true");
      badge.textContent = initials;
      badge.title = link.textContent.trim();
      link.classList.add("assignee-name");
      cell.insertBefore(badge, cell.firstChild);
    });
  }

  function addViewTabs() {
    var body = document.body;
    var onViewPage = body.matches(".controller-issues.action-index, .controller-gantts, .controller-calendars, .controller-activities");
    var title = document.querySelector("#content > h2");
    if (!onViewPage || !title || document.querySelector("nav.view-tabs")) { return; }
    var links = ["issues", "gantt", "calendar", "activity"].map(function (name) {
      return document.querySelector("#main-menu a." + name);
    }).filter(Boolean);
    if (links.length < 2) { return; }
    var nav = document.createElement("nav");
    nav.className = "view-tabs";
    links.forEach(function (source) {
      var tab = document.createElement("a");
      tab.href = source.getAttribute("href");
      tab.textContent = source.textContent.trim();
      if (source.pathname === window.location.pathname) { tab.className = "selected"; }
      nav.appendChild(tab);
    });
    title.insertAdjacentElement("afterend", nav);
  }

  function addIssueBubbles() {
    document.querySelectorAll("table.list td.id a").forEach(function (link) {
      if (link.querySelector(".bubble")) { return; }
      var number = link.textContent.trim();
      var bubble = document.createElement("span");
      bubble.className = "bubble";
      bubble.textContent = number;
      link.textContent = "";
      link.appendChild(bubble);
    });
  }

  function addTitleBlock() {
    var content = document.querySelector("#content");
    var project = document.querySelector("#header h1 .current-project, #header h1 a:last-of-type");
    if (!content || !project || document.querySelector(".title-block")) { return; }
    var block = document.createElement("div");
    block.className = "title-block";
    block.setAttribute("aria-hidden", "true");
    var today = new Date().toISOString().slice(0, 10);
    [["Project", project.textContent.trim()], ["Sheet", document.title.split(" - ")[0].slice(0, 24)], ["Date", today]].forEach(function (pair) {
      var cell = document.createElement("div");
      var label = document.createElement("b");
      label.textContent = pair[0];
      cell.appendChild(label);
      cell.appendChild(document.createTextNode(pair[1]));
      block.appendChild(cell);
    });
    content.appendChild(block);
  }

  function run() {
    markGroups();
    addInitials();
    addViewTabs();
    addIssueBubbles();
    addTitleBlock();
  }

  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", run); } else { run(); }
})();
