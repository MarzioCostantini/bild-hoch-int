import styles from "../styles/IchBinMarzio.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import McImage from "./McImage";

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
      <McImage
        src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697799584/Components/Hochzeitsfotograf_Starnberg_01-min_ezdrcl.jpg"
        height={600}
        width={500}
        alt="Hochzeitsfotograf München Starnberg Augsburg Garmisch-partenkirchen Gardasee Florenz"
      />
    </section>
  );
};

export default IchBinMarzio;
