# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Updated code formatting rules:
  - Set tab width to 2 spaces
  - Enabled trailing commas
  - Configured double quotes for strings
  - Added consistent semicolon usage
- Synchronized ESLint and Prettier configurations for better consistency

## [0.2.0] - 2025-01-04

### Added

- Implemented new project structure with src directory
- Created organized folder hierarchy:
  - src/app for main application code
  - src/components for reusable components
  - src/constants for app constants
  - src/types for TypeScript definitions
  - src/utils for helper functions
- Added comprehensive README.md with project documentation

### Changed

- Moved App.tsx to src/app directory
- Relocated theme.ts to src/constants
- Updated welcome message to show version 0.2
- Improved import paths to reflect new structure

## [0.1.0] - 2025-01-04

### Added

- Initial project setup with Expo React Native
- Basic TypeScript configuration
- ESLint and Prettier setup for code formatting
- Husky and lint-staged for Git hooks
- Basic app structure with welcome message
- Version display in welcome message
- A shared theme file for consistent styling

### Changed

- Updated welcome message to show version number
- Configured lint-staged to handle all TypeScript and JavaScript files

### References

- [Expo Documentation](https://docs.expo.dev/)
- [ESLint Setup Guide](https://docs.expo.dev/guides/using-eslint/)
- [Prettier Setup Guide](https://prettier.io/docs/en/install)
- [Husky Documentation](https://typicode.github.io/husky/)
- [lint-staged Documentation](https://github.com/okonet/lint-staged)
- [TypeScript in React Native](https://reactnative.dev/docs/typescript)

[Unreleased]: https://github.com/username/tech-quiz/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/username/tech-quiz/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/username/tech-quiz/releases/tag/v0.1.0
