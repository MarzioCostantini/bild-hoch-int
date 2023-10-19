"use client";
import { useState } from "react";
import styles from "../styles/KontaktForm.module.css";
import { getCookie } from "cookies-next";
import { CldImage } from "next-cloudinary";

const KontaktForm = ({
  name,
  email,
  datum,
  location,
  stil,
  gefunden,
  nachricht,
  instagram,
  datenschutzLab,
  datenschutzAkz,
  btn,
  feedbackTitel,
  feedbackContent,
}) => {
  const [emailAddress, setEmailAddress] = useState("");
  const [datenschutz, setDatenschutz] = useState("");
  const [error, setError] = useState(false);
  const [feedback, setFeedback] = useState(false);

  async function handleOnSubmit(e) {
    e.preventDefault();

    //Validierung von Email und Datum
    if (emailAddress.includes("@") == false || datenschutz == false) {
      setError(true);
    } else {
      setFeedback(true);

      const formData = {};

      Array.from(e.currentTarget.elements).forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });

      await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    }
  }

  return (
    <article className={styles.kontaktForm}>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">{name}</label>
        <input id="name" type="text" name="name" />

        <label htmlFor="email">{email}</label>
        <input
          id="email"
          type="text"
          name="email"
          onChange={(e) => setEmailAddress(e.target.value)}
        />
        {error && emailAddress.includes("@") == false ? (
          <p className={styles.error}>Bitte E-Mail Adresse eingeben</p>
        ) : (
          ""
        )}

        <label htmlFor="date">{datum}</label>
        <input id="date" type="date" name="date" />

        <label htmlFor="hochzeitslocation">{location}</label>
        <input id="hochzeitslocation" type="text" name="hochzeitslocation" />

        <label htmlFor="hochzeitsstil">{stil}</label>
        <select name="hochzeitsstil" id="hochzeitsstil">
          <option value="Klassisch">Klassisch</option>
          <option value="Boho">Boho</option>
          <option value="Vintage">Vintage</option>
          <option value="Glamourös">Glamourös</option>
          <option value="Traditionell">Traditionell</option>
        </select>

        <label htmlFor="wieGefunden">{gefunden}</label>
        <select name="wieGefunden" id="wieGefunden">
          <option value="Google">Google</option>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
          <option value="Empfehlung">Empfehlung</option>
          <option value="Sonstiges">Sonstiges</option>
        </select>

        <label htmlFor="message">{nachricht}</label>
        <textarea id="message" name="message" />

        <label htmlFor="instagram">{instagram}</label>
        <input
          placeholder="@bild_hochzeit"
          id="instagram"
          type="text"
          name="instagram"
        />
        <div>
          <input
            type="checkbox"
            id="datenschutz"
            name="datenschutz"
            onChange={(e) => setDatenschutz(e.target.checked)}
          />
          <label htmlFor="datenschutz">{datenschutzLab}</label>
        </div>
        {error && datenschutz == false ? (
          <p className={styles.error}>{datenschutzAkz}</p>
        ) : (
          ""
        )}
        <button className="btn">{btn}</button>
      </form>
      {feedback ? (
        <p className={styles.feedback}>
          <span>{feedbackTitel}</span> {feedbackContent}
        </p>
      ) : (
        ""
      )}

      <CldImage
        width="600"
        height="600"
        src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697717542/Pages/heiraten-auf-der-zugspitze/Heiraten-auf-der-zugspitze-58_axinw2.jpg"
        alt="hi"
      />
    </article>
  );
};

export default KontaktForm;
