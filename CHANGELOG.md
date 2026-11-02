# Changelog

Notable changes to this theme. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.0.0] - 2026-10-26

### Added

- Azurite theme: a blue sheet with a drawn grid, white lines, monospaced type, a faint floor plan behind the page and a double frame around the sheet. It remaps the Open Color variables Redmine 7 is built on.
- On screens 1100px and wider, all navigation sits in a left sidebar, in plain CSS. Menu items get sheet numbers (A-101, A-102) from a CSS counter. Narrower screens and the login page keep Redmine's layout.
- The issue list is a boxed schedule with white cell lines and a tinted header row.
- `javascripts/theme.js` adds a ring round each issue number and the assignee's initials, a title block at the foot of the page, and Issues, Gantt, Calendar and Activity as tabs above the list. It only reads the page.
- A darker navy sheet for the system dark setting, in one block at the end of the stylesheet.
- The demo Redmine, the page check, the screenshot script and the recorder.
- Tested on Redmine 7.0.2 and the 7.0 line, in light and dark, at desktop and phone width. No console errors, failed requests or sideways scrolling, and text at AA contrast on the pages checked, including the wiki, the activity page and the to-do page.
