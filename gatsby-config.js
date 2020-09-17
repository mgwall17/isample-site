const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `iSamples`,
  },
  plugins: [
    `gatsby-plugin-svgr-svgo`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
  },
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/pages/`,
    },
  },
  {
    resolve: "gatsby-plugin-page-creator",
    options: {
      path: `${__dirname}/src/pages`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: path.join(__dirname, `src`, `images`),
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            srcSetBreakpoints: [ 200, 340, 520, 650, 890 ],
            extensions: [`.mdx`, `.md`],
        },
      }
    ]
    },
  },
  `gatsby-transformer-remark`,
  ]
}