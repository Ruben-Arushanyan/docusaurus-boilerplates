const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const navbar = require('./navbar')
const footer = require('./footer')

const theme = {
    navbar,
    footer,
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
}


module.exports = theme