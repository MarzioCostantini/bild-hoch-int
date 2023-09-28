import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Locations.module.css";

// # title, subTitle, locations, einleitung

const Locations = ({ title, subTitle, locations, einleitung }) => {
  return (
    <section className={styles.locations}>
      <article className={styles.hero}>
        <div></div>
        <p>✦</p>
        <div></div>
      </article>
      <article>
        <div className={styles.title}>
          <h2>{title}</h2>
          <p>- {subTitle} -</p>

          <p className={styles.einleitung}>{einleitung}</p>
          <div className={styles.line}></div>
        </div>
        <ul className={styles.list}>
          {locations.map((location, index) => (
            <li key={index} className={styles.locationItem}>
              <p className={styles.num}>0{index + 1}</p>

              <div className={styles.infobox}>
                <h6>{location.slogan}</h6>
                <h3>{location.name}</h3>
                <Link
                  target="_blank"
                  className="btnWhite"
                  href={`${location.webseite}`}
                >
                  Zur Webseite
                </Link>
              </div>
              <p className={styles.text}>{location.text}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Locations;
