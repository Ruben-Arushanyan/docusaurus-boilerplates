// site metadata
const siteMetadata = require('./config/site-metadata')

// deployment
const deployment = require('./config/deployment')

// plugins
const plugins = require('./config/plugins')

// presets
const presets = require('./config/presets')

// theme
const theme = require('./config/theme')

const config = {
   ...siteMetadata,
  ...deployment,

  themeConfig: theme,
  plugins,
  presets,
};

module.exports = config;
