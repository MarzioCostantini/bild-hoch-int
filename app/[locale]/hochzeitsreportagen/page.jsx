import Link from "next/link";
import styles from "../styles/weddingOverview.module.css";

import { createTranslator, useTranslations } from "next-intl";
import WeddingFilterOverviewNew from "../components/WeddingFilterOverviewNew";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  return {
    title: t("pageHochzeitsreportagen.meta.title"),
    description: t("pageHochzeitsreportagen.meta.description"),
  };
}

const jsonLd = {
  "@context": "http://schema.org",
  "@type": "Article",
  articleSection:
    "[Orangerie Schloss Weikersheim Hochzeit] Hochzeit in der Orangerie Schloss Weikersheim Hochzeit Schloss Weikersheim - Die beiden haben sich in der Schlosskirche in Bad Mergentheim das Ja-Wort gegeben und anschließend in der zauberhaften ... [Hochzeit Zugspitze - Berg Hochzeit] Hochzeit auf der Zugspitze - Sina und Marcel Sina und Marcel haben es gewagt und sich für ihre Traumhochzeit nichts Geringeres als die Zugspitze, den höchsten Berg Deutschlands, ausgesucht. Aber ... [Hochzeitsfotograf München Augsburg und Starnberg] Rustikale Boho Hochzeit in Gauting - Hochzeitisfotograf Gaurting Vor einigen Tagen durfte ich wunderschöne Hochzeit in Gauting begleiten.... [Hochzeitsfotograf München - Heiraten in Landgasthof Lenderstuben Balzhausen] Scheunen Hochzeit in Landgasthof lenderstuben Balzhausen Vor einigen Tagen durfte ich wunderschöne Hochzeit in der Lenderstuben in Balzhausen fotografieren.... [Hochzeitsfotograf Südtirol] Berg liebe in Südtirol - Hochzeit auf der Seiser Alm An diesem wunderschönen Morgen durfte ich die beiden bei eine After Wedding Shooting auf der Seiseralm fotografieren das licht und die beiden waren ei... [Hochzeitsfotograf Florenz] Paarshooting in der Toskana zum Sonnenuntergang diese beiden habe ich in der Wunderschönen Toskana zum Sonnenuntergang Fotografiert..",
  articleBody: "Hochzeitsreportagen",
};

const Hochzeitsreportagen = () => {
  const t = useTranslations();

  return (
    <main className={styles.hochzeitsreportagen}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className={styles.headings}>
        <h1>{t("pageHochzeitsreportagen.title")}</h1>
        <h6>{t("pageHochzeitsreportagen.subTitle")}</h6>
        <hr />
        {/* <WeddingFilterOverview /> */}
        <WeddingFilterOverviewNew />
      </section>
    </main>
  );
};

export default Hochzeitsreportagen;
