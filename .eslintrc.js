// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  ignorePatterns: ['/dist/*'],
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'import/extensions': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
  },
}
