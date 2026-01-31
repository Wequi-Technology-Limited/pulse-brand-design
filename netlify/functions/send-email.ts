import type { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body || "{}");

    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: "Name, email, and message are required." }) };
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secureEnv = process.env.SMTP_SECURE;
    const secure = secureEnv ? secureEnv === "true" : port === 465;

    if (!host || !user || !pass) {
      return { statusCode: 500, body: JSON.stringify({ error: "SMTP credentials are not configured." }) };
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const to = process.env.MAIL_TO || user;
    const from = process.env.MAIL_FROM || user;

    const htmlBody = `
      <h2>New contact message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject || "(none)"}</p>
      <p><strong>Message:</strong></p>
      <p>${(message || "").replace(/\n/g, "<br />")}</p>
    `;

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: subject || "Website contact form",
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "(none)"}\n\n${message}`,
      html: htmlBody,
    });

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error("Send email failed:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to send message." }) };
  }
};

export { handler };
