const Student = require("../models/student")

const sgMail = require('@sendgrid/mail')

const sgMailApiKey = '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'

sgMail.setApiKey(sgMailApiKey)


exports.studentSignup = async (req, reply) => { 
    try { 
        // console.log(req.body)
        const check = await Student.findOne({studentemail:req.body.studentemail});
        if (check) {
            reply.send ({ "alert" : 'Email already exist!' })
        } else {
            // Insert the new user if they do not exist yet
            const student = new Student(req.body)
            sgMail.send({
                to: req.body.studentemail,
                from: 'balurajadurais@gmail.com',
                subject: "Please confirm your account",
                html: `<h4>Email Confirmation</h4>
                <p>Hello, ${req.body.studentname}</p>
                <p>Thank you for registration. Please confirm your email by clicking on the following link</p>
                <a href="http://localhost:3000/plagarismdetection/studentlogin/"}>Click here</a>
                </div>`,
        
            }).then(() => {
                // console.log("success")
                
            }, error => {
                console.error(error);
             
                if (error.response) {
                  console.error(error.response.body)
                }
              });

            await student.save();
            reply.send({student,"message": 'Student Created!'})
        }
    } 
    catch(error){
        console.log(error)
        reply.send ({ "error" : 'Creation Failed' })    
    } 
}

exports.studentDetail = async (req, reply) => {
    try {
        const studentdetails = await Student.find({});
        reply.code(200).send(studentdetails);
      } catch (e) {
        reply.code(500).send(e);
      }
}