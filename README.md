# yew-highlighting (VSCode extension)

Add syntax highlighting to [Yew](https://yew.rs/) `html!` macros in Visual Studio Code.

## Features

- Highlight `html!` macros using the XML syntax highlighting. This is still a
  work in progress.

  ![Screenshot of a syntax highlighted Yew html macro](img/screenshot.png "Syntax highlighting example from a project")

## Known Issues

- "XML" (the text in the `html!` macros) is recognized as Rust code
  intrinsically.
- Since "XML" is still recognized as Rust, the Rust syntax highlighting
  sometimes takes over and colors XML incorrectly.

## Release Notes

See [CHANGELOG.md](CHANGELOG.md).
