# JupiterUI Development

If you're looking to contribute to Jupiter, you have found the right document.

### Understanding Jupiter branches

The Git philosophy is to merge quick and often. Each branch has a specific feature or purpose, but only one feature or purpose. The more often merges take place, the less often merge conflicts will arise.

Therefore, commits will be rejected if they serve more than one purpose. To keep the commit history clean, though, _our changes_ will occasionally serve more than one purpose.

#### SCSS

Use SASS functions where possible and practical. The "aplhabetical CSS rule" warning is dumb. We do not care.

Be careful with nested loops, though, since you can add a lot more rules than you think. Before committing, make sure to check the build file to see if you're code is creating more rules than necessary.

Use nested rules where practical; for large components with _many_ nested rules, it may be better to extract that to a single class so you don't have a bunch of nested CSS class calls in the final build.

Code example from `src/css/components/buttons/_j_button.scss`

```
@media only screen and (max-width: 478px) {
	@each $size, $tuple in $sizes {
		.j-button.portrait-#{$size} {
			height: auto;
			padding: #{nth($tuple, 1)};
			font-size: #{nth($tuple, 2)};
		}
	}
}
```

## Jupiter Versioning

Given a string `MAJOR.MINOR.PATCH`, the following is to occur:

- `MAJOR` will be upgraded when large changes that "break things" are released. This can also be said of large scale design updates. While design changes may not "break things", it does break consistency in previous projects and a separate `MAJOR` increment is necessary to illustrate the severity of the design and/or functional changes.
- `MINOR` will be upgraded when functionality is added that doesn't break anything. This also includes large-scale changes to the codebase which doesn't affect the developer or end-user.
- `PATCH` will be upgraded when something is fixed in a non-breaking manner. This also includes changes to the code that does not have any visual effect. For instance, extracting a component from a file into a folder with separate files. While this _may_ change the order of _some_ code, it is effectively a non-breaking change. I don't think a separate `MINOR` increment is necessary for changes like this, considering the type of project Jupiter is.

Very small changes (mostly to non-code files) are not required to bump the version number.