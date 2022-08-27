# yew-highlighting

Add syntax highlighting to [Yew](https://yew.rs/) `html!` macros.

## Features

- Highlight `html!` macros using the XML syntax highlighting. This is still a
  work in progress.

## Known Issues

- "XML" (the text in the `html!` macros) is recognized as Rust code
  intrinsically.
- Since "XML" is still recognized as Rust, the Rust syntax highlighting
  sometimes takes over and colors XML incorrectly.

## Release Notes

See [CHANGELOG.md](CHANGELOG.md).