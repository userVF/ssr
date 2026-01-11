'use strict'

import { test } from 'node:test'
import assert from 'node:assert/strict'

import { build } from '../app.js'

test('Lang redirect', async () => {
  const app = await build()
  const response = await app.inject({
    method: 'GET',
    url: '/'
  })
  assert.strictEqual(response.statusCode, 302)
  assert.strictEqual(response.headers['location'], `/${app.langs.default}`)
})

test('Home page', async () => {
  const app = await build()
  const response = await app.inject({
    method: 'GET',
    url: `/${app.langs.default}`
  })
  assert.strictEqual(response.statusCode, 200)
  assert.strictEqual(response.headers['content-type'], 'text/html')
})

test('Home API', async () => {
  const app = await build()
  const response = await app.inject({
    method: 'GET',
    url: `/${app.langs.default}/api/home`
  })
  assert.strictEqual(response.statusCode, 200)
  assert.ok(response.headers['content-type'].includes('application/json'))
})

test('Not found page', async () => {
  const app = await build()
  const response = await app.inject({
    method: 'GET',
    url: `/${app.langs.default}/xxx`
  })
  assert.strictEqual(response.statusCode, 404)
})

test('Not found API', async () => {
  const app = await build()
  const response = await app.inject({
    method: 'GET',
    url: `/${app.langs.default}/api/xxx`
  })
  assert.strictEqual(response.statusCode, 404)
})