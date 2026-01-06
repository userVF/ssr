export default function(request, reply, done) {
  if (!this.langs.allowed.includes(request.params.lang)) {
    const segments = request.url.split('/')
    segments.splice(1, 1, this.langs.default)
    return reply.redirect(`${segments.join('/')}`)
  }
  done()
}