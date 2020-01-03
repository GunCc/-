module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    // '@vue/standard'
  ],
  rules: {

    // 'vue/script-indent': ['error', 2, { 'baseIndent': 1 }],
    // 'indent': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
