
const fastify = require('fastify')({ logger: true });
const path =require('path');
const { pathToFileURL } = require('url');

fastify.register(require('fastify-static'),{
    root:path.join(__dirname,'public'),
    prefix:'/public/',//optional:default'/'
})


fastify.get('/',function(Request,reply){
    reply.sendFile('index.html')


})

const start = async () => {
    try {
      await fastify.listen(3002)
      fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  
  start()