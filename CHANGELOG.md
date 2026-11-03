# Changelog

Notable changes to this theme. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [2.0.2] - 2026-11-03

### Changed

- The chart colours are now a muted editorial set.

## [2.0.1] - 2026-11-02

### Added

- The theme defines the chart colour tokens the Stats plugin reads.

## [2.0.0] - 2026-11-02

### Changed

- The theme is built on the shared Rubylode theme base. The stylesheets are generated: `tokens.css`, `dark.css`, `structure.css`, `plugins.css`, `sidebar-layout.css`, `fonts.css` and `flourishes.css` replace the single `application.css`.
- The pages the base covers are now styled: My page and the welcome page, the project overview and projects list, the roadmap, subtasks, the wiki editor, spent time, the Gantt chart, the calendar, administration and the phone menu.
- The Rubylode plugins are styled: Projects, Home, To-do, Stats, Uptime Kuma, GlitchTip, Windmill, Beszel and the New issue button.
- The page check runs 29 pages instead of 19, in light and dark at desktop and phone width, with the Rubylode plugins mounted. All 116 runs pass.
- The sidebar is the base's sidebar layout, 244px wide. On pages without a project menu the global links move into it.
- Text is 16px, set by `--theme-font-size`. Version 1.0.0 shrank it to 12.5px and the issue list to 11px.
- The font is Noto Sans for text and Noto Sans Mono for code, bundled in `fonts/`. The IBM Plex Mono stack of 1.0.0 is dropped, so the page is no longer set entirely in a monospaced face.
- The sheet is a little darker (`#1f58a2` instead of `#245fae`) and the muted text a little lighter, so that quiet chips reach 4.5:1.
- Status and priority chips are lighter text on a fainter fill, for the same reason.
- The selected sidebar item is a darker plate with a white outline instead of a lighter wash.
- The Home plugin's main button is a navy plate with white text, because its amber accent cannot carry white text.
- In dark mode the count badges and the current page keep the white plate with blue ink, as in light.
- The ring round issue numbers, the initials rings, the view tabs, the sheet numbers and the title block are kept, in `flourishes.css` and `javascripts/theme.js`. The script takes the initials and the current project from the base helpers.
- The `data-group` attribute on group rows of 1.0.0 is gone, because the group label is outlined and not coloured here. The base script adds the status dots.

### Renamed

Token names changed, so a custom override needs the new names. Overrides of Redmine's `--oc-*` variables now go through the `--theme-neutral-*` and `--theme-accent-*` tokens.

| 1.0.0 | 2.0.0 |
|---|---|
| `--azurite-accent-0` to `--azurite-accent-9` | `--theme-accent-0` to `--theme-accent-9` |
| `--azurite-page` | `--theme-page` |
| `--azurite-radius` | `--theme-radius`, `--theme-radius-small` and the other radius tokens |
| `--azurite-rail` | `--theme-sidebar-background` |
| `--azurite-rail-width` | `--theme-sidebar-width` |
| `--azurite-rail-line` | `--theme-sidebar-line` |
| `--azurite-rail-hover` | `--theme-sidebar-hover-background` |
| `--azurite-rail-selected`, `--azurite-rail-selected-ink` | `--theme-sidebar-selected-background`, `--theme-sidebar-selected-ink` |
| `--azurite-rail-ink`, `--azurite-rail-ink-strong`, `--azurite-rail-dim` | `--theme-header-link`, `--theme-ink`, `--theme-ink-muted` |
| `--azurite-rail-field`, `--azurite-rail-field-line` | `--theme-header-field-background`, `--theme-header-field-border` |
| `--azurite-phone-menu`, `--azurite-phone-menu-ink` | `--theme-phone-menu`, `--theme-phone-menu-ink` |
| `--azurite-shadow` | `--theme-shadow-popup` |
| `--azurite-grid`, `--azurite-grid-fine`, `--azurite-glow` | `--theme-sheet-grid`, `--theme-sheet-grid-fine`, `--theme-sheet-glow` |
| `--azurite-plan` (an inline image) | `images/floor-plan.svg`, dimmed by `--theme-sheet-plan-opacity` |
| `--oc-white`, `--oc-gray-0` to `--oc-gray-9` | `--theme-redmine-white`, `--theme-neutral-0` to `--theme-neutral-9` |
| `--fonts-main` | `--theme-font` |

## [1.0.0] - 2026-10-26

### Added

- Azurite theme: a blue sheet with a drawn grid, white lines, monospaced type, a faint floor plan behind the page and a double frame around the sheet. It remaps the Open Color variables Redmine 7 is built on.
- On screens 1100px and wider, all navigation sits in a left sidebar, in plain CSS. Menu items get sheet numbers (A-101, A-102) from a CSS counter. Narrower screens and the login page keep Redmine's layout.
- The issue list is a boxed schedule with white cell lines and a tinted header row.
- `javascripts/theme.js` adds a ring round each issue number and the assignee's initials, a title block at the foot of the page, and Issues, Gantt, Calendar and Activity as tabs above the list. It only reads the page.
- A darker navy sheet for the system dark setting, in one block at the end of the stylesheet.
- The demo Redmine, the page check, the screenshot script and the recorder.
- Tested on Redmine 7.0.2 and the 7.0 line, in light and dark, at desktop and phone width. No console errors, failed requests or sideways scrolling, and text at AA contrast on the pages checked, including the wiki, the activity page and the to-do page.
