import { useTranslations } from "next-intl";
import styles from "../styles/DownloadVertrag.module.css";

const DownloadVertrag = () => {
  const t = useTranslations("pageLeistungen");
  return (
    <section className={styles.vertrag}>
      <h3>{t("hochzeitsPackete.hochzeitsvertrag.title")}</h3>
      <h6>{t("hochzeitsPackete.hochzeitsvertrag.subTitle")}</h6>
      <a href="../Hochzeitsfotograf_Marzio_Costantini.pdf" download>
        <button className="btn">Download</button>
      </a>
    </section>
  );
};

export default DownloadVertrag;
