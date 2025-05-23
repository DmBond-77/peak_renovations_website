// app/api/contact/route.ts
import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // Распарсим тело запроса с правильным типом
    const { name, email, message } = (await req.json()) as {
      name: string;
      email: string;
      message: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Настройка SMTP (пример для mail.ru)
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER!, // ayydi@mail.ru
        pass: process.env.SMTP_PASS!, // пароль или SMTP-токен
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER!}>`, // отправитель — должен быть SMTP_USER
      to: process.env.SMTP_USER!, // временно себе
      subject: "New Contact Form Message",
      html: `
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email sending error:", err);

    // Корректно типизируем ошибку, чтобы избежать any
    const errorMessage =
      err instanceof Error ? err.message : "Email sending failed";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
