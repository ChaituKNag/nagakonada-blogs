---
title: Headless CMS comparison from JAMStack perspective (Gatsby)
description: A fun comparison of popular headless cms frameworks or tools out there.
id: headless-cms-comparison
sidebar_label: Headless CMS Comparison
---

> I am more than confident that headless architectures will rule the future.

## What are JAMStack projects

JAMStack has been popularised by teams like [Netlify](https://www.netlify.com/) who along with many static site generator frameworks like [Gatsby](https://www.gatsbyjs.org/) are making the process of hosting sites way better than before. If you are anyone like me, you must have utilised Gatsby and Netlify and one of the headless CMS tools out there already. No?

Checkout [JAMStack.org](https://jamstack.org/) site to know more about JAM stack and its advantages over traditional stacks.

## What are Headless CMS tools

These are CMS tools where content is decoupled from their respective templates, thus avoiding the tight dependency of frontend projects on these CMS tools. If these are used, front-end developer can easily get the content and plug it in wherever required for the application they are making.

These CMS tools will expose an API layer that gets consumed by the front-end setup, as a traditional REST api or a GraphQL api.

Static Site Generators, will consume this API and generate static HTML pages that can be hosted easily without an actual server -- the whole point of JAMStack.

Checkout the [HeadlessCMS.org](https://headlesscms.org/) site for a quick look at the plethora of these kind of CMS solutions out there, sorted by their popularity.

Also checkout [StaticGen.com](https://www.staticgen.com/) which has a similar listing for Static Site Generator tools out there, sorted by their popularity.

## What is the comparison then

Recently, I went through a bunch of these CMS solutions against the Gatsby framework, mainly understanding how well and easy, we can integrate them with an existing Gatsby setup, how easily we can migrate content to these CMS tools and how easily we can maintain these.

Here is a full list of comparisons I did ⬇️

| Feature                                    | Netlify CMS             | Contentful              | Strapi CMS              | Tina CMS                       |
| ------------------------------------------ | ----------------------- | ----------------------- | ----------------------- | ------------------------------ |
| Gatsby integration                         | Yes                     | Yes                     | Yes                     | Yes                            |
| Cloud based                                | No                      | Yes                     | No                      | No                             |
| Separate repo                              | No                      | No                      | Yes                     | No                             |
| Authentication                             | GitHub/GitLab/BitBucket | GitHub/Google/Twitter   | Email based/random UID  | Anyone with access to the repo |
| Static files                               | Yes                     | No                      | No                      | Yes                            |
| Same repo                                  | Yes                     | No                      | No                      | Yes                            |
| Multi-media                                | Repo-based              | Cloud-based             | Independent             | Repo-based                     |
| Integration changes                        | Low                     | Low                     | Low                     | Medium                         |
| Incremental builds                         | Yes, possible           | No, full build required | No, full build required | Yes, possible                  |
| CMS UI                                     | Separate                | Separate                | Separate                | Integrated                     |
| CMS Component support                      | No                      | No                      | Yes                     | No                             |
| Content Types                              | Yes                     | Yes                     | Yes                     | No                             |
| File formats                               | Markdown, Yaml, JSON    | N/A                     | N/A                     | Markdown, JSON                 |
| Component modification required (one time) | No                      | No                      | No                      | Yes                            |
| Multi-site support                         | No                      | Yes                     | Yes                     | No                             |
| Webhooks                                   | Not required            | Yes                     | Yes                     | Not required                   |
| Content migration                          | Possible                | Not possible            | Not possible            | Possible                       |

How do you find this comparison to be? Would you like to add more details? Probably more points to compare? Have you done a similar comparison with these (or other) CMS tools? Please jump in and leave a comment. I will definitely check them out.
