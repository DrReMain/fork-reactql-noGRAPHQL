/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Browser dev server.  This config will be used with `webpack-dev-server`
// to enable hot-reloading.  Sourcemaps and full debugging is enabled.

// ----------------------
// IMPORTS

/* NPM */
import WebpackConfig from 'webpack-config';
import Dashboard from 'webpack-dashboard';
import DashboardPlugin from 'webpack-dashboard/plugin';

export default new WebpackConfig().extend('[root]/browser_dev.js').merge({
  plugins: [
    new DashboardPlugin(new Dashboard().setData),
  ],
});
