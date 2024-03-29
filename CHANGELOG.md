# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.2](https://git.cross-systems.ch/wide-front/modulus/tags/v1.1.1) - 2020/01/08
- Add helper `display` (`states` is now deprecated)
- Add helper `visibility` (`states` is now deprecated)
- Update helper documentation
- Replace class for close modal `modal_close` -> `[data-close]`

## [1.1.1](https://git.cross-systems.ch/wide-front/modulus/tags/v1.1.1) - 2019/12/13
- Enhance `Selector` component with css classes mirroring and new `[data-index]` value

## [1.1](https://git.cross-systems.ch/wide-front/modulus/tags/v1.1) - 2019/12/12
- Extend MutationObserver to automatically instanciate and destroy components

## [1.0.12](https://git.cross-systems.ch/wide-front/modulus/tags/v1.0.12) - 2019/12/11
- Fix `CustomEvents` utils

## [1.0.11](https://git.cross-systems.ch/wide-front/modulus/tags/v1.0.11) - 2019/12/11
- Add `Selector` component (`Dropdown` component is now deprecated)

## [1.0.10](https://git.cross-systems.ch/wide-front/modulus/tags/v1.0.10) - 2019/11/22
- Fix relative path for `Icon` panini helper

## [1.0.9](https://git.cross-systems.ch/wide-front/modulus/tags/v1.0.9) - 2019/11/6
- Fix unit `em` -> `rem` for breakpoints

## [1.0.8](https://git.cross-systems.ch/wide-front/modulus/tags/v1.0.8) - 2019/10/8
- Fix `this.id` -> `this.el.id` in `Modal` component

## [1.0.7](https://git.cross-systems.ch/wide-front/modulus/tags/v1.0.7) - 2019/10/7
- Fix doc for icon helper 
- Add click listeners for callers in `Modal` component

## [1.0.6](https://git.cross-systems.ch/wide-front/modulus/tags/v1.0.6) - 2019/10/2
- Fix npm task `assets:ico.symbols` for use with the watcher
- Fix doc url for `ratio.md`
- Replace `gulp-svg-sprites` by `gulp-svg-sprite` for icons build task
- Add `Panini helpers` in the doc

## [1.0.5](https://git.cross-systems.ch/wide-front/modulus/tags/v1.0.5) - 2019/09/10
- Fix IE/Edge customElements supports for web components
- Fix `dropdown` IE issue

## [1.0.4](https://git.cross-systems.ch/wide-front/modulus/tags/v1.0.4) - 2019/09/09
- Add closest polyfill 
- Fix `browser.getBrowserName()` method -> returns `edge` instead of `microsoft edge`
- Fix npm task `dev:modulus` on starterkit
- Fix `uos` dependencies

## [1.0.3](https://git.cross-systems.ch/wide-front/modulus/tags/v1.0.3) - 2019/08/29
- Add svg4everybody polyfill

## [1.0.2](https://git.cross-systems.ch/wide-front/modulus/tags/v1.0.2) - 2019/07/09
- Remove Controller builder method
- Add WebComponent builder method
- Add Gitlab CI for the documentation

## [1.0.1](https://git.cross-systems.ch/wide-front/modulus/tags/v1.0.1) - 2019/07/08
- Trap focus in open modal
- Close dropdown on ESC key
- Fix aria attribute on carousel active slides
- Add `dom.getFocusables(parent)` function

## [1.0.0](https://git.cross-systems.ch/wide-front/modulus/tags/v1.0.0) - 2019/07/04
- Initial working sources