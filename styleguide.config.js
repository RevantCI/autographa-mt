const path = require('path');
const upperFirst = require('lodash/upperFirst');
const camelCase = require('lodash/camelCase');
const { name, version, repository } = require('./package.json');
const { styles, theme } = require('./styleguide.styles');

const sections = [
  {
    name: 'README',
    content: 'README.md',
  },
  {
    name: 'Project List View',
    components: () => {
      const componentNames = ['BibleDropDown', 'LanguageSelect', 'TopBar'];
      return componentNames.map((componentName) => {
        const filename = upperFirst(camelCase(componentName));
        return path.resolve(
          __dirname,
          `src/components/${componentName}`,
          `${filename}.js`
        );
      });
    },
  },
];
module.exports = {
  title: `${upperFirst(camelCase(name))} v${version}`,
  ribbon: {
    url: repository,
    text: 'View on GitHub',
  },
  styles,
  theme,
  sections,
  skipComponentsWithoutExample: true,
  components: 'src/components/**/[A-Z]*.js',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
};
