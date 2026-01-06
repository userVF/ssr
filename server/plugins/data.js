import fp from 'fastify-plugin'

import data from '../etc/data.js'

export default fp(function(app, opts, done) {
  app.decorate('data', {
    get(lang, items) {
      const result = {}          
      items.forEach(item => {
        result[item] = structuredClone(data[lang][item])
      })
      return result
    }
  })
  done()
})