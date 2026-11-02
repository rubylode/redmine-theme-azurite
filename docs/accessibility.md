# Contrast

Azurite aims at WCAG 2.2 AA in light and dark: 4.5:1 for text, and 3:1 for the parts of a control that identify it (field
borders) and for focus indicators. Both schemes are blue, with white text, so the light scheme is a mid blue and the dark scheme a
deep navy.

## How it is measured

- The page check (`npm run check`) loads 29 pages in light and dark, at 1280px and 390px wide, and measures every visible piece of
  text against the colour stacked behind it. On 2026-11-02 against Redmine 7.0.2 with the Rubylode plugins mounted it measured
  6,866 text pairs across the 58 desktop runs and 7,108 across the 58 phone runs, and found none below 4.5:1: 116 of 116 gated runs
  clean, at the 16px base size.
- The tokens, one pair at a time, below (`tokens.css` and `dark.css`). The check skips text over a gradient or an image, and it does
  not see field borders or focus rings, so those are measured here. Chip colours are the mixes the stylesheet makes (`color-mix`),
  worked out on the colour of the row they sit on: a panel, a stripe or a hovered row. The faint grid and floor plan behind the page
  are drawn at low opacity, and the check measures text on the flat colours under them. Translucent fills (the button background) are
  composited on the panel.

## Light

| Pair | Foreground | Background | Ratio |
|---|---|---|---|
| Body text on a panel | `#ffffff` | `#215ba6` | 6.75 |
| Muted text on a panel | `#e8f1fc` | `#215ba6` | 5.92 |
| Link on a panel | `#ffe9a8` | `#215ba6` | 5.62 |
| Body text on the page | `#ffffff` | `#1f58a2` | 7.06 |
| Muted text on the page | `#e8f1fc` | `#1f58a2` | 6.19 |
| Link on the page | `#ffe9a8` | `#1f58a2` | 5.87 |
| Body text on a sunken panel or stripe | `#ffffff` | `#1b509a` | 7.89 |
| Muted text on a sunken panel or stripe | `#e8f1fc` | `#1b509a` | 6.92 |
| Link on a sunken panel or stripe | `#ffe9a8` | `#1b509a` | 6.57 |
| Body text on a hovered row | `#ffffff` | `#2561ac` | 6.21 |
| Muted text on a hovered row | `#e8f1fc` | `#2561ac` | 5.44 |
| Link on a hovered row | `#ffe9a8` | `#2561ac` | 5.16 |
| Secondary text on a panel | `#eef5ff` | `#215ba6` | 6.15 |
| Link, hovered, on a panel | `#fff3c9` | `#215ba6` | 6.08 |
| Primary button text | `#1b4f93` | `#ffffff` | 8.12 |
| Primary button text, hovered | `#1b4f93` | `#e6f0fd` | 7.06 |
| Button text | `#ffffff` | `#376baf` | 5.38 |
| Delete button and error text | `#ffe4e1` | `#7a2441` | 8.09 |
| Header links | `#eaf3ff` | `#184b8f` | 7.68 |
| Header project name | `#ffffff` | `#184b8f` | 8.60 |
| Sidebar item | `#eaf3ff` | `#174a8f` | 7.78 |
| Sidebar selected item | `#ffffff` | `#123f7e` | 10.30 |
| Sidebar sheet number | `#e8f1fc` | `#174a8f` | 7.63 |
| Code block (kept light) | `#10335e` | `#eaf2fd` | 11.23 |
| Success message | `#d8f7e6` | `#1a5e4a` | 6.69 |
| Warning message | `#ffeab0` | `#6b5214` | 6.21 |
| Status block, up | `#c8f5dc` | `#1a5e4a` | 6.40 |
| Status block, unavailable | `#ffe9b0` | `#6b5214` | 6.17 |
| Title block text | `#ffffff` | `#184b8f` | 8.60 |
| Navy plate button text (Home plugin) | `#ffffff` | `#0f3a75` | 11.16 |
| Chip New, on a panel | `#f9fbff` | `#3167ad` | 5.53 |
| Chip New, on a stripe | `#f9fbff` | `#2b5da2` | 6.37 |
| Chip New, on a hovered row | `#f9fbff` | `#346cb2` | 5.12 |
| Chip In Progress, on a panel | `#fff4d6` | `#3365a0` | 5.49 |
| Chip In Progress, on a stripe | `#fff4d6` | `#2d5b95` | 6.34 |
| Chip In Progress, on a hovered row | `#fff4d6` | `#366aa6` | 5.08 |
| Chip Resolved, on a panel | `#dff7e9` | `#2966a6` | 5.28 |
| Chip Resolved, on a stripe | `#dff7e9` | `#235c9b` | 6.10 |
| Chip Resolved, on a hovered row | `#dff7e9` | `#2c6bac` | 4.89 |
| Chip Feedback, on a panel | `#ffebd9` | `#3362a1` | 5.35 |
| Chip Feedback, on a stripe | `#ffebd9` | `#2d5896` | 6.18 |
| Chip Feedback, on a hovered row | `#ffebd9` | `#3667a6` | 4.95 |
| Chip Closed, on a panel | `#e7edf7` | `#2b62aa` | 5.18 |
| Chip Closed, on a stripe | `#e7edf7` | `#25589f` | 5.97 |
| Chip Closed, on a hovered row | `#e7edf7` | `#2f68b0` | 4.80 |
| Chip Rejected, on a panel | `#ffe3e6` | `#335fa5` | 5.22 |
| Chip Rejected, on a stripe | `#ffe3e6` | `#2d559a` | 6.03 |
| Chip Rejected, on a hovered row | `#ffe3e6` | `#3665aa` | 4.83 |
| Chip High, on a panel | `#ffebd9` | `#3362a1` | 5.35 |
| Chip High, on a stripe | `#ffebd9` | `#2d5896` | 6.18 |
| Chip High, on a hovered row | `#ffebd9` | `#3667a6` | 4.95 |
| Chip Urgent, on a panel | `#ffe3e6` | `#335fa5` | 5.22 |
| Chip Urgent, on a stripe | `#ffe3e6` | `#2d559a` | 6.03 |
| Chip Urgent, on a hovered row | `#ffe3e6` | `#3665aa` | 4.83 |
| White on priority Immediate (issue page chip) | `#ffffff` | `#b3123f` | 6.83 |
| White on an avatar disc | `#ffffff` | `#163f7a` | 10.36 |

Lowest text pair: 4.80.

| Control | Foreground | Background | Ratio |
|---|---|---|---|
| Field border on a panel | `#b3d0f3` | `#215ba6` | 4.25 |
| Field border on the page | `#b3d0f3` | `#1f58a2` | 4.45 |
| Focus ring on a panel | `#ffffff` | `#215ba6` | 6.75 |
| Header field border on the header | `#b3d0f3` | `#184b8f` | 5.42 |

## Dark

| Pair | Foreground | Background | Ratio |
|---|---|---|---|
| Body text on a panel | `#ffffff` | `#11335f` | 12.63 |
| Muted text on a panel | `#d3e3f7` | `#11335f` | 9.68 |
| Link on a panel | `#ffe9a8` | `#11335f` | 10.51 |
| Body text on the page | `#ffffff` | `#0f2f5c` | 13.28 |
| Muted text on the page | `#d3e3f7` | `#0f2f5c` | 10.18 |
| Link on the page | `#ffe9a8` | `#0f2f5c` | 11.05 |
| Body text on a sunken panel or stripe | `#ffffff` | `#0c274d` | 14.86 |
| Muted text on a sunken panel or stripe | `#d3e3f7` | `#0c274d` | 11.39 |
| Link on a sunken panel or stripe | `#ffe9a8` | `#0c274d` | 12.37 |
| Body text on a hovered row | `#ffffff` | `#174074` | 10.39 |
| Muted text on a hovered row | `#d3e3f7` | `#174074` | 7.96 |
| Link on a hovered row | `#ffe9a8` | `#174074` | 8.64 |
| Secondary text on a panel | `#eef5ff` | `#11335f` | 11.51 |
| Link, hovered, on a panel | `#fff3c9` | `#11335f` | 11.38 |
| Primary button text | `#1b4f93` | `#ffffff` | 8.12 |
| Primary button text, hovered | `#1b4f93` | `#e6f0fd` | 7.06 |
| Button text | `#ffffff` | `#29476f` | 9.40 |
| Delete button and error text | `#ffe4e1` | `#5e1c35` | 10.30 |
| Header links | `#eaf3ff` | `#0b2549` | 13.64 |
| Header project name | `#ffffff` | `#0b2549` | 15.27 |
| Sidebar item | `#eaf3ff` | `#0b2648` | 13.55 |
| Sidebar selected item | `#ffffff` | `#123f7e` | 10.30 |
| Sidebar sheet number | `#d3e3f7` | `#0b2648` | 11.62 |
| Code block (kept light) | `#10335e` | `#eaf2fd` | 11.23 |
| Success message | `#d8f7e6` | `#14503f` | 8.17 |
| Warning message | `#ffeab0` | `#574411` | 7.88 |
| Status block, up | `#c8f5dc` | `#14503f` | 7.80 |
| Status block, unavailable | `#ffe9b0` | `#574411` | 7.83 |
| Title block text | `#ffffff` | `#0b2648` | 15.16 |
| Navy plate button text (Home plugin) | `#ffffff` | `#0f3a75` | 11.16 |
| Chip New, on a panel | `#f9fbff` | `#22426c` | 9.82 |
| Chip New, on a stripe | `#f9fbff` | `#1d375b` | 11.57 |
| Chip New, on a hovered row | `#f9fbff` | `#284e7f` | 8.16 |
| Chip In Progress, on a panel | `#fff4d6` | `#24405f` | 9.74 |
| Chip In Progress, on a stripe | `#fff4d6` | `#1f354e` | 11.45 |
| Chip In Progress, on a hovered row | `#fff4d6` | `#2a4c72` | 8.10 |
| Chip Resolved, on a panel | `#dff7e9` | `#1a4165` | 9.41 |
| Chip Resolved, on a stripe | `#dff7e9` | `#153654` | 11.07 |
| Chip Resolved, on a hovered row | `#dff7e9` | `#1f4d78` | 7.81 |
| Chip Feedback, on a panel | `#ffebd9` | `#243d60` | 9.51 |
| Chip Feedback, on a stripe | `#ffebd9` | `#1f324f` | 11.16 |
| Chip Feedback, on a hovered row | `#ffebd9` | `#2a4973` | 7.91 |
| Chip Closed, on a panel | `#e2e9f3` | `#1b3c68` | 9.04 |
| Chip Closed, on a stripe | `#e2e9f3` | `#163157` | 10.62 |
| Chip Closed, on a hovered row | `#e2e9f3` | `#20487b` | 7.52 |
| Chip Rejected, on a panel | `#ffe3e6` | `#243a64` | 9.28 |
| Chip Rejected, on a stripe | `#ffe3e6` | `#1f2f53` | 10.87 |
| Chip Rejected, on a hovered row | `#ffe3e6` | `#2a4677` | 7.72 |
| Chip High, on a panel | `#ffebd9` | `#243d60` | 9.51 |
| Chip High, on a stripe | `#ffebd9` | `#1f324f` | 11.16 |
| Chip High, on a hovered row | `#ffebd9` | `#2a4973` | 7.91 |
| Chip Urgent, on a panel | `#ffe3e6` | `#243a64` | 9.28 |
| Chip Urgent, on a stripe | `#ffe3e6` | `#1f2f53` | 10.87 |
| Chip Urgent, on a hovered row | `#ffe3e6` | `#2a4677` | 7.72 |
| White on priority Immediate (issue page chip) | `#ffffff` | `#b3123f` | 6.83 |
| White on an avatar disc | `#ffffff` | `#163f7a` | 10.36 |

Lowest text pair: 6.83.

| Control | Foreground | Background | Ratio |
|---|---|---|---|
| Field border on a panel | `#9fbfe8` | `#11335f` | 6.67 |
| Field border on the page | `#9fbfe8` | `#0f2f5c` | 7.01 |
| Focus ring on a panel | `#ffffff` | `#11335f` | 12.63 |
| Header field border on the header | `#9fbfe8` | `#0b2549` | 8.07 |

## Not covered

- Redmine's own avatar colours are replaced by one navy disc with a white ring, so the white initials are measured on that disc.
- Syntax highlighting inside code blocks is Redmine's, made for a light background, which is why code blocks stay light in both schemes.
- Colour is never the only signal: the status circle and the priority flag sit beside the status and priority names, and a state is
  also told by how full the circle is.
