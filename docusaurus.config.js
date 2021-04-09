/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Naga Chaitanya Konada",
  tagline: "Lets learn something new today",
  url: "https://thebestdeveloper.me",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "ChaituKNag", // Usually your GitHub org/user name.
  projectName: "thebestdeveloper.me", // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: true,
    hideableSidebar: true,
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true
    },
    navbar: {
      title: "Naga Chaitanya Konada",
      hideOnScroll: false,
      style: "primary",
      logo: {
        alt: "This is the site of KNC",
        src: "img/favicon.png"
      },
      items: [
        // {
        //   to: "docs/",
        //   activeBasePath: "articles",
        //   label: "Articles",
        //   position: "left"
        // },
        {
          label: "Blog",
          position: "left",
          items: [
            {
              to: "blog",
              label: "Personal"
            },
            {
              label: "Learn",
              href: "https://learn.nagakonada.com"
            }
          ]
        },
        {
          href: "https://github.com/ChaituKNag",
          label: "GitHub",
          position: "right"
        },
        {
          href: "https://thebestdeveloper.me",
          label: "TBD.me",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Style Guide",
        //       to: "docs/"
        //     },
        //     {
        //       label: "Second Doc",
        //       to: "docs/doc2/"
        //     }
        //   ]
        // },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Naga Chaitanya Konada`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // docs: {
        //   sidebarPath: require.resolve("./sidebars.js"),
        //   // Please change this to your repo.
        //   editUrl: "https://github.com/facebook/docusaurus/edit/master/website/"
        // },
        docs: false,
        blog: {
          showReadingTime: true,
          blogSidebarCount: 0,
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/blog/",
          postsPerPage: 5
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
