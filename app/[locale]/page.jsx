import FaqHome from "./components/FaqHome";
import HochzeitsfotografStarnberg from "./components/HochzeitsfotografStarnberg";
import HomeText from "./components/HomeText";
import Momente from "./components/Momente";
import PortfolioBanner from "./components/PortfolioBanner";
import FilterWedding from "./components/WeddingFilter";
import WelcomeHero from "./components/WelcomeHero";
import AuthenticWedding from "./components/AuthenticWedding";

import styles from "./styles/Home.module.css";
import { useTranslations } from "next-intl";
import { createTranslator } from "next-intl";

// META TAGS
export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  return {
    title: t("pageHome.meta.title"),
    description: t("pageHome.meta.description"),
  };
}

export default function Home() {
  const t = useTranslations();

  return (
    <main className={styles.main}>
      <div>
        <>
          <div className={styles.hero}>
            <div className={styles.wrapperInner}>
              <div className={styles.freeWeddingDates}></div>
            </div>
          </div>
          <div className={styles.welcomeHero}>
            <WelcomeHero />
          </div>
          <AuthenticWedding />
          <HochzeitsfotografStarnberg />
          <PortfolioBanner />
          <FilterWedding />
          <div className={styles.momenteHome}>
            <Momente />
          </div>
          <HomeText />
          <FaqHome />
        </>
      </div>
    </main>
  );
}
