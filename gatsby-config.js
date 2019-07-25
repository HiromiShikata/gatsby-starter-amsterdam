module.exports = {
  siteMetadata: {
    title: 'John Doe',
    author: 'John Doe',
    description:
      'John Doe is a lifestyle photographer based in San Francisco, CA',
    intro: 'John Doe is a lifestyle photographer based in San Francisco, CA',
    menuLinks: [
      {
        name: 'John Doe',
        slug: '/',
      },
      {
        name: 'Example Page',
        slug: '/example/',
      },
    ],
    footerLinks: [
      {
        name: 'Gatsby Theme Amsterdam',
        url: 'https://github.com/ryanwiemer/gatsby-theme-amsterdam',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {},
    },
  ],
}