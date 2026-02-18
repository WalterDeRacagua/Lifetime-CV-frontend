// @ts-check
const eslint = require('@eslint/js');
const { defineConfig } = require('eslint/config');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = defineConfig([
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      // Angular
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'app', style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'app', style: 'kebab-case' },
      ],

      // TypeScript
      '@typescript-eslint/no-explicit-any': 'warn', // Avisar de uso de 'any'
      '@typescript-eslint/no-unused-vars': [
        // Variables sin usar
        'warn',
        { argsIgnorePattern: '^_' }, // Ignorar args que empiezan con _
      ],

      // Código limpio
      'no-console': ['warn', { allow: ['error', 'warn'] }],
      'prefer-const': 'error', // Usar const cuando sea posible
      'no-var': 'error', // Prohibir 'var'
    },
  },
  {
    files: ['**/*.html'],
    extends: [angular.configs.templateRecommended, angular.configs.templateAccessibility],
    rules: {},
  },
]);
