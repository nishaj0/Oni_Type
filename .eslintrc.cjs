module.exports = {
   root: true,
   env: {
      browser: true,
   },
   parser: '@typescript-eslint/parser',
   plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier'],
   extends: [
      'airbnb',
      'airbnb-typescript',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'prettier',
   ],
   ignorePatterns: [
      'node_modules/',
      'dist/',
      'build/',
      'vite.config.ts',
      '.eslintrc.cjs',
   ],
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      project: './tsconfig.json',
   },
   settings: {
      react: {
         version: 'detect',
      },
   },
   rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'import/prefer-default-export': 'off',
      'prettier/prettier': 'error',
   },
};
