# Changelog

All notable changes to this theme. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.0.0] - 2026-10-26

### Added

- Azurite: a blueprint. A blue sheet with a drawn grid, white lines, monospaced type, a floor plan drawn faintly behind the page, and a double frame around the sheet, in the Open Color variables Redmine 7 is built on.
- On screens 1100px and wider, all navigation moves into a left sidebar, in plain CSS, with sheet numbers (A-101, A-102) in front of the menu items, from a CSS counter. Narrower screens and the login page keep Redmine's own layout.
- The issue list is a boxed schedule with white cell lines and a tinted header row, a ring round each issue number, a ring round the assignee's initials, a title block at the foot of the page, and Issues, Gantt, Calendar and Activity as tabs above the list. The rings, the title block and the tabs come from one small script, `javascripts/theme.js`, which only reads the page.
- A darker navy sheet for the system dark setting, in one block at the end of the stylesheet.
- The theme skeleton, the demo Redmine, the page check, the screenshot script and the recorder.
- Tested on Redmine 7.0.2 and the 7.0 line, in light and dark, at desktop and phone width: no console errors, no failed requests, no sideways scrolling, and text at AA contrast on the pages that matter, including the wiki, the activity page and the Rubylode to-do page.
