"use client";

import { useState } from "react";
import NavMarzio from "../components/NavMarzio";
import styles from "../styles/Fragebogen.module.css";

const Fragebogen = () => {
  // BRAUT
  const [namebraut, setNameBraut] = useState("");
  const [emailbraut, setEmailBraut] = useState("");
  const [telbraut, setTelBraut] = useState("");
  const [bdaybraut, setBdaybraut] = useState("");
  // BRÄUTIGAM
  const [namebrautigam, setNameBrautigam] = useState("");
  const [emailbrautigam, setEmailBrautigam] = useState("");
  const [telbrautigam, setTelBrautigam] = useState("");
  const [bdaybrautigam, setBdaybrautigam] = useState("");
  //  DATEN HOCHZEIT
  const [hochzeitsdatum, setHochzeitsdatum] = useState("");
  const [startZeit, setStartZeit] = useState("");
  const [style, setStyle] = useState("");
  const [trauung, setTrauung] = useState("");
  const [trauungsArt, setTrauungsArt] = useState("");
  const [empfang, setEmpfang] = useState("");
  const [paarshooting, setPaarshooting] = useState("");
  const [wunschePaarshooting, setWunschePaarshooting] = useState("");
  const [gruppenfotos, setGruppenfotos] = useState("");
  const [sitzplatz, setSitzplatz] = useState("");
  const [gasteanzahl, setGasteanzahl] = useState("");
  const [anschriften, setAnschriften] = useState("");
  const [ansprechpartner, setAnsprechpartner] = useState("");
  const [wichtigeMotive, setWichtigeMotive] = useState("");
  const [aufmerksamgeworden, setAufmerksamgeworden] = useState("");
  const [bemerkung, setBemerkung] = useState("");
  const [datenschutz, setDatenschutz] = useState(false);

  //   System States
  const [error, setError] = useState(false);
  const [feedback, setFeedback] = useState(false);

  // ! Funktion für Daten Senden
  async function handleSumit(e) {
    e.preventDefault();

    //Validierung von Email und Datum
    if (emailbraut.includes("@") == false || datenschutz == false) {
      setError(true);
    } else {
      setFeedback(true);

      const formData = {};

      Array.from(e.currentTarget.elements).forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });

      console.log(formData);

      await fetch("/api/fragebogen", {
        method: "POST",
        body: JSON.stringify(formData),
      });
    }
  }

  //   ! Funktionen um Radio auszulesen

  //   Check Style
  const styleFunc = (e) => {
    setStyle(e.target.value);
  };

  //   Check aufmerksam
  const aufmerksamFunc = (e) => {
    setAufmerksamgeworden(e.target.value);
  };

  // LOGS
  //   console.log({ namebraut });
  //   console.log({ emailbraut });
  //   console.log({ telbraut });
  //   console.log({ bdaybraut });
  //   console.log({ namebrautigam });
  //   console.log({ emailbrautigam });
  //   console.log({ telbrautigam });
  //   console.log({ bdaybrautigam });
  //   console.log({ hochzeitsdatum });
  //   console.log({ startZeit });
  //   console.log({ style });
  //   console.log({ trauung });
  //   console.log({ trauungsArt });
  //   console.log({ empfang });
  //   console.log({ paarshooting });
  //   console.log({ wunschePaarshooting });
  //   console.log({ gruppenfotos });
  //   console.log({ sitzplatz });
  //   console.log({ gasteanzahl });
  //   console.log({ anschriften });
  //   console.log({ ansprechpartner });
  //   console.log({ wichtigeMotive });
  //   console.log({ aufmerksamgeworden });
  //   console.log({ bemerkung });
  //   console.log({ datenschutz });

  console.log({ error });
  console.log({ feedback });

  return (
    <main className={styles.fragebogen}>
      <div className={styles.hero}>
        <h1>Fragebogen</h1>
        <h6>Hochzeitsfotograf Marzio Costantini</h6>
        <hr />
        <p>
          Hallo Ihr Zwei, da Ihr mich nach Zeit bucht, möchte ich meine Zeit an
          Eurem Hochzeitstag möglichst effektiv einsetzen. Mit diesem
          Online-Fragebogen werden viele Fragen im Vorfeld geklärt und
          Informationen übermittelt, die wichtig sein könnten. Bitte versuchen
          alles so gut und Detailliert wie möglich anzugeben. Ahja, eure Daten
          sind selbstverständlich bei mir sicher aufgehoben und werden nicht
          weitergegeben!
        </p>
      </div>
      <form onSubmit={handleSumit}>
        <h4>Persönliche Daten:</h4>
        <article className={styles.personlicheDaten}>
          <div>
            <label htmlFor="namebraut">Vor- und Nachname der Braut:</label>
            <input
              value={namebraut}
              onChange={(e) => setNameBraut(e.target.value)}
              type="text"
              name="namebraut"
              id="namebraut"
            />
            <label htmlFor="emailbraut">Email der Braut:*</label>
            <input
              value={emailbraut}
              onChange={(e) => setEmailBraut(e.target.value)}
              type="email"
              id="emailbraut"
              name="emailbraut"
              required
            />
            <label htmlFor="handybraut">Handynummer der Brau:</label>
            <input
              value={telbraut}
              onChange={(e) => setTelBraut(e.target.value)}
              type="text"
              id="handybraut"
              name="telbraut"
            />
            <label htmlFor="gebbraut">Geburtstag der Brau:</label>
            <input
              value={bdaybraut}
              name="bdaybraut"
              onChange={(e) => setBdaybraut(e.target.value)}
              type="text"
              id="gebbraut"
            />
          </div>
          <div>
            <label htmlFor="namebrautigam">
              Vor- und Nachname vom Bräutigam:
            </label>
            <input
              value={namebrautigam}
              name="namebrautigam"
              onChange={(e) => setNameBrautigam(e.target.value)}
              type="text"
              id="namebrautigam"
            />
            <label htmlFor="emailbrautigam">Email vom Bräutigam:</label>
            <input
              value={emailbrautigam}
              onChange={(e) => setEmailBrautigam(e.target.value)}
              type="email"
              id="emailbrautigam"
              name="emailbrautigam"
            />
            <label htmlFor="handybrautigam">Handynummer vom Bräutigam:</label>
            <input
              value={telbrautigam}
              name="telbrautigam"
              onChange={(e) => setTelBrautigam(e.target.value)}
              type="text"
              id="handybrautigam"
            />
            <label htmlFor="gebbrautigam">Geburtstag vom Bräutigam:</label>
            <input
              value={bdaybrautigam}
              name="bdaybrautigam"
              onChange={(e) => setBdaybrautigam(e.target.value)}
              type="text"
              id="gebbrautigam"
            />
          </div>
        </article>
        <h3>Daten zur Hochzeit:</h3>
        <article className={styles.hochzeitsDaten}>
          <label htmlFor="hochzeitsdatum">Hochzeitsdatum:</label>
          <input
            name="hochzeitsdatum"
            value={hochzeitsdatum}
            onChange={(e) => setHochzeitsdatum(e.target.value)}
            type="text"
            id="hochzeitsdatum"
          />
          <label htmlFor="startUhrzeit">
            Wann und Wo soll die fotografische Begleitung durch mich beginnen?
          </label>
          <input
            name="startZeit"
            value={startZeit}
            onChange={(e) => setStartZeit(e.target.value)}
            type="text"
            id="startUhrzeit"
          />
          <label htmlFor="anschriften">
            Anschriften sämtlicher Locations die am Hochzeitstag angefahren
            werden.
          </label>
          <textarea
            name="anschriften"
            id="anschriften"
            cols="30"
            rows="10"
            value={anschriften}
            onChange={(e) => setAnschriften(e.target.value)}
            placeholder="Getting Ready, Trauung, Feier, Paarshooting..."
          />
          <label htmlFor="ansprechpart">
            Ansprechpartner: Jemand der ebenfalls den Ablauf eurer Hochzeit
            genau kennt.
          </label>
          <input
            name="ansprechpartner"
            value={ansprechpartner}
            onChange={(e) => setAnsprechpartner(e.target.value)}
            type="text"
            id="ansprechpart"
          />

          <label htmlFor="style">Hochzeitsstiel?</label>
          <select name="style" id="style">
            <option disabled value>
              Bitte wählen
            </option>
            <option value="Vintage">Vintage</option>
            <option value="Klassisch">Klassisch</option>
            <option value="Boho">Boho</option>
            <option value="Traditionel">Traditionel</option>
            <option value="Rustikal">Rustikal</option>
          </select>

          <label htmlFor="gasteanzahl">Wieviel Gäste kommen?</label>
          <input
            type="text"
            onChange={(e) => setGasteanzahl(e.target.value)}
            value={gasteanzahl}
            name="gasteanzahl"
            id="gasteanzahl"
          />
          <label htmlFor="trauung">Wann beginnt die Trauung?</label>
          <input
            type="text"
            onChange={(e) => setTrauung(e.target.value)}
            value={trauung}
            name="trauung"
            id="trauung"
          />
          <label htmlFor="arttrauung">Welche art Trauung Heiratet ihr?</label>
          <input
            type="text"
            onChange={(e) => setTrauungsArt(e.target.value)}
            value={trauungsArt}
            name="trauungsArt"
            id="arttrauung"
            placeholder="Kirchlich, Freie Trauung, etc..."
          />
          <label htmlFor="empfang">
            Gibt es nach der Trauung einen Empfang? Wo und Wann?
          </label>
          <input
            type="text"
            onChange={(e) => setEmpfang(e.target.value)}
            value={empfang}
            name="empfang"
            id="empfang"
          />
          <label htmlFor="paarshooting">
            Wann ist Zeit für euer persönliches Shooting?
          </label>
          <textarea
            type="text"
            onChange={(e) => setPaarshooting(e.target.value)}
            value={paarshooting}
            name="paarshooting"
            id="paarshooting"
            placeholder="Wichtig! Wenn ihr WOW Bilder haben wollt, unbedingt den Sonnenuntergang für das Shooting einplanen."
          />

          <label htmlFor="wunschpaarshooting">
            Gibt es besondere Wünsche oder Vorstellungen bezüglich der
            Paarbilder?
          </label>
          <input
            type="text"
            onChange={(e) => setWunschePaarshooting(e.target.value)}
            value={wunschePaarshooting}
            name="wunschePaarshooting"
            id="wunschpaarshooting"
          />
          <label htmlFor="gruppenfotos">
            Falls ihr euch auch die "Klassischen Familienfotos" wünscht:
          </label>
          <textarea
            type="text"
            onChange={(e) => setGruppenfotos(e.target.value)}
            value={gruppenfotos}
            name="gruppenfotos"
            id="gruppenfotos"
            placeholder="Bitte mach euch Gedanken in welchen Konstellation ihr euch Familienbilder wünscht und plant etwas Zeit dafür ein. Meistens bietet sich der Empfang / Aperol dazu an. "
          />

          <label htmlFor="sitzplatz">
            Habe ich bei der Abendveranstaltung einen Sitzplatz?
          </label>
          <input
            type="text"
            onChange={(e) => setSitzplatz(e.target.value)}
            value={sitzplatz}
            name="sitzplatz"
            id="sitzplatz"
          />
          <label htmlFor="wichtigeMotive">
            Welche Motive liegen euch besonders am Herz?
          </label>
          <input
            type="text"
            onChange={(e) => setWichtigeMotive(e.target.value)}
            value={wichtigeMotive}
            name="wichtigeMotive"
            id="wichtigeMotive"
          />
          <label htmlFor="bemerkung">
            Hier ist Platz für eure persönliche Anmerkung:
          </label>
          <textarea
            type="text"
            onChange={(e) => setBemerkung(e.target.value)}
            value={bemerkung}
            name="bemerkung"
            id="bemerkung"
          />

          <label htmlFor="wieGefunden">Wie habt ihr mich gefunden?</label>
          <select name="wieGefunden" id="wieGefunden">
            <option disabled value>
              Bitte wählen
            </option>
            <option value="Google">Google</option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
            <option value="Empfehlung">Empfehlung</option>
            <option value="Sonstiges">Sonstiges</option>
          </select>

          <label htmlFor="datenschutz">Datenschutz*</label>
          <div className={styles.datenschutz}>
            <input
              required
              onChange={(e) => setDatenschutz(e.target.checked)}
              type="checkbox"
              name="datenschutz"
              id="datenschutz"
              value={datenschutz}
            />
            <label htmlFor="datenschutz">
              Mit der Erhebung und Speicherung meiner Daten zum Zweck der
              Verarbeitung meiner Nachricht bin ich einverstanden. Diese
              Einwilligung ist jederzeit über info[a]Bild-Hochzeit.de
              widerrufbar. Detaillierte Information findest du in meinen
              Datenschutzbestimmung
            </label>

            {error && datenschutz == false ? (
              <p className={styles.error}>
                Bitte Datenschutzbestimmung akzeptieren
              </p>
            ) : (
              ""
            )}
          </div>
          <button className="btn">Senden</button>
          {feedback ? (
            <p className={styles.feedback}>
              Nachricht wurde erfolgreich gesendet.
            </p>
          ) : (
            ""
          )}
        </article>
      </form>
    </main>
  );
};

export default Fragebogen;
