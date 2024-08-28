import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

export async function POST(request) {
  console.log(request.method, "something is cooking");

  const username = "noreply@ownfood.com.bd";
  const password = "HD@OWNFOOD4321";
  const myEmail = "mainul@smartframeworkbd.com";

  console.log("dealing with request");
  const formData = await request.formData();

  const templateFields = {
    one: ['email', 'firstName', 'lastName', 'telephone', 'company', 'address'],
    two: ['email', 'firstName', 'lastName', 'telephone', 'message', 'file'],
  };

  const template = formData.get('template');
  const fields = templateFields[template];

  if (!fields) {
    return NextResponse.json({ message: "Invalid template" }, { status: 400 });
  }

  const data = {};

  fields.forEach(field => {
    data[field] = formData.get(field);
  });

  const { email, firstName, lastName, telephone, company, address, message, file: imgFile } = data;

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
      <p>First Name: ${firstName} </p>
      <p>Last Name: ${lastName} </p>
      <p>Email: ${email} </p>
      <p>Phone Number: ${telephone} </p>
      <p>Message: ${message} </p>
    `;
  }

  const transporter = nodemailer.createTransport({
    host: "mail.ownfood.com.bd",
    port: 587,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: username,
      pass: password,
    },
  });

  const mailOptions = {
    from: username,
    to: myEmail,
    replyTo: email,
    subject: `Website activity from ${email}`,
    html: htmlContent,
  };

  // Check if the file exists and is valid
  if (template === "two" && imgFile && imgFile.size > 0) {
    try {
      const fileBuffer = await imgFile.arrayBuffer();
      mailOptions.attachments = [
        {
          filename: imgFile.name,
          content: Buffer.from(fileBuffer),
          contentType: imgFile.type,
        },
      ];
    } catch (error) {
      console.error("Error reading file: ", error);
      return NextResponse.json({ message: "Error processing file" }, { status: 500 });
    }
  }

  try {
    const res = await transporter.sendMail(mailOptions);
    console.log(res);

    // Send thank you email to the sender
    const thankYouMailOptions = {
      from: username,
      to: email,
      subject: "Thank You for Your Submission",
      html: `
        <p>Dear ${firstName},</p>
        <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
        <p>Best regards,<br>The Team</p>
      `,
    };

    await transporter.sendMail(thankYouMailOptions);

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 });
  }
}
