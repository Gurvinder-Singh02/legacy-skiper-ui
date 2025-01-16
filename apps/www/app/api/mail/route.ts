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

  const newName = funName(firstname)

  const { data, error } = await resend.emails.send({
    from: "Skiper-Ui<hello@skiper-ui.com>",
    // from: "Acme <onboarding@resend.dev>",
    to: [email],
    subject: `Thanks ${newName} for Joining Skiper-ui `,
    // subject: `Thankyou for wailisting the Next.js + Notion CMS template!`,
    replyTo: "gurvindermaksudra@gmail.com",
    html:  await render(WelcomeTemplate({ userFirstname: newName })),
  });

  console.log("data and error",data,error)

  if (error) {
    return NextResponse.json(error);
  }

  if (!data) {
    return NextResponse.json({ message: "Failed to send email" });
  }

  return NextResponse.json({ message: "Email sent successfully" });
}

function funName(name:string) {
  const priority = ['i', 'e', 'o', 'a', 'u'];
  let vowelToRepeat = '';
  let lastVowelIndex = -1;

  for (let i = name.length - 1; i >= 0; i--) {
      if (priority.includes(name[i])) {
          vowelToRepeat = name[i];
          lastVowelIndex = i;
          break;
      }
  }

  if (vowelToRepeat) {
      name = name.slice(0, lastVowelIndex) + vowelToRepeat.repeat(4) + name.slice(lastVowelIndex + 1);
  }

  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); // Capitalize the first letter
}