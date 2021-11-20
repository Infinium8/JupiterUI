# JupiterUI Development

If you're looking to contribute to Jupiter, you have found the right document.

Essentially, all you need to know is the following:

- Use `yarn watch` to watch SCSS source files for changes and re-compile the `dist/jupiterui.css` file. Use this when in development and making many changes.
- To _see_ your changes, navigate to the example app and start it up with `yarn start`
- When you're ready to push changes, use `yarn compile` to compile the source files again. This also has two extra steps: it first uses PostCSS to add other browser vendor mixins; and concatenates the `header.css` file, which contains project and license information.

That's really it! Just open a PR.