# Tech Quiz App

A React Native quiz application built with Expo, focusing on technical questions and clean architecture.

## Project Structure

```
tech-quiz/
├── src/                    # Source directory containing all application code
│   ├── app/               # Main application screens and navigation
│   │   └── App.tsx       # Root application component
│   ├── components/       # Reusable UI components
│   │   ├── common/      # Shared components (buttons, inputs, etc.)
│   │   └── quiz/        # Quiz-specific components
│   ├── constants/       # Application-wide constants
│   │   └── theme.ts    # Theme configuration (colors, spacing, etc.)
│   ├── types/          # TypeScript type definitions
│   └── utils/         # Helper functions and utilities
├── assets/           # Static assets (images, fonts, etc.)
├── .eslintrc.js     # ESLint configuration
├── .prettierrc      # Prettier configuration
├── .prettierignore  # Files to be ignored by Prettier
├── App.tsx          # Entry point that imports from src/app/App.tsx
├── app.json        # Expo configuration
└── package.json    # Project dependencies and scripts

```

### Development Scripts

\`\`\`json
{
"start": "expo start",
"android": "expo start --android",
"ios": "expo start --ios",
"web": "expo start --web",
"format:check": "prettier . --check",
"format:fix": "prettier . --write",
"lint:fix": "eslint . --fix",
"lint:check": "eslint ."
}
\`\`\`

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
