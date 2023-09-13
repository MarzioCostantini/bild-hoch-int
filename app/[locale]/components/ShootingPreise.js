import styles from "../styles/ShootingPreise.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ShootingPreise = () => {
  const t = useTranslations();

  return (
    <section className={styles.shootingPreise}>
      <article>
        <div className={styles.contenttext}>
          <h4>{t("pageLeistungen.afterWedding.title")}</h4>
          <h6>{t("pageLeistungen.afterWedding.subTitle")}</h6>
          <p>{t("pageLeistungen.afterWedding.content")}</p>
          <p>350,-€</p>
        </div>
        <div className="lineimg">
          <Image
            src="/img/leistungen/Hochzeitsfotograf_Munchen-05-min.jpg"
            height={450}
            width={350}
            alt="Hochzeitsfotograf München"
          />
        </div>
      </article>
      <article>
        <div className="lineimg">
          <Image
            src="/img/leistungen/Hochzeitsfotograf_Munchen-04-min.jpg"
            height={450}
            width={350}
            alt="Hochzeitsfotograf München"
          />
        </div>
        <div className={styles.contenttext}>
          <h4>{t("pageLeistungen.afterWedding.title")}</h4>
          <h6>{t("pageLeistungen.afterWedding.subTitle")}</h6>
          <p>{t("pageLeistungen.afterWedding.content")}</p>
          <p>350,-€</p>
        </div>
      </article>
    </section>
  );
};

export default ShootingPreise;
