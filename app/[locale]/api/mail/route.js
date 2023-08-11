import { NextResponse } from "next/server";
const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request, context) {
  const body = await request.json();

  console.log("body", body);
  const message = `
      <strong>Vor- und Nachname:</strong> ${body.name}\r\n
      <strong>Email:</strong>  ${body.email}\r\n
      <strong>Datum:</strong>  ${body.date}\r\n
      <strong>Hochzeitslocation:</strong>  ${body.hochzeitslocation}\r\n
      <strong>Stil der Hochzeit:</strong>  ${body.hochzeitsstil}\r\n
      <strong>Wie habt ihr mich gefunden:</strong>  ${body.wieGefunden}\r\n
      <strong>Nachricht:</strong>  ${body.message}\r\n
      <strong>Instagram:</strong>  ${body.instagram}\r\n
      <strong>Datenschutz:</strong>  ${body.datenschutz}
    `;

  try {
    await mail.send({
      to: "info@bild-hochzeit.de",
      from: "info@bild-hochzeit.de",
      subject: `Hochzeitsanfrage von ${body.name} am ${body.date} in ${body.hochzeitslocation}`,
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    });

    return NextResponse.json({ status: "Ok" });
  } catch (err) {
    return NextResponse.json({ error: err.toString() });
  }
}
