import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // Variables
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
      'no-undef': 'error',

      // Code Quality
      'eqeqeq': 'error',
      'no-console': 'warn',
      'no-duplicate-keys': 'error',
      'no-empty': 'warn',

      // React Specific
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // Good Habits
      'prefer-const': 'warn',
      'no-var': 'error',
    },
  },
])