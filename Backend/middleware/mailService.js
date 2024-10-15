const nodemailer = require("nodemailer");
const APP_EMAIL = process.env.APP_EMAIL;
const APP_PASSWORD = process.env.APP_PASSWORD;


const mailService = async (email , password)=>{
    const transporter = nodemailer.createTransport({
        host: "gmail",
        service:'gmail',
        auth: {
          user: APP_EMAIL,   // Host email
          pass: APP_PASSWORD
        },
      });
    
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: APP_EMAIL, // sender address
        to: email,
        subject: "Welcome to Traffic Squad",
        text: "Your Details has been added for the challan management system.",
        html: `<h3>Your Credentials for accessing the systems are as belows: </h3><br/>
        <p>Your Email for Traffic Squad App Login is ${email}</p>
        <br/>
        <p>Your Password for Traffic Squad App is ${password}</p>
        <br/>
        <p>Please dont share your credentials with anyone</p>`,
      });

      return info;
}


module.exports = mailService;