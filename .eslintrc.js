module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['react', 'jsx-a11y', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-unused-vars': 'warn',
    'linebreak-style': ['error', 'unix'],
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    'react/forbid-prop-types': 0,
    semi: ['error', 'always'],
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: '(useAsync|useAsyncCallback)',
      },
    ],

    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    jest: true,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'prettier'],
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: [
        'airbnb-typescript',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
      ],
      rules: {
        'no-unused-vars': 'warn',
        'linebreak-style': ['error', 'unix'],
        'react/jsx-uses-react': 0,
        'react/react-in-jsx-scope': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-props-no-spreading': [
          1,
          {
            exceptions: ['Route', 'RouteTransition', 'ProtectedRoute'],
          },
        ],
        'jsx-a11y/label-has-associated-control': [
          'error',
          {
            required: {
              some: ['nesting', 'id'],
            },
          },
        ],
        semi: ['error', 'always'],
        'prefer-destructuring': [
          'error',
          {
            array: false,
            object: true,
          },
          {
            enforceForRenamedProperties: false,
          },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': [
          'error',
          {
            additionalHooks: '(useAsync|useAsyncCallback)',
          },
        ],
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
      env: {
        browser: true,
        jest: true,
      },
    },
  ],
};
