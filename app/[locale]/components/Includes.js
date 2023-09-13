import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "../styles/Includes.module.css";

const Includes = () => {
  const t = useTranslations("pageLeistungen");
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
            <h3>{t("leistungen.leistungTitel1")}</h3>
            <p>{t("leistungen.leistungBesch1")}</p>
          </div>
          <div>
            <h3>{t("leistungen.leistungTitel2")}</h3>
            <p>{t("leistungen.leistungBesch2")}</p>
          </div>
          <div>
            <h3>{t("leistungen.leistungTitel3")}</h3>
            <p>{t("leistungen.leistungBesch3")}</p>
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
            <h3>{t("leistungen.leistungTitel4")}</h3>
            <p>{t("leistungen.leistungBesch4")}</p>
          </div>
          <div>
            <h3>{t("leistungen.leistungTitel5")}</h3>
            <p>{t("leistungen.leistungBesch5")}</p>
          </div>
          <div>
            <h3>{t("leistungen.leistungTitel6")}</h3>
            <p>{t("leistungen.leistungBesch6")}</p>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Includes;
