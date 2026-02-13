/**
 * @type {import('lint-staged').Configuration}
 */
const config = {
  '*.{js,ts,tsx}': ['prettier --write', 'eslint --fix'],
  '*.css': ['prettier --write'],
  '*.md': ['prettier --write'],
};

export default config;
