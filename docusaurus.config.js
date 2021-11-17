const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MixPay',
  tagline: 'MixPay Development Documents',
  url: 'https://developers.mixpay.me',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'images/favicon.ico',
  organizationName: 'MixPay', // Usually your GitHub org/user name.
  projectName: 'developers.mixpay.me', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'MixPay Developer',
      logo: {
        alt: 'MixPay Developer',
        src: 'images/mixpay.svg',
      },
      items: [
        {to: '/docs/introduction', label: 'Docs', position: 'left'},
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/mixin',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/Mixin_Network',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ExinOne',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MathUnion`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  plugins: [
    'docusaurus-plugin-sass',
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebar.docs.js'),
          path: 'docs',
          routeBasePath: '/docs',
          // Please change this to your repo.
          editUrl: 'https://developers.mixpay.me',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        }
      },
    ],
  ],
};
