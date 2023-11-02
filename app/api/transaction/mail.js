import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export default async function mail(email,otp ,tranType) {
  
  const transport = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "mathematicsstudent12345@gmail.com",
      pass: 'owtf whta bzrh qlhh',
    },
  });

  const mailOptions= {
    from: "mathematicsstudent12345@gmail.com",
    to: [email],
  
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from Hiranmoy`,
    html: `<h1>your Account is successfully ${tranType} with an ammount of : ${otp}</h1>`,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
         
        } else {
          reject(err.message);
        }
      });
    });
  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
