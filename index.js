module.exports = {
  extends: ['google', 'plugin:node/recommended'],
  env: {
    node: true,
    mocha: true,
    es6: true,
  },
  rules: {
    camelcase: ['warn'],
    'prefer-const': ['error'],
    'no-implicit-coercion': [0],
    semi: [2, 'never'],
    'no-multiple-empty-lines': [0],
    'new-cap': [
      2,
      {
        capIsNewExceptions: [
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
    'max-len': [2, 140, 4],
    'no-var': [2],
    'generator-star-spacing': [2, {before: true, after: false}],
    quotes: [2, 'single'],
    strict: ['error', 'global'],
    'comma-dangle': ['warn', 'always-multiline'],
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'script',
  },
}
