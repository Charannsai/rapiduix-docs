module.exports = {
  title: 'RapidUIX',
  tagline: 'UI components for React Native and Flutter',
  url: 'https://docs.rapiduix.tech',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'rapiduix',
  projectName: 'docs',

  
  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig: {
    navbar: {
      title: 'RapidUIX',
      logo: {
        alt: 'RapidUIX Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs/react-native/', label: 'React Native', position: 'left' },
        { to: '/docs/flutter/', label: 'Flutter', position: 'left' },
        { to: '/docs/faq', label: 'FAQ', position: 'left' },
        { href: 'https://github.com/charannsasi/rapiduix-docs', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} RapidUIX.`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
      type: 'text/css',
    },
  ],
};
