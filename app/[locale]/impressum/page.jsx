import { createTranslator } from "next-intl";
import styles from "../styles/Impressum.module.css";

const impressum = () => {
  return (
    <>
      <main className={styles.impressum}>
        <article className={styles.hero}>
          <h1>Impressum</h1>
          <hr />
        </article>
        <article>
          <p>Bild-Hochzeit</p>
          <p>
            Marzio Costantini Photography <br />
            Dorfbachweg 1<br />
            82490 Farchant
            <br />
            Deutschland
          </p>
          <p>
            Tel: +49 157 71069791
            <br />
            Email: info(at)bild-hochzeit.de
          </p>
          <p>URL: www.Bild-Hochzeit.de</p>
          <p>
            Rechtsform: Einzelunternehmen
            <br />
            Steuernummer: 119 / 209 / 50533
          </p>
        </article>
      </main>
    </>
  );
};

export default impressum;
