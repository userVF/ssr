import fs from 'node:fs/promises'
import { resolve } from 'node:path'
import { join } from 'desm'
import crypto from 'node:crypto'

import pageRoutes from '../routes/page.js'
import { renderAppHtml } from '../../build/server/entry-server.js'

const rawHtmlPath = resolve(join(import.meta.url, '..', '..', 'build/client/html/index.html'))
const rawHtml = await fs.readFile(rawHtmlPath, { encoding: 'utf8' })

export default function(app, _opts, done) {  

  app.decorate('renderPage', async ctx => {

    const { config, data } = ctx
    const nonceStr = crypto.randomUUID()

    const appHtml = await renderAppHtml(ctx)

    let html = rawHtml
      .replace('!--title--', data['headData']['title'])
			.replace('!--lang--', config['lang'])
      .replace('!--description--',  data['headData']['description'])
      .replace('!--csp--', 
        `<meta http-equiv="Content-Security-Policy" 
          content="default-src 'self' ${process.env.STATIC_ORIGIN} ;
          script-src 'nonce-${nonceStr}' ${process.env.STATIC_ORIGIN} ;
          style-src ${process.env.STATIC_ORIGIN} ;"
        >`
      )
      .replace('!--state--', 
        `<script nonce="${nonceStr}">
          window.__INIT_STATE__ = ${JSON.stringify({ config, data })}
        </script>`
      )
			.replace('!--html--', appHtml)

    return html
    
  })

  app.register(pageRoutes, { prefix: '/:lang' })

  done()

}