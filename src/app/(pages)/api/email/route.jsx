import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api


export async function POST(request) {

  console.log(request.method, "something is cooking");

    const username = "noreply@ownfood.com.bd"
    const password = "HD@OWNFOOD4321"
    const myEmail = "mainul@smartframeworkbd.com"




    console.log("dealing with request")
    const formData = await request.formData()
    const email = formData.get('email')
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const telephone = formData.get('telephone')
    const company = formData.get('company')
    const address = formData.get('address')

    const  message=formData.get('message');
    const imgFile = formData.get('file');
    const template = formData.get('template');

    let htmlContent = '';

    if (template === "one") {
      htmlContent = `
        <p>Primary Email: ${email} </p>
        <p>First Name: ${firstName} </p>
        <p>Last Name: ${lastName} </p>
        <p>Phone Number: ${telephone} </p>
        <p>Company: ${company} </p>
        <p>Address: ${address} </p>
      `;
    } else if (template === "two") {
      htmlContent = `
        <p>Primary Email: ${email} </p>
        <p>First Name: ${firstName} </p>
        <p>Last Name: ${lastName} </p>
        <p>Phone Number: ${telephone} </p>
        <p>Message: ${message} </p>
      `;
    }
  
    // create transporter object
    const transporter = nodemailer.createTransport({
        host: "mail.ownfood.com.bd",
        port: 587,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },

        auth: {

            user: username,
            pass: password
        }
    });
    const mailOptions = {
    from: username,
    to: myEmail,
    replyTo: email,
    subject: `Website activity from ${email}`,
    html: htmlContent,
  };
  console.log(imgFile.name,imgFile.type);
  
  if (template === "two" && imgFile) {
    const fileBuffer = await imgFile.arrayBuffer();
    mailOptions.attachments = [
      {
        filename: imgFile.name,
        content: Buffer.from(fileBuffer),
        contentType: imgFile.type,
      },
    ];
  }

    try {

        const mail = await transporter.sendMail(mailOptions)
            

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }


}


