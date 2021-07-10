/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: "Vitals.io documentation",
  tagline: "Vitals.io new way to build web    ",
  url: "https://documentation.vitals.io",
  baseUrl: "/",
  projectName: "vitals.io",
  organizationName: "Vitals.io",
  favicon: "img/favicon-96x96.png",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "./docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/StefanoGagliardi/documentation.vitals.io/tree/master/documentation",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themeConfig: {
    image: "img/footer_icon.png", // Non viene usata
    algolia: { // Todo fare API KEY Angolia
      apiKey: "3b7cf26a19755c7de95bcb3632edd314",
      indexName: "superplate",
    },
    navbar: {
      title: "vitals.io",
      logo: {
        alt: "Vitals.io",
        src: "img/vitals-logo@2x.png",
      },
      items: [
        { to: "docs", label: "Docs", position: "right" },
        {
          href: "https://github.com/StefanoGagliardi/documentation.vitals.io",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs",
            },
            {
              label: "Development",
              to: "docs/development/how-it-works",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Github",
              href: "https://github.com/StefanoGagliardi/documentation.vitals.io",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/StefanoGagliardi",
            },
            // {
            //   html: `
            //       <a href="https://github.com/StefanoGagliardi/vitals.io" target="_blank" rel="noreferrer noopener" aria-label="Star this project on GitHub">
            //         <img src="https://img.shields.io/github/stars/pankod/superplate?logo=reverbnation&logoColor=white" alt="github-stars" />
            //       </a>
            //     `,
            // },
          ],
        },
      ],
      logo: {
        alt: "Stefano Gagliardi Logo",
        src: "img/gagliardistefano-logo-light.svg",
        href: "https://github.com/StefanoGagliardi",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Vitals.io, Inc.`,
    },
  },
};

module.exports = siteConfig;
