import Link from "next/link";
import styles from "../styles/weddingOverview.module.css";
import weddingData from "../../../WeddingData.json";

import { createTranslator, useTranslations } from "next-intl";
import WeddingFilterOverview from "../components/WeddingFilterOverview";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  return {
    title: t("pageHochzeitsreportagen.meta.title"),
    description: t("pageHochzeitsreportagen.meta.description"),
  };
}

const Hochzeitsreportagen = () => {
  const t = useTranslations();

  return (
    <main className={styles.hochzeitsreportagen}>
      <section className={styles.headings}>
        <h1>{t("pageHochzeitsreportagen.title")}</h1>
        <h6>{t("pageHochzeitsreportagen.subTitle")}</h6>
        <hr />
        <WeddingFilterOverview />
      </section>
    </main>
  );
};

export default Hochzeitsreportagen;
