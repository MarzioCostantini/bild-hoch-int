import { useTranslations } from "next-intl";
import Link from "next/link";
import styles from "../styles/PortfolioBanner.module.css";

const PortfolioBanner = () => {
  const t = useTranslations();
  return (
    <section className={styles.portfolio}>
      <h3>Portfolio</h3>
      <hr />
      <p>{t("pageHome.banner.text")}</p>
      <hr />
      <Link href="/hochzeitsreportagen">
        <p>{t("pageHome.banner.button")} ➤</p>
      </Link>
    </section>
  );
};

export default PortfolioBanner;
