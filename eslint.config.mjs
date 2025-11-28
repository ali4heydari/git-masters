
import path from 'node:path';
import * as eslintCompatibilityUtilities from '@eslint/compat';
import eslintJs from '@eslint/js';
import * as typescriptESLint from 'typescript-eslint';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import * as pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import configPrettier from 'eslint-config-prettier/flat';
import pluginNode from 'eslint-plugin-n';
import pluginNoRelativeImport from 'eslint-plugin-no-relative-import-paths';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import * as pluginImportX from 'eslint-plugin-import-x';
// @ts-expect-error This package doesn't have types or @types definitions.
import pluginTypescriptSortKeys from 'eslint-plugin-typescript-sort-keys';
import * as pluginNext from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';


// Variables
const gitIgnoreFileConfig = eslintCompatibilityUtilities.includeIgnoreFile(
  path.join(import.meta.dirname, './.gitignore')
);
const typescriptESLintStrictConfig = typescriptESLint.configs.strict.find(
  ({ name }) => name === 'typescript-eslint/strict'
);

/*
  Default configuration for the project.

  This config will handle the default config, plugin, and rules for the project.
  It shouldn't be changed, except for adding a project wide configuration.

  DO NOT CHANGE THIS CONFIGURATION, UNLESS YOU KNOW WHAT YOU'RE DOING.
  USE customConfig FOR CUSTOMIZATIONS.
 */
const defaultConfig = typescriptESLint.config(
  /*
    Ignore files and directories that aren't needed for the project.
    This rule ignores all files and directories that are in the `.gitignore`
    file.
  */
  {
    name: 'git-masters/default/ignore',
    ignores: [...(gitIgnoreFileConfig.ignores || [])],
  },
  /*
   Global for all files.
  */
  {
    name: 'git-masters/default/global',
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      ...pluginImportX.flatConfigs.recommended.plugins,
    },
    rules: {
      ...eslintJs.configs.recommended.rules,
      ...pluginImportX.flatConfigs.recommended.rules,
      'sort-imports': 'off',
      'no-console': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-script-url': 'error',
    },
  },
  /*
    TypeScript files.
  */
  {
    name: 'git-masters/default/typescript',
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      // @ts-expect-error This property exists in the types but not in the types definition.
      ...typescriptESLint.configs.base.languageOptions,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      // @ts-expect-error This property exists in the types but not in the types definition.
      ...typescriptESLint.configs.base.plugins,
    },
    settings: {
      ...pluginImportX.flatConfigs.typescript.settings,
    },
    rules: {
      ...typescriptESLint.configs.eslintRecommended.rules,
      ...(typescriptESLintStrictConfig?.rules || {}),
      ...pluginImportX.flatConfigs.typescript.rules,
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
  /*
    Node.js
   */
  {
    name: 'git-masters/default/node',
    files: ['**/*.js', 'scripts/**/*.ts'],
    plugins: { ...pluginNode.configs['flat/recommended-module']?.plugins },
    languageOptions: {
      ...pluginNode.configs['flat/recommended-module']?.languageOptions,
      globals: {
        ...globals.node,
        ...globals.browser,
        ...pluginNode.configs['flat/recommended-module']?.languageOptions
          ?.globals,
      },
    },
    rules: {
      ...pluginNode.configs['flat/recommended-module']?.rules,
      'no-console': 'off',
      'n/no-missing-import': [
        'error',
        {
          tryExtensions: ['.ts'],
        },
      ],
    },
  },
  {
    name: 'git-masters/default/source-code',
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    ignores: ['**/__tests__/**/*.test.ts', '**/__tests__/**/*test.tsx'],
    plugins: {
      'typescript-sort-keys': pluginTypescriptSortKeys,
      'no-relative-import-paths': pluginNoRelativeImport,
      'simple-import-sort': pluginSimpleImportSort,
    },
    rules: {
      'no-relative-import-paths/no-relative-import-paths': [
        'warn',
        {
          allowSameFolder: true,
          allowedDepth: 6,
        },
      ],
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // Packages. `react` related packages' comes first.
            ['^react$', '^\\w', '^@?\\w', ''],
            [
              '^@(types|core|api|assets|clients|configs|constants|storages|stores|components|features|hooks|pages|styles|utils|transition)+',
            ],
            // Side effect imports.
            ['^\\.\\.', '^\\.'],
            ['^\\u0000'],
          ],
        },
      ],
      'typescript-sort-keys/interface': 'warn',
      'typescript-sort-keys/string-enum': 'warn',
    },
  },
  /*
    Fix for the bug in the `next lint` script that isn't detecting the plugin
    if the files are started with `src/`.
    So we moved the plugin part to this speared config and applied it to all
    typescript and typescript react files.

    TODO: Remove this when the bug is fixed in the eslint-config-next package.
  */
  {
    name: 'git-masters/default/next-plugin',
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['**/__tests__/**/*.test.ts', '**/__tests__/**/*test.tsx'],
    plugins: {
      '@next/next': pluginNext,
    },
  },
  /*
    React
  */
  {
    name: 'git-masters/default/react',
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    ignores: ['**/__tests__/**/*.test.ts', '**/__tests__/**/*test.tsx'],
    plugins: {
      ...pluginReact.configs.flat.recommended.plugins,
      ...pluginJsxA11y.flatConfigs.recommended.plugins,
      'react-hooks': pluginReactHooks,
    },
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReact.configs.flat['jsx-runtime'].rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginJsxA11y.flatConfigs.recommended.rules,
      /*
        These rules are copied from eslint-config-next package.

        References:
          - https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/index.js
      */
      // Removed as the eslint-plugin-import is buggy, and replaced by eslint-plugin-import-x
      // 'import/no-anonymous-default-export': 'warn',
      'import-x/no-anonymous-default-export': 'warn',
      'react/no-unknown-property': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'jsx-a11y/alt-text': [
        'warn',
        {
          elements: ['img'],
          img: ['Image'],
        },
      ],
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
      'react/jsx-no-target-blank': 'off',
    },
  }
);

/*
  Add customizations to the default config here.

  Usually these rules are temporary and should be removed in the future after fixes.
 */
const customConfig = typescriptESLint.config(
  {
    name: 'git-masters/custom/ignore',
    ignores: ['**/tailwind-theme.js', 'next-env.d.ts'],
  },
  {
    name: 'git-masters/custom/typescript',
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    name: 'git-masters/custom/unit-tests',
    files: ['**/__tests__/**/*.test.ts', '**/__tests__/**/*test.tsx'],
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          disallowTypeAnnotations: false,
        },
      ],
    },
  },
  {
    name: 'git-masters/custom/react',
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    ignores: ['**/__tests__/**/*.test.ts', '**/__tests__/**/*test.tsx'],
    rules: {
      'react-hooks/exhaustive-deps': 'off',
    },
  }
);

export default defineConfig(
  defaultConfig,
  customConfig,
  /*
    Prettier configuration

    This configuration is used to turn off all rules that are unnecessary or
    might conflict with Prettier.

    THIS CONFIGURATION MUST BE THE LAST ONE.
    DO NOT ADD ANYTHING AFTER THIS.
  */
  configPrettier
);
