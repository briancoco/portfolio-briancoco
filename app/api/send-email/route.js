import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(request) {
  const body = await request.json();
  const {name, email, message} = body;

  // send email
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS

    }
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: `Portfolio Inqury from ${name}, ${email}`,
    text: message
  }

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({success: true});
  } catch (error) {
    return NextResponse.json({success: false, error: error.message}, {status: 500});
  }
}