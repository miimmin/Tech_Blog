const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: '상민!',
  tagline: 'Dinosaurs are cool',
  url: 'https://miimmin.github.io',
  baseUrl: '/Tech-Blog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/mon.ico',
  organizationName: 'miimmin', // Usually your GitHub org/user name.
  projectName: 'Tech-Blog', // Usually your repo name.

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
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
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
          srcDark: 'img/dfairy.png',
          src: 'img/sfairy.png',
        },
        items: [
          { to: '/docs/dev/', label: '개발', position: 'left' },
          { to: '/docs/books/', label: '책', position: 'left' },

          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/miimmin',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '개발',
                to: '/docs/dev/',
              },
              {
                label: '책',
                to: '/docs/books/',
              },
              {
                label: '기록',
                to: '/blog',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/miimmin',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Genie's Dev Blog, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
