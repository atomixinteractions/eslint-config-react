module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'atomix-base',
  ],
  plugins: [
    'import',
    'react',
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'strict': 'off',
    'no-unused-vars': ['warn', { varsIgnorePattern: 'React', ignoreRestSiblings: false }],
    'class-methods-use-this': ['warn', { exceptMethods: [
      'componentDidCatch',
      'componentDidMount',
      'componentDidUpdate',
      'componentWillMount',
      'componentWillReceiveProps',
      'componentWillUnmount',
      'componentWillUpdate',
      'render',
      'shouldComponentUpdate',
    ]}],

    'import/no-extraneous-dependencies': 'off',

    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/prop-types': ['warn', {
      ignore: ['classes', 'theme', 'sheet', 'sheets'],
    }],

    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
  },
}
