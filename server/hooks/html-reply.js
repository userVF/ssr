export default function(_request, reply, payload, done) {
  reply.type('text/html')  
  done(null, payload)
}