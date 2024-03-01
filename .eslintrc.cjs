module.exports = {
   root: true,
   env: { browser: true, es2020: true },
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
   ],
   parser: '@typescript-eslint/parser',
   plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier'],
   ignorePatterns: ['node_modules/', 'dist/', 'build/'],
   parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
         jsx: true,
      },
   },
   settings: {
      react: {
         version: 'detect',
      },
   },
   rules: {
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'error',
   },
};
