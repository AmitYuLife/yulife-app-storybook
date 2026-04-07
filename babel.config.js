module.exports = api => {
  const babelEnv = api.env();
  const isE2E = process.env.E2E_MODE === 'true';

  const plugins = [
    ...(isE2E ? ['./babel-plugin-testid-collapsable.js'] : []),
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
          '@modules': './src/modules',
          '@yu-life/react-native-yu-health': './targets/YuHealth/src',
        },
      },
    ],
    '@babel/plugin-proposal-unicode-property-regex',
    'babel-plugin-add-react-displayname',
    'react-native-reanimated/plugin',
  ];

  if (babelEnv === 'uat' || babelEnv === 'production') {
    plugins.push(['transform-remove-console']);
  }

  return {
    presets: ['module:@react-native/babel-preset'],
    sourceMaps: 'inline',
    plugins,
  };
};
