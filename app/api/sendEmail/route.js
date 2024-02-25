// import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from "@components/EmailTemplete";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    // await connectToDB();

    // const body = await req.json();

    // const { username,firstName

    const { data, error } = await resend.emails.send({
      from: "CSE-12 Batch <onboarding@resend.dev>",
      to: ["csenajmulislamnaeem@gmail.com"],
      subject: "Welcome to CSE-12 Batch SaintMartin Trip!",
      react: EmailTemplate({ firstName: "Najmul Islam Naeem" }),
    });
    if (error) {
      return Response.json({ error });
    }
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }

  //   res.status(200).json(data);
}

// here is just api , it not used in the project 
// i use it in regester -> e 