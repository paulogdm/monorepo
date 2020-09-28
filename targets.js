/**
 * Use ember-cli-autoprefixer browserslist definition in package.json
 * No IE 11 support
 * safari >= 10 : support for iOS 10
 * edge >= 18 : support for "legacy" (EdgeHTML) version of the Microsoft Edge browser
 * chrome >= 58 : support for Clevertouch and older Android devices
 *
 * NOTE: please keep in sync with gynzy-accounts-nuxt/package.json.
 */

const pkg = require('./package.json');

module.exports = {
	browsers: pkg.browserslist,
};
