import { NextResponse } from "next/server";
const fragebogen = require("@sendgrid/mail");

fragebogen.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request, context) {
  const body = await request.json();

  const message = `
  ------------- Persönliche Daten: -------------\r\n
    <br />
    <strong>Braut Name:</strong> ${body.namebraut}\r\n
    <br />
    <strong>Braut Email:</strong>  ${body.emailbraut}\r\n
    <br />
    <strong>Braut Telefon:</strong>  ${body.telbraut}\r\n
    <br />
    <strong>Braut Geburtstag:</strong>  ${body.bdaybraut}\r\n
    <br />
    <strong>Brautigam Name:</strong>  ${body.namebrautigam}\r\n
    <br />
    <strong>Brauitigam Email:</strong>  ${body.emailbrautigam}\r\n
    <br />
    <strong>Brautigam Telefon:</strong>  ${body.telbrautigam}\r\n
    <br />
    <strong>Brautigam Geburtstag:</strong>  ${body.bdaybrautigam}\r\n
    <br />
    ------------- Hochzeitsdaten: -------------\r\n
    <br />
    <strong>Hochzeitsdatum:</strong>  ${body.hochzeitsdatum}\r\n
    <br /> 
    <strong>Wann und Wo soll die fotografische Begleitung durch mich beginnen?</strong>  ${body.startZeit}\r\n
    <br />
    <strong>Anschriften sämtlicher Locations die am Hochzeitstag angefahren werden.:</strong>  ${body.anschriften}\r\n
    <br />
    <strong>Hochzeitsdatum:</strong> ${body.hochzeitsdatum}\r\n
    <br />
    <strong>Alternativ Ansprechpartner:</strong> ${body.ansprechpartner}\r\n
    <br />
    <strong>Hochzeitsstiel:</strong>  ${body.style}\r\n
    <br />
    <strong>Gästeanzahl:</strong>  ${body.gasteanzahl}\r\n
    <br />
    <strong>Wann beginnt die Trauung?:</strong>  ${body.trauung}\r\n
    <br />
    <strong>Trauungsart:</strong>  ${body.trauungsArt}\r\n
    <br />
    <strong>Gibt es nach der Trauung einen Empfang? Wo und Wann? :</strong>  ${body.empfang}\r\n
    <br />
    <strong>Wann ist Zeit für euer persönliches Shooting?:</strong>  ${body.paarshooting}\r\n
    <br />
    <strong>Gibt es besondere Wünsche oder Vorstellungen bezüglich der Paarbilder?:</strong>  ${body.wunschePaarshooting}\r\n
    <br />
    <strong>Gruppenfotos:</strong>  ${body.gruppenfotos}\r\n
    <br />
    <strong>Habe ich bei der Abendveranstaltung einen Sitzplatz?:</strong>  ${body.sitzplatz}\r\n
    <br />
    <strong>Welche Motive liegen euch besonders am Herz?:</strong>  ${body.wichtigeMotive}\r\n
    <br />
    <strong>Hier ist Platz für eure persönliche Anmerkung:</strong>  ${body.bemerkung}\r\n
    <br />
    <strong>Auf mich aufmerksam geworden durch:</strong>  ${body.wieGefunden}\r\n
    <br />
    <strong>Datenschutz:</strong>  ${body.datenschutz}

  `;

  // Absender für from

  const subjectMessage = `Fragebogen von ${body.namebraut} & ${body.namebrautigam} am ${body.hochzeitsdatum}`;

  try {
    await fragebogen.send({
      to: "info@bild-hochzeit.de",
      from: "info@bild-hochzeit.de",
      subject: subjectMessage,
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    });

    return NextResponse.json({ status: "Ok" });
  } catch (err) {
    return NextResponse.json({ error: err.toString() });
  }
}
