# Rubylode Azurite for Redmine

A blueprint theme for Redmine 7 and up: a cobalt sheet with white drawing lines, a grid, square corners and a title block at the foot of the page.

It is plain CSS plus one small script (`javascripts/theme.js`), with no plugin, no build step and no change to Redmine itself. The script only reads the page. It puts a ring round each issue number in a list, adds a ring with the assignee's initials, builds a row of view tabs (Issues, Gantt, Calendar, Activity) above the issue list, draws a title block at the foot of the page, and tags status groups and the scrolled header the way every Rubylode theme does. Without the script the theme still works, with plain numbers and names and the project menu for the views. It is built on the shared Rubylode theme base, so it covers the same pages as the other Rubylode themes and styles the Rubylode plugins.

The sheet is blue in both schemes. Light is a mid cobalt, dark follows your system setting and turns the same sheet deep navy (see [Dark mode](#dark-mode)).

![A walk through Rubylode Azurite: the project, the issue list, an issue, the to-do page and the new issue form](docs/demo/walkthrough-light.gif)

| | |
|---|---|
| ![The issue list](docs/screenshots/issues-light.png) | ![An issue](docs/screenshots/issue-light.png) |
| ![The new issue form](docs/screenshots/new-issue-light.png) | ![The project overview, with the Rubylode Projects plugin](docs/screenshots/project-light.png) |
| ![The projects list, with the Rubylode Projects plugin](docs/screenshots/projects-light.png) | ![My page, with the Rubylode Home plugin](docs/screenshots/my-page-light.png) |
| ![The welcome page, with the Rubylode Home plugin](docs/screenshots/home-light.png) | ![A status block, from the Rubylode Uptime Kuma plugin](docs/screenshots/service-status-light.png) |
| ![The Stats page, with the Rubylode Stats plugin](docs/screenshots/stats-light.png) | ![The to-do page, with the Rubylode To-do plugin](docs/screenshots/todo-light.png) |

Dark mode:

![A walk through Rubylode Azurite in dark mode](docs/demo/walkthrough-dark.gif)

| | |
|---|---|
| ![The issue list in dark mode](docs/screenshots/issues-dark.png) | ![An issue in dark mode](docs/screenshots/issue-dark.png) |
| ![The new issue form in dark mode](docs/screenshots/new-issue-dark.png) | ![The project overview in dark mode](docs/screenshots/project-dark.png) |
| ![The projects list in dark mode](docs/screenshots/projects-dark.png) | ![My page in dark mode](docs/screenshots/my-page-dark.png) |
| ![The welcome page in dark mode](docs/screenshots/home-dark.png) | ![A status block in dark mode](docs/screenshots/service-status-dark.png) |
| ![The Stats page in dark mode](docs/screenshots/stats-dark.png) | ![The to-do page in dark mode](docs/screenshots/todo-dark.png) |

The screenshots come from the demo Redmine in this repository; the people, projects and issues in it are made up.

## Contents

- [What it looks like](#what-it-looks-like)
- [Install](#install)
- [What is covered](#what-is-covered)
- [Rubylode plugins](#rubylode-plugins)
- [Customising](#customising)
- [Fonts](#fonts)
- [Dark mode](#dark-mode)
- [Accessibility](#accessibility)
- [Compatibility](#compatibility)
- [Development](#development)
- [Checks and releases](#checks-and-releases)
- [License](#license)

## What it looks like

- The page is a drawing sheet: cobalt, with a grid in two weights, a faint floor plan tilted behind the content and a double white frame round the window. Panels are outlined in white instead of shadowed, and corners are square. Links and the one highlight are a pale amber.
- A full-height sidebar, 244px wide, on the left, a shade darker than the sheet. It holds the project name in a white frame, set in capitals, and the project menu with a sheet number before each item (A-101, A-102 and so on, from a CSS counter). The selected item is a darker plate with a white outline. On the administration pages it holds the administration menu. A thin bar across the top holds the global links, the New issue button, the search and project switcher, and your avatar.
- The issue list is a boxed schedule: white cell lines, a lighter header row, a circle for status (empty for New, half for In Progress and Feedback, full for the rest), a flag for priority (amber for High and above), a small square for the tracker, and group names in an outlined label.
- Issue numbers sit in a ring and assignees show as a ring with their initials, with the name in the tooltip. Above the issue list, the Gantt chart, the calendar and the activity page, a row of tabs moves between Issues, Gantt, Calendar and Activity.
- The main button is a white plate with blue ink, other buttons are white outlines in capitals, and the sign-in form is a plate with a double line.
- At the foot of each page a title block gives the project, the page and the date, as on a drawing sheet.

## Install

1. Download the zip attached to the latest release (the Releases page of this repository) and unzip it inside the `themes` folder of your Redmine, so that `themes/azurite/stylesheets/application.css` exists. Or clone this repository and copy (or link) its `azurite` folder into `themes/`.
2. Restart Redmine.
3. In Administration, Settings, Display, choose **Azurite** as the theme and save.

To go back, choose another theme on the same page. Nothing is written to the database apart from that setting.

The theme folder holds the stylesheets, `javascripts/theme.js`, the floor plan (`images/floor-plan.svg`) and the bundled fonts.

## What is covered

The page check loads these pages, in light and dark, at desktop and phone width: sign in, the home page, the project
overview (Redmine's own and the Rubylode Projects plugin's), the projects list, the issue list (plain and grouped), activity, the
roadmap, an issue, an issue with subtasks, a child issue, the edit and new issue forms, the to-do page, the Stats page, the pages
of the four status plugins, My page (Redmine's own and the Rubylode Home plugin's), a wiki page and its editor, spent time, Gantt,
the calendar, project settings and administration.
Flash messages, tabs, the right-click menu, dropdowns, pagination, the text editor and the phone slide-out menu are styled as well.

<!-- rubylode-plugins:start -->
## Rubylode plugins

Rubylode Azurite styles the Rubylode plugins' blocks natively. Each plugin draws with its own CSS custom properties, and one section of the
theme, `azurite/stylesheets/plugins.css`, points them at Rubylode Azurite's tokens, so the blocks follow the theme in light and dark:

- [Rubylode Projects](https://github.com/rubylode/redmine-rubylode-projects) (`--rubylode-projects-*`): the overview cards and the projects list.
- [Rubylode Home](https://github.com/rubylode/redmine-rubylode-home) (`--rubylode-home-*`): My page and the welcome page.
- [Rubylode To-do](https://github.com/rubylode/redmine-rubylode-todo) (`--todo-*`): the to-do page.
- [Rubylode Uptime Kuma](https://github.com/rubylode/redmine-rubylode-uptime-kuma) (`--rubylode-uptime-kuma-*`),
  [Rubylode GlitchTip](https://github.com/rubylode/redmine-rubylode-glitchtip) (`--rubylode-glitchtip-*`),
  [Rubylode Windmill](https://github.com/rubylode/redmine-rubylode-windmill) (`--rubylode-windmill-*`) and
  [Rubylode Beszel](https://github.com/rubylode/redmine-rubylode-beszel) (`--rubylode-beszel-*`): the status blocks.
- [Rubylode Stats](https://github.com/rubylode/redmine-rubylode-stats) (`--stats-tooltip-*`): the chart tooltip.
- [Rubylode New issue button](https://github.com/rubylode/redmine-rubylode-new-issue-button): a rounded primary button beside the search.
  Plugins load their stylesheets after the theme's, so these rules start with `body #header` to win whatever the order.

None of them is needed. Without a plugin its rules match nothing.
<!-- rubylode-plugins:end -->

## Customising

Every colour, corner, shadow and a few sizes are custom properties in `azurite/stylesheets/tokens.css` (light values) and
`azurite/stylesheets/dark.css` (dark values). Change them there, or override them from a stylesheet of your own. The names
start with `--theme-` and are the same in every Rubylode theme. The main ones:

| Token | What it is |
|---|---|
| `--theme-page`, `--theme-surface`, `--theme-surface-sunken`, `--theme-surface-hover` | the sheet, the panels, sunken panels and stripes, hovered rows |
| `--theme-line`, `--theme-line-soft`, `--theme-line-strong` | the white drawing lines, column lines, field borders |
| `--theme-ink`, `--theme-ink-soft`, `--theme-ink-muted` | text, secondary text, labels and notes (all light, on the blue) |
| `--theme-accent-0` to `--theme-accent-9` | steps 0 to 2 are blue tints, steps 3 to 9 the amber of links and highlights |
| `--theme-primary`, `--theme-ink-on-primary` | the white plate of the main button and the blue ink on it |
| `--theme-status-new`, `-in-progress`, `-resolved`, `-feedback`, `-closed`, `-rejected` | status colours, by Redmine's default status ids 1 to 6 |
| `--theme-radius-small`, `--theme-radius`, `--theme-radius-panel`, `--theme-radius-pill` | corners; all `0` here, so a theme with rounded corners is one edit away |
| `--theme-sidebar-width`, `--theme-sidebar-background`, `--theme-sidebar-selected-background` | the sidebar |
| `--theme-font-size` | the size of running text (16px); every other text size follows it |

The rest (messages, avatars, diffs, the Gantt chart, the header heights, the icons drawn in the stylesheet) are listed with a
comment each in `tokens.css`. Azurite adds a few names of its own at the end of that file for the drawing: `--theme-sheet-grid`,
`--theme-sheet-grid-fine`, `--theme-sheet-glow`, `--theme-sheet-plan-opacity`, `--theme-sheet-frame`, `--theme-sheet-plate`,
`--theme-phone-menu` and `--theme-phone-menu-ink`. If you used the old `--azurite-*` names, the rename table is in the changelog.

The drawing itself (the grid, the plan and the frame, the sheet numbers, the schedule-style list, the rings, the view tabs and
the title block) is in `azurite/stylesheets/flourishes.css`, loaded last, and the script is `azurite/javascripts/theme.js`. To
drop the floor plan, set `--theme-sheet-plan-opacity: 0`. The sidebar is `azurite/stylesheets/sidebar-layout.css`.

Status and priority colours are matched by Redmine's default ids (statuses 1 New to 6 Rejected, priorities 1 Low to 5
Immediate, trackers 1 Bug, 2 Feature, 3 Support). If yours differ, change the ids in the issue list sections of
`azurite/stylesheets/structure.css` and in `flourishes.css`.

### Widths

- 1100px and wider: the sidebar and the thin top bar described above.
- From 900px to 1099px: two rows. The first holds the global links, the New issue button, the search and the person menu. The
  second holds the project name and its tabs.
- Below 900px: Redmine's own phone layout, with the project menu behind the menu button. The sign-in page keeps the two rows at
  every width.

## Fonts

Azurite ships its own fonts, so text looks the same on every system and nothing is loaded from another site: Noto Sans for text
and Noto Sans Mono for code, as woff2 files in `azurite/fonts/` (latin and latin-ext). Both are under the SIL Open Font License
1.1; the licence texts are in the same folder. A browser downloads a file only when a page uses it. To use other fonts, change
`--theme-font` and `--theme-font-monospace` in `azurite/stylesheets/tokens.css`. The size of running text is `--theme-font-size`
(16px), and every other text size follows it.

## Dark mode

Dark mode follows your system setting (`prefers-color-scheme`). The sheet stays blue: the page, panels, header and sidebar turn
deep navy, and the white ink, the amber, the square corners and the outline buttons stay as they are. Code blocks stay light,
since Redmine's syntax colours are made for a light background. To keep Azurite in its light blue, remove the line
`@import url(dark.css);` from `azurite/stylesheets/responsive.css`; every dark value is in that one file.

## Accessibility

Text and controls meet WCAG AA in both modes. The page check measures every visible text against the colour behind it on every
page; the tokens were also measured one by one, including the parts the check cannot see (field borders, focus rings, chips
on a hovered row). The measured ratios are in [docs/accessibility.md](docs/accessibility.md). In short: body text 6.8:1 in light
and 12.6:1 in dark on a panel, muted text at least 5.4:1 and 8.0:1, links at least 5.2:1 and 8.6:1, every status and priority
chip at least 4.8:1 and 6.9:1, field borders at least 4.2:1 and focus rings at least 6.7:1.

## Compatibility

Redmine 7.0 and newer. Tested on 7.0.2, from both the `7.0.2` and the `7.0` image tags (on 2026-11-02 the 7.0 line was at 7.0.2). Older versions are not expected to work: Redmine 7 reads a theme from `themes/<name>` and is
built on the Open Color variables this theme remaps.

Browsers: current Chrome, Edge, Firefox and Safari. The theme uses `:has()` and `color-mix()` (Chrome 111, Firefox 121,
Safari 16.4 and newer); an older browser shows plainer status chips and keeps the rest.

## Development

You need Docker, Ruby, Node and Chrome.

```
npm install
ruby bin/demo up        # a throwaway Redmine with demo data at http://localhost:3106 (admin / admin)
npm run check           # loads every page in light and dark, at desktop and phone width
npm run screenshots     # docs/screenshots
npm run record          # docs/demo, a GIF of a walk through the pages
ruby bin/demo reset     # wipe the demo
```

If copies of the Rubylode plugins listed above sit next to this repository (`../redmine-rubylode-todo` and so on, or in a folder
named in `RUBYLODE_PLUGINS_DIR`), the demo mounts them and the check, screenshots and recording show their pages. The demo points
the status plugins at an address where nothing answers, so their pages show the "unavailable" state. Without the plugins the
demo is plain Redmine, and the check skips their pages.

The generated files (`stylesheets/`, `javascripts/theme.js`, `fonts/`, `test/`, `bin/demo`) come from a shared base and are not meant to be edited by hand here.

The check fails on console errors, failed requests, sideways scrolling and text below WCAG AA contrast. `REDMINE_TAG=7.0 ruby bin/demo up` runs it against the other Redmine version. After you change a stylesheet, run `ruby bin/demo restart` and reload, because Redmine caches theme files until it restarts.

## Checks and releases

Every push starts a real Redmine from its Docker image (7.0.2 and 7.0), loads every page of the theme in light and dark at desktop and phone width, and fails on console errors, failed requests, sideways scrolling and low text contrast. The workflows are in `.github/workflows/` and `.gitea/workflows/`; [docs/ci.md](docs/ci.md) has the details.

A tag such as `v2.0.0` runs the same check, builds `azurite-<version>.zip` with the theme folder in it, and attaches it to a release with the matching section of `CHANGELOG.md` as the notes. The tag needs a section for that version in the changelog.

## License

GPL version 2 or later, the same as Redmine. See `LICENSE`. Copyright (C) 2026  Nick Gorbikoff.

No warranty, as the GPL says. Try the theme on a copy of your tracker before the real one.

Pull Requests are welcome!
