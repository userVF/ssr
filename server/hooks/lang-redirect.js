export default async function(request, reply) {
  if (!this.langConfig.allowed.includes(request.params.lang)) {
    const segments = request.url.split('/')
    segments.splice(1, 1, this.langConfig.default)
    return reply.redirect(`${segments.join('/')}`)
  }
}