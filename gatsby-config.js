module.exports = {
    siteMetadata: {
      title: `Gatsby Personal Site Demo`,
      description: `Personal Website built with Gatsby`,
      author: ``,
      baseUrl: `https://youthful-yonath-7e38ab.netlify.com/`,
    },
    plugins: [
      `gatsby-plugin-netlify-cms`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sass`,
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/pages`,
          name: 'markdown-pages',
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 600,
              },
            },
            `gatsby-remark-prismjs`,
          ],
        },
      },
      `gatsby-transformer-json`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/data`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `gatsby-starter-default`,
          short_name: `starter`,
          start_url: `/`,
          background_color: `#663399`,
          theme_color: `#663399`,
          display: `minimal-ui`,
          icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        },
      },
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.app/offline
      // 'gatsby-plugin-offline',
    ],
  };