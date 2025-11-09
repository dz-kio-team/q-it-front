// eslint.config.mjs
import { defineConfig } from 'eslint/config';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  // Ignore build artifacts + this config itself
  { ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'eslint.config.*'] },

  // Next.js rules
  ...nextCoreWebVitals,

  // JS/TS (no type-info) base rules
  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: { parser: tseslint.parser },

    plugins: {
      '@typescript-eslint': tseslint.plugin,
      import: importPlugin,
      react: reactPlugin,
      'react-hooks': reactHooks,
      // 'jsx-a11y': jsxA11y,
    },

    settings: {
      react: { version: 'detect' },
      // support TS path aliases like @/*
      'import/resolver': { typescript: true, node: true },
    },

    rules: {
      // Typescript (no type info needed)
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],

      // Turn OFF here; enable in typed block below
      '@typescript-eslint/await-thenable': 'off',
      '@typescript-eslint/no-misused-promises': 'off',

      // General
      'prefer-const': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',

      // React
      'react/self-closing-comp': 'error',
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
      'react-hooks/exhaustive-deps': 'warn',

      // Accessibility
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',

      // Import order
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'before' },
            { pattern: 'next/**', group: 'external', position: 'after' },
            { pattern: '@/**', group: 'internal' },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },

  // TS-ONLY typed rules (requires type info)
  {
    files: ['**/*.{ts,tsx}'],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        // Simple & reliable in Next.js monorepos/single repos
        projectService: true,
        tsconfigRootDir: process.cwd(),
        // Or explicitly list projects:
        // project: ['./tsconfig.json']
      },
    },

    plugins: { '@typescript-eslint': tseslint.plugin },

    rules: {
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
      '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
      '@typescript-eslint/require-await': 'error',
    },
  },

  // Let Prettier own formatting (disable conflicting ESLint stylistic rules)
  eslintConfigPrettier,
]);
