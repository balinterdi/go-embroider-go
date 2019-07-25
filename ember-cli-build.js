'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
// const V1Addon = require('@embroider/compat').V1Addon;
// const walkSync = require('walk-sync');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  const Webpack = require('@embroider/webpack').Webpack;


  let compatAdapters = new Map();
/*   compatAdapters.set('ember-font-awesome', class EmberFontAwesome extends V1Addon {
    get packageMeta() {
      let meta = super.packageMeta;
      if (!meta['public-assets']) {
        meta['public-assets'] = {};
      }
      let fontFiles = walkSync('node_modules/font-awesome/fonts/');
      for (let path of fontFiles) {
        let [fileName] = path.split('/').reverse();
        meta['public-assets'][`node_modules/font-awesome/fonts/${path}`] = `/fonts/${fileName}`;
      }
      return meta;
    }
  }); */
  if (process.env.CLASSIC) {
    return app.toTree();
  }
  return require('@embroider/compat').compatBuild(app, Webpack, {
    compatAdapters,
    staticAddonTrees: true,
    staticAddonTestSupportTrees: true,
  });
  // return app.toTree();
};
