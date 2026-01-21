import fp from 'fastify-plugin'

import data from '../utils/data.js'

export default fp(async function(app) {
  app.decorate('data', {
    get(lang, items) {
      const result = {}          
      items.forEach(item => {
        result[item] = structuredClone(data[lang][item])
      })
      return result
    }
  })
})