import Preise from "../components/Preise";
import ShootingPreise from "../components/ShootingPreise";
import LeistungenHero from "../components/LeistungenHero";
import { createTranslator, useTranslations } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  return {
    title: t("pageLeistungen.meta.title"),
    description: t("pageLeistungen.meta.description"),
  };
}

const Leistungen = () => {
  const t = useTranslations();
  return (
    <main>
      <LeistungenHero
        titel={t("pageLeistungen.title")}
        img1="/img/leistungen/Hochzeitsfotograf_Munchen-02-min.jpg"
        img2="/img/leistungen/Hochzeitsfotograf_Munchen-03-min.jpg"
        kontakt={t("pageLeistungen.btn")}
      />
      <Preise />
      <ShootingPreise />
    </main>
  );
};

export default Leistungen;
