/** @type {import('eslint').FlatConfig} */
const config = [
  {
    languageOptions: {
      globals: {
        // Define global variables if needed
      },
    },
    rules: {
      // ESLint recommended rules
      "no-async-promise-executor": "warn",
      "no-caller": "error",
      "no-case-declarations": "warn",
      "no-const-assign": "error",
      // Add all other rules from `eslint:recommended` here
    },
  },
];

module.exports = config;
