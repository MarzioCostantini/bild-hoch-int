import { createTranslator, useTranslations } from "next-intl";
import IchBinMarzio from "../components/IchBinMarzio";
import Tabs from "../components/ShowHideAbout";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  return {
    title: t("pageAbout.meta.title"),
    description: t("pageAbout.meta.description"),
  };
}

const AboutPage = () => {
  const t = useTranslations("pageAbout");

  const jsonLd = [
    {
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      name: "Hi, ich bin Marzio",
      image:
        "https://bild-hochzeit.de/_next/image?url=%2Fimg%2Fabout%2FHochzeitsfotograf_Starnberg_01-min.jpg&w=1080&q=75",
      address: {
        "@type": "PostalAddress",
        addressLocality: "HOCHZEITSFOTOGRAF IN MÜNCHEN",
      },
    },
    {
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      name: "Hochzeitsfotograf seit 2014 vor allem in Raum Starnberg, München, Augsburg und Garmisch-Partenkirchen, Gardasee, Comersee & Toskana allerdings fotografiere ich Hochzeiten Europa- und Weltweit. Wenn ihr auf der Suche nach authentischen Hochzeitsfotos seid, dann seid ihr bei mir genau richtig. Ich bin auf deiner Hochzeit meist der stille Beobachter, ich beobachte Menschen, Blicke, Gesten, Liebe, Freude, Emotionen. Ich suche das Gemälde des Augenblicks, den Liedschlag, der den Verschluss meiner Kamera öffnet und eine Geschichte für immer festhält.",
      image:
        "https://bild-hochzeit.de/_next/image?url=%2Fimg%2Fabout%2FHochzeitsfotograf_Starnberg_01-min.jpg&w=1080&q=75",
      address: {
        "@type": "PostalAddress",
        addressLocality: "HOCHZEITSFOTOGRAF IN MÜNCHEN",
      },
    },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IchBinMarzio />
      <Tabs
        details={t("details.detailsInfo")}
        infos={t("details.paarInfos")}
        reisentitle={t("details.reisen.title")}
        reisencontent={t("details.reisen.content")}
        naturtitle={t("details.natur.title")}
        naturcontent={t("details.natur.content")}
        zwilligetitle={t("details.zwillinge.title")}
        zwilligecontent={t("details.zwillinge.content")}
        programmierentitle={t("details.programmieren.title")}
        programmierencontent={t("details.programmieren.content")}
        geradetitle={t("details.gerade.title")}
        geradecontent={t("details.gerade.content")}
      />
    </main>
  );
};
export default AboutPage;
