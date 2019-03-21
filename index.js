module.exports = {
  extends: ['google', 'plugin:node/recommended', 'eslint:recommended'],
  env: {
    node: true,
    mocha: true,
    es6: true,
  },
  rules: {
    // off
    'no-implicit-coercion': 'off',
    'no-multiple-empty-lines': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',

    // warn
    'camelcase': 'warn',
    'comma-dangle': ['warn', 'always-multiline'],
    'no-process-exit': 'warn',
    'node/no-deprecated-api': 'warn',
    'node/no-extraneous-require': 'warn',
    'node/no-missing-require': 'warn',
    'node/no-unsupported-features/es-builtins': 'warn',
    'node/no-unsupported-features/es-syntax': 'warn',
    'node/no-unsupported-features/node-builtins': 'warn',
    'node/process-exit-as-throw': 'warn',
    'node/shebang': 'warn',
    'node/no-unpublished-bin': 'warn',

    // error
    'no-var': 'error',
    'prefer-const': 'error',
    'semi': ['error', 'never'],
    'max-len': ['error', 140, 4],
    'generator-star-spacing': ['error', {before: true, after: false}],
    'quotes': ['error', 'single'],
    'strict': ['error', 'global'],
    'new-cap': [
      'error',
      {
        'capIsNewExceptions': [
          'DataTypes.ARRAY',
          'DataTypes.STRING',
          'Sequelize.ARRAY',
          'Sequelize.STRING',
          'DataTypes.ENUM',
          'Sequelize.ENUM',
          's3Stream.WriteStream',
        ],
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'script',
  },
}
