# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Implemented interactive Practice Quiz page (`/practice` route)
  - Dynamic quiz navigation with next/finish buttons
  - Score tracking and quiz completion state
  - Responsive design with ScrollView
  - Mock quiz questions with multiple-choice answers
- Enhanced routing with dedicated practice quiz screen in `_layout.tsx`

### Changed
- Updated routing configuration to support `/practice` route
- Improved component modularity with separate practice quiz implementation

### Technical
- Implemented React hooks for quiz state management
- Added TypeScript typing for quiz-related state and interactions
- Created responsive and interactive quiz user interface
- Utilized theme constants for consistent styling

{{ ... }}