/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer')({
      overrideBrowserslist: ['last 2 versions', '> 1%']
    })
  ]
};

export default config;
