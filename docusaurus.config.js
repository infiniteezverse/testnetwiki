// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZENDEX',
  tagline: 'Testnet Wiki',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://testnetwiki.zendex.fi',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'infiniteezverse', // Usually your GitHub org/user name.
  projectName: 'testnetwiki', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/infiniteezverse/testnetwiki/tree/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // TODO: replace with a dedicated social card image
      image: 'img/logo.png',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'ZENDEX Testnet Wiki',
        logo: {
          alt: 'ZENDEX Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'wikiSidebar',
            position: 'left',
            label: 'Wiki',
          },
          {
            href: 'https://www.testnet.zendex.fi/',
            label: 'Testnet',
            position: 'right',
          },
          {
            href: 'https://www.zendex.fi/',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://zendex.carrd.co/',
            label: 'Community Socials',
            position: 'right',
          },
          {
            href: 'https://x.com/zendexfi',
            label: 'On X',
            position: 'right',
          },
          {
            href: 'https://docs.google.com/forms/d/e/1FAIpQLSdoz2zQCio0TjEtFhV1CdVVbmg5aEPhDuH-cGT2lO_HPa6sBw/viewform',
            label: 'Form',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {
                label: 'Introduction',
                to: '/overview-vision/introduction',
              },
              {
                label: 'Testnet Guide',
                to: '/testnet-guide/user-guide',
              },
              {
                label: 'Contract Registry',
                to: '/technical-reference/contract-registry',
              },
              {
                label: 'Roadmap',
                to: '/roadmap/architectural-evolution',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'X / Twitter',
                href: 'https://x.com/zendexfi',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/FHZVdQVz2',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/zendexfi_official',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'ZENDEX.fi',
                href: 'https://zendex.fi',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/infiniteezverse/testnetwiki',
              },
            ],
          },
        ],
        copyright: `ZENDEX © ${new Date().getFullYear()} — Private on-chain execution.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['solidity'],
      },
    }),
};

export default config;
