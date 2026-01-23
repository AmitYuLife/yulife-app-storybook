module.exports = api => {
  const babelEnv = api.env();
  const plugins = [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ts', '.tsx'],
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@atoms': './src/components/atoms',
          '@organisms': './src/components/organisms',
          '@containers': './src/components/containers',
          '@modals': './src/components/modals',
          '@molecules': './src/components/molecules',
          '@screens': './src/components/screens',
          '@graphql': './src/graphql',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@services': './src/services',
          '@utils': './src/utils',
          '@styles': './src/styles',
          '@locale': './src/locale',
          '@hooks': './src/hooks',
          '@mockclient': './e2e/_utils/socket/client',
          '@e2e': './e2e',
          '@ids': './e2e/_utils/navigation/ids',
          '@theme': './src/theme',
        },
      },
    ],
    '@babel/plugin-proposal-unicode-property-regex',
    'react-native-reanimated/plugin',
  ];

  if (babelEnv === 'uat' || babelEnv === 'production') {
    plugins.push(['transform-remove-console']);
  }

  return {
    presets: ['module:metro-react-native-babel-preset'],
    overrides: [{
      "plugins": [
        ["@babel/plugin-transform-class-properties", { "loose": true }],
        ["@babel/plugin-transform-private-methods", { "loose": true }],
        ["@babel/plugin-transform-private-property-in-object", { "loose": true }],
      ]
    }],
    sourceMaps: 'inline',
    plugins,
  };
};
