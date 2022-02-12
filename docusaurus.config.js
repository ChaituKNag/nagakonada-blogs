/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Naga Chaitanya Konada",
  tagline:
    "Hi 👋 I am Naga Konada. Learn all about frontend technologies here 🚀",
  url: "https://nagakonada.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "ChaituKNag", // Usually your GitHub org/user name.
  projectName: "thebestdeveloper.me", // Usually your repo name.
  //   ssrTemplate: `
  //   <!DOCTYPE html>
  // <html <%~ it.htmlAttributes %>>
  //   <head>
  //     <meta charset="UTF-8">
  //     <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86">
  //     <meta name="generator" content="Docusaurus v<%= it.version %>">
  //     <%~ it.headTags %>
  //     <% it.metaAttributes.forEach((metaAttribute) => { %>
  //       <%~ metaAttribute %>
  //     <% }); %>
  //     <% it.stylesheets.forEach((stylesheet) => { %>
  //       <link rel="stylesheet" type="text/css" href="<%= it.baseUrl %><%= stylesheet %>" />
  //     <% }); %>
  //     <% it.scripts.forEach((script) => { %>
  //       <link rel="preload" href="<%= it.baseUrl %><%= script %>" as="script">
  //     <% }); %>
  //   </head>
  //   <body <%~ it.bodyAttributes %> itemscope="" itemtype="http://schema.org/Organization">
  //     <%~ it.preBodyTags %>
  //     <div id="__docusaurus">
  //       <%~ it.appHtml %>
  //     </div>
  //     <% it.scripts.forEach((script) => { %>
  //       <script type="text/javascript" src="<%= it.baseUrl %><%= script %>"></script>
  //     <% }); %>
  //     <%~ it.postBodyTags %>
  //     <script async data-uid="aaac60e932" src="https://nagakonada-blogs.ck.page/aaac60e932/index.js"></script>
  //   </body>
  // </html>
  //   `,
  themeConfig: {
    sidebarCollapsible: true,
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: "🌘",
        darkIconStyle: {
          marginLeft: "2px"
        },
        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: "💡",
        lightIconStyle: {
          marginLeft: "1px"
        }
      }
    },
    navbar: {
      title: "Naga Konada",
      hideOnScroll: false,
      logo: {
        alt: "This is the site of KNC",
        src: "img/favicon.png"
      },
      items: [
        {
          to: "all-articles",
          label: "Articles",
          position: "left"
        },
        // {
        //   href: "https://anchor.fm/learn-with-naga",
        //   label: "Listen",
        //   position: "right"
        // },
        {
          to: "all-podcasts",
          label: "Podcasts"
        },
        {
          label: "Blog",
          to: "blog"
        },
        {
          label: "Contact me",
          to: "contact"
        },
        {
          href: "https://github.com/ChaituKNag",
          label: "GitHub"
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
              href: "https://join.slack.com/t/naga-konada-devtips/shared_invite/zt-ovocnvb6-5r09AN9bP5rD8D7xUqDxcQ"
            },
            {
              label: "Follow me on Telegram",
              href: "https://t.me/all_interesting_learning"
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
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/ChaituKNag/nagakonada-blogs/edit/main/",
          showLastUpdateTime: true
        },
        // docs: false,
        blog: {
          showReadingTime: true,
          blogSidebarCount: 0,
          editUrl: "https://github.com/ChaituKNag/nagakonada-blogs/edit/main/",
          postsPerPage: 5
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        },
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
          trailingSlash: false
        },
        gtag: {
          trackingID: "GTM-TPST72K",
          anonymizeIP: true
        }
      }
    ]
  ],
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "saveData",
          "mobile"
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/favicon.png"
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json" // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#f25f5c"
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes"
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#f25f5c"
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/img/favicon.png"
          }
        ]
      }
    ]
  ]
};
