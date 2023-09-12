import Image from "next/image";
import styles from "../styles/Includes.module.css";

const Includes = () => {
  return (
    <section className={styles.includes}>
      <div className={styles.sun}>
        <Image
          alt="Sun"
          width={"120"}
          height={"120"}
          src="/img/leistungen/sun.png"
        />
      </div>

      <section className={styles.content}>
        <article>
          <div>
            <h3>Die Hochzeitsreportage</h3>
            <p>
              Ich erstelle an eurem Hochzeitstag eine authentische
              Hochzeitsreportage inkl. Paarshooting und Gruppenbilder, falls
              erwünscht.
            </p>
          </div>
          <div>
            <h3>INDIVIDUELLE BERATUNG</h3>
            <p>
              Alle Details bezüglich der Hochzeitsreportage werden gründlich mit
              euch bei persönlichen Gesprächen oder telefonisch besprochen. In
              diesem Gespräch berate ich euch unteranderem wie ihr selbst großen
              Einfluss auf eure Bilder nehmen könnt.
            </p>
          </div>
          <div>
            <h3>DIE BILDBEARBEITUNG</h3>
            <p>
              Kurz nach eurer Hochzeit sichte, sortiere und bearbeite ich eure
              Bilde
            </p>
          </div>
        </article>
        <article className={styles.bwImg}>
          <Image
            alt="Sun"
            width={"350"}
            height={"350"}
            src="/img/leistungen/Hochzeitsfotograf_Bild.png"
            style={{ width: "100%", height: "auto", maxWidth: "350px" }}
          />
        </article>

        <article>
          <div>
            <h3>ONLINE GALERIE</h3>
            <p>
              Für Euch und eure Gäste wird eine Online Galerie erstellt, so
              müsst Ihr nicht alle Bilder jedem schicken. Ihr entscheidet wem
              Ihr den Link weitergibt. (Ab Packet Silver)
            </p>
          </div>
          <div>
            <h3>60 - 80 BILDER PRO STUNDE</h3>
            <p>
              Je mehr Highlights es auf eurer Hochzeit gibt, desto mehr Bilder
              gibt es pro Stunde.
            </p>
          </div>
          <div>
            <h3>DROHNENAUFNAHMEN</h3>
            <p>
              Wenn es sich ergibt und das Drohne fliegen erlaubt ist, mache ich
              an eure Hochzeit einige Drohnenaufnahmen
            </p>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Includes;
