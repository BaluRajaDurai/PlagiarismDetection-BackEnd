const fastify = require('fastify')()

fastify.register(require('fastify-cors'),{
})

fastify.register(require('./src/routes/student'))

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin123@mycluster.n4gnk.mongodb.net/PlagiarismDetection?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Mongo is ready !"))
.catch(err=> console.log(err))

  
  // Declare a route
  fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })
 
fastify.listen(5000, err => {
    if (err) throw err
    console.log(`server listening on ${fastify.server.address().port}`)
})