import styles from "../styles/IchBinMarzio.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

const IchBinMarzio = () => {
  const t = useTranslations();

  return (
    <section className={styles.ichBinMarzio}>
      <article>
        <h6>Welcome</h6>
        <h4>{t("pageAbout.welcomeSection.title")}</h4>
        <div></div>
        <p>{t("pageAbout.welcomeSection.content")}</p>
      </article>
      <Image
        src="/img/about/Hochzeitsfotograf_Starnberg_01-min.jpg"
        height={600}
        width={450}
        alt="Hochzeitsfotograf München Starnberg Augsburg Garmisch-partenkirchen Gardasee Florenz"
      />
    </section>
  );
};

export default IchBinMarzio;
