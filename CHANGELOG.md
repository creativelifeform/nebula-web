# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## `v1.7.0` - 2020-11-01

### Removed

- Emitter limit from edition features

## `v1.6.1` - 2020-10-30

### Fixed

- Privacy policy link in GDPR header now uses `NextLink`

## `v1.6.0` - 2020-10-30

### Added

- Sitemap generator script
- `public/sitemap.xml`
- `public/robots.txt`

### Changed

- Enabled robots meta tag

## `v1.5.0` - 2020-10-30

### Changed

- Installation guides page now detects platform and defaults to the correct guide for the user

## `v1.4.0` - 2020-10-30

### Added

- Installation guides
- Notice telling Linux users support is coming soon
- Correct social meta sharing tags
- More feature clarifications to editions

### Fixed

- Some perf regressions
- Security

## `v1.3.0` - 2020-06-20

### Added

- Final hero video and hero video for smaller displays

### Changed

- Hero particle system now using `GPURenderer`

### Fixed

- Some perf regressions that seemed to creep in somewhere along the line

## `v1.2.9` - 2020-06-06

### Fixed

- Security vulnerabilities

## `v1.2.8` - 2020-02-18

### Added

- Gif component to the Hero which will render on smaller viewports (mobile)

### Changed

- Media items in the About page will now always be squares

## `v1.2.7` - 2020-02-12

### Added

- Nebula logo to assets
- Favicon generation script, favicon/social media assets and the `Favicon` component to be used in the page head

## `v1.2.6` - 2020-02-09

### Fixed

- Privacy policy link from download page now uses `next/link`

## `v1.2.5` - 2020-02-09

### Added

- `@next/bundle-analyzer` dev dep
- `analyse` npm script

### Changed

- `Hero` page now correctly code splits `THREE`

## `v1.2.4` - 2019-11-03

### Fixed

- Bug where resulting download link was not triggering a download

## `v1.2.3` - 2019-11-03

### Added

- Sentry integration

### Fixed

- Issue where the download release button would cause uncaught errors

## `v1.2.2` - 2019-10-20

### Fixed

- Fixed issue with download page's `Error` component that resulted in uncaught errors

## `v1.2.1` - 2019-10-20

### Fixed

- Fixed bug where server side cookies were not being correctly passed to the client

## `v1.2.0` - 2019-10-16

### Added

- GDPR consent banner and modular styling to support it
- GDPR context with a provider and consumer
- Better analytics interop architecture
- Cookie management packages

## `v1.1.1` - 2019-10-06

### Added

- `universal-analytics` dependency

### Changed

- `Analytics` component now uses `universal-analytics` instead of `next-ga`

### Removed

- `next-ga`

## `v1.1.0` - 2019-09-26

### Added

- `next-ga` dependency to use Google/Universal analytics with next
- `Analytics` primitive component that uses React Context to provide analytics functionality to anything in the app via the `Analytics` consumer
- Page view tracking
- Event tracking for the download submit button, download platform select component and callout button

## `v1.0.2` - 2019-08-26

### Fixed

- Font awesome font size flash (see https://github.com/FortAwesome/react-fontawesome/issues/234)

## `v1.0.1` - 2019-08-25

### Changed

- `content/routes` is now node env compatible
- Ensured that `next.config.js` exports the path map for all routes

## `v1.0.0` - 2019-08-22

### Added

- All the things! First release of the `nebula-web` website after porting the entire app to `nextjs`!
