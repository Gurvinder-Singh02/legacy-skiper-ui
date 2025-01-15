import { render } from "@react-email/render";



import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import WelcomeTemplate from './emails';


const resend = new Resend(process.env.RESEND_API_KEY);

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis,
  // 2 requests per minute from the same IP address in a sliding window of 1 minute duration which means that the window slides forward every second and the rate limit is reset every minute for each IP address.
  limiter: Ratelimit.slidingWindow(2, "1 m"),
});

export async function POST(request: NextRequest, response: NextResponse) {
  const ip = request.ip ?? "127.0.0.1";

  console.log("mail request initiaated")
  const result = await ratelimit.limit(ip);

  if (!result.success) {
    return Response.json(
      {
        error: "Too many requests!!",
      },
      {
        status: 429,
      },
    );
  }

  const { email, firstname } = await request.json();

  const { data, error } = await resend.emails.send({
    // from: "Skiper<hello@skiper-ui.com>",
    from: "Acme <onboarding@resend.dev>",
    to: [email],
    subject: "Thankyou for wailisting the Next.js + Notion CMS template!",
    replyTo: "gurvindermaksudra@gmail.com",
    html:  await render(WelcomeTemplate({ userFirstname: firstname })),
  });

  console.log("data and error",data,error)

  // const { data, error } = { data: true, error: null }

  if (error) {
    return NextResponse.json(error);
  }

  if (!data) {
    return NextResponse.json({ message: "Failed to send email" });
  }

  return NextResponse.json({ message: "Email sent successfully" });
}
