import svgLoader from 'vite-svg-loader'

const title =
  'Hans De Smet - Entrepreneur and 8x certified Salesforce consultant and developer from Belgium'
const url = 'https://www.hansdesmet.be'

export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title,
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Hans De Smet is an entrepreneur and 8x certified Salesforce consultant and developer from Belgium. He is passionate about technology, business and design.'
        },
        {
          name: 'keywords',
          content:
            'salesforce, consultant, consultancy, IT consultant, consulting, heroku, sales cloud, service cloud, CRM, developer, development, marketing cloud, einstein analytics, analytics, BI, aalst, belgium, AI, hans de smet'
        },
        {
          property: 'og:description',
          content:
            'Hans De Smet is an entrepreneur and 8x certified Salesforce consultant and developer from Belgium. He is passionate about technology, business and design.'
        },
        {
          property: 'og:image',
          content: 'https://www.hansdesmet.be/avatar@2x.jpg'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: title },
        { property: 'og:url', content: url }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
    }
  },

  css: ['@/assets/styles/main.scss'],

  modules: ['@pinia/nuxt', '@nuxtjs/sitemap'],

  site: {
    url: 'https://www.hansdesmet.be'
  },

  sitemap: {
    gzip: true
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/styles/_variables.scss"; @import "@/assets/styles/_mixins.scss";'
        }
      }
    },
    plugins: [svgLoader({ defaultImport: 'component' })]
  },

  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

  compatibilityDate: '2024-11-01'
})
