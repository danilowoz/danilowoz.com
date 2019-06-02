const path = require('path')

module.exports = {
  title: 'Danilo Woznica',
  shortName: `Danilo Woznica`,
  description:
    'I’m a 26-year-old UI developer with 8+ years of professional experience with large and medium-sized projects. I’m currently working in Porto, Portugal.',
  shortBio: '',
  bio: `I’m a 26-year-old UI developer with 8+ years of professional experience with large and medium-sized projects. I’m currently working in Porto, Portugal.`,
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
    { name: 'Blog', to: '#blog' },
    { name: 'Open source', to: '#open-source' },
    { name: 'Where I have been', to: '#blog' },
    { name: 'Contact', to: '#contact' },
  ],
}
