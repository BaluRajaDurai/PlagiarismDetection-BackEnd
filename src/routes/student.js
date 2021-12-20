const { studentSignup, studentDetail} = require("../controllers/student")
module.exports = async function (fastify, opts, done) {


    fastify.post('/studentsignup',studentSignup)

    fastify.get('/studentdetail',studentDetail)

    done();
}