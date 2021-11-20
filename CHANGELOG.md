## Version 4.4.0:

- added:
	- Classes for `flex-grow` and `flex-shrink` rules. Use the `flex-[number]` classes as a shorthand.
	- New `.cursor-[mode]` classes. Use [the MDN Cursor Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor) as a companion.
	- New `scale-[size]` classes.
	- CHANGE UI COLORS AND DOUBLE CHECK CHANGES
	- Typography sizes now go up to 15xl.
	- New `isDark` and `isLight` classes to change the UI colors of a specific element. This does not change the UI colors for the rest of the website, only within the children of the element you apply these to.
	- New `.dark-ui-[weight]` classes for changing the BG color on dark mode (useful if you want `ui` on light but `ui-1` on dark)
	- Added a few extra `gap-[size]r` classes to add more grid gap options.
- modified:
	- The switch (toggle) component is now smaller.
- removed:
	- Removed `::selection` modifiers since this caused issues for anyone wanting to modify it down the DOM tree.

## Version 4.3.0:

- modified:
	- Much better, more consistent styling for standard HTML elements inside an `<article>` element.
		- Styling for `<ul>` (and `<li>`) elements
		- Styling for `<hr>` component for elegant line breaks
		- Styling for `<blockquote>` component
		- Article-specific styling for `<code>` component
		- Styling for `<a>` elements which are not normal Jupiter links (`.j-link`) or buttons (`.j-button`)
		- Styling for `<img>` elements which are not normal Jupiter images (`.j-image`)

## Version 4.2.0:

- added:
	- REM sizing values now accept classes for sizes `3.5rem` and `3.75rem`
	- Line height values now accept classes for heights `1.1`, `1.2`, `1.3`, and `1.4`
	- New `.flex-cr` class for items centered vertically in row direction. This class is equivalent with the following classes: `flex flex-row align-c`
	- Additional `backdrop-blur-[size]` classes. The full list is now: `'1' '2' '3' '4' '5' '6' '7' '8' '9' '10' '11' '12' '13' '14' '15' '20' '25' '30'`
	- New `border-color-[color]` classes for colored borders. Example: `.border-color-magenta` for `border-color: var(--magenta-60);`
	- More Grid gap spacing options.
	- You can now modify the animation of the `.dynamic-view` component with the same animations that `.j-dropdown-menu` uses.
	- New `.ellipsis` class which is equivalent to: `text-overflow: ellipsis;`
- modified:
	- Moved `header.css` from `src/assets` to `src/css`

## Version 4.1.0:

- added:
	- `.morph` class variant for `.j-button` (see `index.html`)
- modified:
	- `.j-button` now has a border by default to match the size of the `.give-border` appearance

## Version 4.0.0:

- added:
	- You can now customize the `.j-dropdown-menu` animation with: `.slide-up`, `.slide-down`, `.scale-in`, and `.no-animation`
	- New `.give-border` class for `.j-button` for an auto-themed border and box shadow (with `.emphasize-[sm, md, ...]` classes to size the shadow differently)
	- New config values `enable_responsive_margins` and `responsive_margins` for allowing Animations to watch the window size and adjust the `rootMargin` (the point where the animation is activated) depending on screensize. This means it will take less scrolling for mobile users to activate animations (and therefore slightly more for desktop users).
	- New `.j-article` class for modifying the style of children elements to better match that of a traditional article. It accepts some global classes like sizing (`.sm, .md, ...`) which modifies the font size of all children. It also accepts a `.contain` class to set the `max-width` to `35rem`, for better readability.
	- Various additions to Vivus
- modified:
	- JavaScript functions that are _not_ exported from the file are now prefixed with an underscore, so you know which functions are worth using (from the perspective of Extensions).
	- Themes feature was moved to separate folder (JS)
	- Modals are now colored a slightly lighter gray on dark mode for better readability.
	- Various small improvements to Accordion style
	- Moved border, blur, and box shadow files to new `box_styles/` folder.
- patched:
	- Fixed an issue where dropdowns without vertical padding would allow their children to overflow.
- removed:
	- Removed border from Modal buttons for a cleaner appearance
	- Completely removed built-in animation classes. Component animations are still here, of course. You just can't use `scale-in-md`, for example, anymore. Use the [Vivus](https://codeberg.org/JupiterUI/JupiterUI/src/branch/main/extensions/Vivus) extension instead.
	- Removed `app_configuration` for uselessness and problems.

## Version 3.9.0:

- added:
	- Custom callbacks! See: [Developing: 5. Custom Callbacks](https://codeberg.org/JupiterUI/JupiterUI/wiki/Developing%3A-5.-Custom-Callbacks)
- modified:
	- Components now have individual border radius variables that, by default, use the existing `--border-radius` variable. This, of course, allows you to modify the radius on a per-component basis.
	- `utility.make_id()` now defaults to 5 characters instead of 10

## Version 3.8.0:

- added:
	- JavaScript functionality for selectable `Tile` components!
	- Selectable tiles can now show a checkmark when they are selected.
	- If you put the `.j-tile` elements in a container with a class `.j-tiles`, it will force only one tile to be selected at a time.
	- Checkmark icon (of course, from [Heroicons](https://heroicons.com))
	- Add the `is-noticeable` class to `.j-tiles` if you want it to be more apparent that you can select a tile.
	- And some more classes for Tiles. View the `_j_tile.scss` and `_check.scss` files for more info.
- modified:
	- Extraced `Tile` component into a separate folder.

## Version 3.7.0:

- added:
	- `Tile` component!

## Version 3.6.3:

- modified:
	- `tabs` component is now separated into multiple files in a folder of the same name.
	- Tab links and buttons no longer change scale during `:active`

## Version 3.6.2:

- modified:
	- The accordion component was extracted into several smaller files.
	- General codebase updates; primarily to the `README`
	- Updated `_normalize.scss` for accuracy
	- Consistency improvements to this document.

## Version 3.6.1:

- added:
	- Text decoration classes (see bottom of `typography/_styles.scss`)
	- New attribute `data-motion` for `body` which will reduce built-in component animations (like buttons on hover or modals when opened). Note that this does not disable traditional `data-animate` animations.
- modified:
	- Moved typography to separate folder

## Version 3.6.0:

- added:
	- `safe_link` function to `utility_functions`
	- New `.with-indicator` class for `.j-dropdown-menu` to add a nice arrow to the top.
	- New `.no-shadow` class for `.j-input`
	- New `.cover` class for `.j-modal-inner`
	- Full set of orange colors
- modified:
	- More complicated CSS components have been split up into separate files inside a folder of the same component name.
	- Consistency updates to components' `border-radius`. This means you can modify the `--border-radius` variable
	- Slightly reduced padding on `.j-button`
	- Reformatted `index.html`
- patched:
	- Fixed an issue where the JS code to handle dropdowns would try to reference `.j-dropdown ul` instead of `.j-dropdown-menu`
- removed:
	- `interactive/animation/states/` for redundancy and uselessness
	- `assets/images` for redundancy and uselessness
	-  The color `indigo` was removed due to inconsistencies between other colors.
	- The `sim-container-[l, r]` classes
- among other minor improvments.

## Version 3.5.0:

- added:
	- Vivus extension for animations (default Jupiter animations will be slowly phased out)
	- JavaScript files now have explainer comments at the top. (SCSS files are explanatory enough, so those remain unchanged)
- modified:
	- Dropdown styling. There is now a `0.25rem` padding on the top and bottom of the menu, with some additional modifications to the link text. This padding is accounted for on `.icon-only` configurations.
- removed:
	- `shell/` components.
	- Hover dropdown is no longer supported. Use `.dynamic-view` if you need to make one.

## Version 3.4.0:

- added:
	- New `.clarify` class for `.j-card` to add a border on dark mode
- patched:
	- Fixed issue where `grid-span-[orientation]...` classes would only work on span across columns
- modified:
	- Moved `*.html` files to `examples/` folder
	- Changed `yarn s` command to `yarn css` and `yarn j` to `yarn js`

## Version 3.3.0:

- added:
	- New `.g-accent-[weight_1]-[weight_2]` classes. (see `_gradients.scss`)
	- Sizing, Flex classes now accept `wide` breakpoint at `1440px`
	- Project `willDo.md` and `mightDo.md` files, for better clarification
	- New default `border-white` class
- modified:
	- Updated hero section
	- Increased `gutter-lg` and `gutter-xl` by an addition of `2%` and `1%` respectively
- removed:
	- Removed top margin from underline link

## Version 3.2.2:

- added:
	- `.shallow-link` for giving regular elements the behavior of a link
	- New `.dynamic-view` (same as `.panel`) element for hiding and showing panels with the `aria-expanded` directive
	- `.j-tag` now accepts the `.sm` modifier class
	- New `_accessibility.scss` file which will be expanded upon in upcoming releases
	- Support for `next-themes` via the `html[data-theme=""]` directive
	- More letter spacing and font size classes
	- Added support for grid rows
	- Default `<section>` elements are no longer affected by the `_modular.scss` code. Use `.section` explicitly instead
	- New `.dark-invert` class for swapping colors on dark mode.
	- New `.no-shadow` class for removing box shadows
	- New `.dark-text-[color]-[weight]` classes
	- New `.text-hover-[color]-[weight]` classes
	- `dropdown_mouse_leave_closes_menu` config option.
- modifed:
	- `<code>` elements are now dark and more visible
	- Corrected min-height class values

## Version 3.2.1:

- added:
	- 3 new gradients: `g-tempting-azure`, `g-new-life`, `g-happy-fisher`
	- New `bg-transparent` class
- modified:
	-	`--ui-...` default CSS variables no longer obey `prefers-color-scheme`
	- moved sizing to a separate `layout/sizing` folder

## Version 3.2.0:

- added:
	- `.ghost-button`
	- Even lighter `text-color-006` UI variable
	- `.sim-container=[l, r]` class. This _simulates_ a container by adding margin to the left that amounts to the distance the container is from the viewport.
- modified:
	- `.j-input` now use sizes ([`sm, md, lg, ...`])
	- `.j-input` now accepts `bg-green-01` as well as `bg-red-01` to modify state styles.
	- Opened up UI colors to be accessible all the time. Example: `dark-text-color-012`
	- Added `wide` breakpoint at `1440px` for Grid layouts. This _may_ be coming to other layouts as well.

## Version 3.1.0:

- added:
	- `surface-disabled` class
	- `invert` class
	- Added a few more sizing values
	- `.j-button` can now support nested loaders.
- modified:
	- Links are now selectable
	- Spacing with modal subtitle was improved
	- Attempted to handle loader 404 error on some frameworks (WIP)

## Version 3.0.1:

- patched:
	- `localStorage` calls are now wrapped in `try {} catch {}` to prevent issues when using embedded content.

## Version 3.0.0:

- added:
	- Cards! (See `cards.html`)
	- Cards, section, features examples
	- More spacing REM options
	- Gradients! (all sourced from: [Web gradients](https://webgradients.com/))
	- Much better shadows!
	- Added `.underline` and `.cover` variation classes for `.j-link`
	- Added `warn_on_leave` and `set_leave_callback` functions to `utility_functions.js`. See that file for more info
- modified:
	- Improved color logic
	- The default theme (in CSS) is now what the user's browser has set to "preferred"
	- Most components now use REM exclusively.
- removed:
	- All pixel-related **spacing** classes (margin and padding) were removed. Use REM instead.
	- Most `!important` additives were removed to conserve bundle size.
	- "Inter" font was removed to prevent issues and reduce bloat

## Version 2.0.0:

- added:
	- Examples!
	- Toggle form component was introduced.
	- Added `anchor_options` and `animation_options` to `jupiter_config`
	- Added `enable_logs` to `jupiter_config`
	- Added utility function `log()` to check the above config value.
	- Added color buttons
	- Added transition timing function and duration classes
	- Modal objects now accept `hyperfocus` mode
- modified:
	- Replaced default colors with a much more complete spectrum. Likewise, the color classes have been modified therein. These are from the Carbon Design System.
	- Background colors were replaced with a more consistent set.
	- Animation motion timing functions have been replaced with two types, `productive` and `expressive`. These are from the Carbon Design System.
	- Component easing now follows the new motion timing funtions.
	- Spacing sizes were reduced considerably; REM spacing was improved
	- JavaScript files were improved for consistency and maintainability
- removed:
	- Most border styles were removed. They will be added soon.
	- Redundancy in `$colors` was reduced.
- (among many others not significant enough to include here...)