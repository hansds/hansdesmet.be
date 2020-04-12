const title =
  'Hans De Smet - Freelance 8x certified Salesforce consultant and developer from Belgium'
const url = 'https://www.hansdesmet.be'
export default {
  /*
   ** Headers of the page
   */
  head: {
    title,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Hans De Smet is a freelance IT architect and 8x certified Salesforce consultant and developer from Belgium. He is passionate about technology, business and design.'
      },
      {
        name: 'keywords',
        content:
          'salesforce, consultant, consultancy, IT consultant, consulting, heroku, sales cloud, service cloud, CRM, developer, development, marketing cloud, einstein analytics, analytics, BI, aalst, belgium, AI, hans de smet'
      },
      {
        property: 'og:description',
        content:
          'Hans De Smet is a freelance IT architect and 8x certified Salesforce consultant and developer from Belgium. He is passionate about technology, business and design.'
      },
      {
        property: 'og:image',
        content: 'https://www.hansdesmet.be/avatar@2x.jpg'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:url',
        content: url
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'http://schema.org',
          '@type': 'LocalBusiness',
          name: 'Hans De Smet',
          image: 'https://www.hansdesmet.be/avatar@2x.jpg',
          '@id': url,
          url,
          logo: 'https://www.hansdesmet.be/logo.png',
          telephone: '+32476959269',
          priceRange: '€',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Welvaartstraat 141',
            addressLocality: 'Aalst',
            postalCode: '9300',
            addressCountry: 'BE'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 50.94324599999999,
            longitude: 4.0245133999999325
          },
          founder: {
            '@context': 'http://schema.org/',
            '@type': 'Person',
            name: 'Hans De Smet',
            url,
            image: 'https://www.hansdesmet.be/avatar@2x.jpg',
            jobTitle: 'IT Consultant',
            worksFor: {
              '@type': 'Organization',
              name: 'Hans De Smet'
            }
          },
          sameAs: [
            'https://www.facebook.com/hansdesmet/',
            'https://www.linkedin.com/in/hans-de-smet',
            'https://github.com/hansds'
          ],
          potentialAction: {
            '@type': 'ReserveAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.hansdesmet.be/contact',
              inLanguage: 'en-US',
              actionPlatform: [
                'http://schema.org/DesktopWebPlatform',
                'http://schema.org/IOSPlatform',
                'http://schema.org/AndroidPlatform'
              ]
            },
            result: {
              '@type': 'Reservation',
              name: 'Contact'
            }
          }
        })
      }
    ]
  },
  css: ['@/assets/styles/main.scss'],
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#314EFF'
  },
  plugins: [
    {
      src: '~/plugins/intersection-observer',
      ssr: false
    },
    {
      src: '~/plugins/vee-validate'
    }
  ],
  /**
   * Modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap'
  ],
  axios: {
    baseURL: process.env.BASE_URL
  },
  'google-analytics': {
    id: 'UA-37674262-1'
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.hansdesmet.be',
    gzip: true,
    generate: true
  },
  styleResources: {
    scss: ['./assets/styles/_variables.scss', './assets/styles/_mixins.scss']
  },
  /*
   * Router
   */
  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 5) {
              return resolve()
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1))
            }, 100)
          })
        )
      }

      if (to.hash) {
        const el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({
            top: el.offsetTop,
            behavior: 'smooth'
          })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return {
        x: 0,
        y: 0
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    extend(config, { isDev, isClient }) {
      // Excludes /assets/svg from url-loader, then passing it into svg-sprite-loader
      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))
      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        use: 'svg-sprite-loader'
      })
    }
  },
  generate: {
    // Generates a 404.html file, which is automatically picked up by Netlify
    fallback: true
  }
}
