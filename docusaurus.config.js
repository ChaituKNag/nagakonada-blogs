/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Naga Chaitanya Konada",
  tagline: "Come let's learn something new today 🚀",
  url: "https://thebestdeveloper.me",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "ChaituKNag", // Usually your GitHub org/user name.
  projectName: "thebestdeveloper.me", // Usually your repo name.
  // scripts: [
  //   {
  //     src: "https://nagakonada-blogs.ck.page/0963dc396c/index.js",
  //     "data-uid": "0963dc396c",
  //     async: true
  //   }
  // ],
  themeConfig: {
    sidebarCollapsible: true,
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true
    },
    navbar: {
      title: "Naga Chaitanya Konada",
      hideOnScroll: false,
      logo: {
        alt: "This is the site of KNC",
        src: "img/favicon.png"
      },
      items: [
        {
          to: "articles",
          label: "Articles",
          position: "left"
        },
        {
          label: "Blog",
          position: "right",
          to: "blog"
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
      // style: "light",
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
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/nagachaitanyakonada/"
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/channel/UCl5dc2m9rRGZsAu04ytfDjw"
            },
            {
              label: "GitHub",
              href: "https://github.com/ChaituKNag"
            }
          ]
        },
        {
          title: "Posts",
          items: [
            {
              label: "Medium",
              href: "https://medium.com/@nagachaitanyakonada"
            },
            {
              label: "Dev.to",
              href: "https://dev.to/chaituknag"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/ItsKNC"
            },
            {
              label: "Facebook",
              to: "https://www.facebook.com/ChaituKNag"
            },
            {
              label: "Instagram",
              to: "https://www.instagram.com/chaituknag/"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "Portfolio (TBD.me)",
              href: "https://thebestdeveloper.me"
            },
            {
              label: "Join me on Slack",
              href:
                "https://join.slack.com/t/naga-konada-devtips/shared_invite/zt-ovocnvb6-5r09AN9bP5rD8D7xUqDxcQ"
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
        docs: {
          path: "articles",
          routeBasePath: "articles",
          sidebarPath: require.resolve("./sidebars.js")
          // Please change this to your repo.
          // editUrl: "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        // docs: false,
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
