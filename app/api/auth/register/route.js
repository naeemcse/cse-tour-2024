import User from "@models/User";
import { connectToDB } from "@mongodb";
import { hash } from "bcryptjs";

import { EmailTemplate } from "@components/EmailTemplete";
import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req, res) => {
  try {
    await connectToDB();

    const body = await req.json();

    const { username,firstName, gender,tShirtSize,cseBatch, mobile, email, password } = body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new Response("User already exists", {
        status: 400,
      });
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await User.create({
      username,
      personName: firstName, 
      gender,
      tShirtSize,
      cseBatch,
      mobileNumber: mobile,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const { data, error } = await resend.emails.send({
      from: "CSE-12 Batch <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to CSE-12 Batch SaintMartin Trip!",
      react: EmailTemplate({ firstName: firstName,id:username,mobile:mobile,tShirtSize:tShirtSize}),
    });
   
    return Response.json({ data });


   // return new Response(JSON.stringify(newUser), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to create a new user", {
      status: 500,
    });
  }
};
