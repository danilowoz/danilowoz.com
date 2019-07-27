const path = require('path')

module.exports = {
  title: 'Danilo Woznica - Design-driven developer focused on crafting meaningful products',
  shortName: `Danilo Woznica`,
  description:
    'Brazilian frontend developer based in Porto, Portugal. Design-driven developer focused on crafting meaningful products',
  shortBio: 'Brazilian frontend developer based in Porto, Portugal.',
  bio: `Brazilian frontend developer based in Porto, Portugal. Design-driven developer focused on crafting meaningful products`,
  author: 'Danilo Woznica',
  githubUrl: 'https://github.com/danilowoz',
  siteUrl: 'https://danilowoz.com',
  social: {
    twitter: 'danilowoz',
    medium: '@danilowoznica',
    facebook: 'danilowoz',
    github: 'danilowoz',
    linkedin: 'danilowoz',
    instagram: 'danilowoz',
  },
  keywords: [
    'design',
    'reactjs',
    'opensource',
    'development',
    'strategy',
    'interface',
    'digital',
    'product',
  ],
  themeColor: '#000',
  backgroundColor: '#fff',
  pathPrefix: null,
  logo: path.resolve(__dirname, '../src/images/icon.png'),
  menu: [
    { name: 'Articles', to: '#articles' },
    { name: 'Labs', to: '#labs' },
    { name: 'About', to: '#about' },
  ],
}
