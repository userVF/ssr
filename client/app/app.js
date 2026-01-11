import { createSSRApp } from 'vue'

import App from './App.vue'
import createRouter from './store/router.js'
import createHome from '@/pages/home/store/home.js'
import createAbout from '@/pages/about/store/about.js'
import createContacts from '@/pages/contacts/store/contacts.js'

export function createApp(ctx) {
  
  const app = createSSRApp(App)

  const { lang, view, params, path } = ctx.config

  app.provide('router', createRouter({ lang, view, params, path }))

  app.provide('header', ctx.data.header)
  app.provide('home', createHome(ctx.data?.homeData))
  app.provide('about', createAbout(ctx.data?.aboutData))  
  app.provide('contacts', createContacts(ctx.data?.contactsData))
  app.provide('notFound', ctx.data?.notFoundData)
  app.provide('footer', ctx.data.footer)

  app.config.errorHandler = (err, instance, info) => {
    console.log('Vue app.errorHandler ', err, instance, info)
  }

  return app
}