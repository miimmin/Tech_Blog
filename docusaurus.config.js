const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: '상민!',
  tagline: 'Dinosaurs are cool',
  url: 'https://miimmin.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/melting.ico',
  organizationName: 'miimmin', // Usually your GitHub org/user name.
  projectName: 'tech-blog', // Usually your repo name.
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: false,
          editLocalizedFiles: false,

          // Please change this to your repo.
        },
        // themes: ['@docusaurus/theme-classic', '@docusaurus/theme-live-codeblock'],
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '상민!',
        logo: {
          alt: 'My Site Logo',
          srcDark: 'img/melting.png',
          src: 'img/melting.png',
        },
        hideOnScroll: true,
        items: [
          { to: '/docs/cs/', label: 'CS', position: 'left',},
          { to: '/docs/dev/', label: 'DEV', position: 'left' },
          {
            href: 'https://github.com/miimmin',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()}  Sangmin Lee `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // additionalLanguages: ['powershell'],
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'developer',
        routeBasePath: 'developer',
        path: 'developer',
        blogTitle: 'Developer',
        blogSidebarTitle: 'Developer DOC',
        blogDescription: '에러 해결 기록',

        showReadingTime: false,
        editLocalizedFiles: false,


      },
    ],
  ],
});
