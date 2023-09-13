import ShootingPreise from "../components/ShootingPreise";
import Memories from "../components/Memories";
import Includes from "../components/Includes";
import WeddingPackete from "../components/WeddingPackete";
import { createTranslator, useTranslations } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  return {
    title: t("pageLeistungen.meta.title"),
    description: t("pageLeistungen.meta.description"),
  };
}

const jsonLd = [
  {
    "@context": "http://schema.org",
    "@type": "Article",
    articleSection:
      "01 9-Stündige oder mehr Hochzeitsreportage Persönliche Beratung -Nachbearbeitung - Ca. 50 - 100 Bilder pro Stunde - Persönliche Beratung - Bilder via USB Stick in Holzschatulle Jetzt Anfragen 02 8-Stündige Hochzeitsreportage - Persönliche Beratung -Nachbearbeitung - Ca. 50 - 100 Bilder pro Stunde - Persönliche Beratung - Bilder via USB Stick in Holzschatulle Jetzt Anfragen 03 6- Stündige Hochzeitsreportage - Persönliche Beratung -Nachbearbeitung - Ca. 50 - 100 Bilder pro Stunde - Persönliche Beratung - Bilder via USB Stick in Holzschatulle Jetzt Anfragen 04 3- Stündige Hochzeitsreportage - Persönliche Beratung -Nachbearbeitung - Ca. 50 - 100 Bilder pro Stunde - Persönliche Beratung - Bilder via USB Stick in Holzschatulle Jetzt Anfragen * In der Hochzeitssaison (April - Oktober) nur von Montag - Donnerstag buchbar, Freitag & Sonntag auf Anfrage.",
    articleBody:
      "Hochzeitsfotograf in Starnberg, München, Augsburg, Garmisch Partenkirchen, Europa- &amp; Weltweit",
    url: "https://www.bild-hochzeit.de/kontakt",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    name: "After Wedding Shooting",
    articleSection:
      "Sollte mal die Zeit während euer Hochzeit zu knapp für das Paar Shooting können wir gerne eine Afterwedding Shooting Termin vereinbaren. Quasi euer Hochzeits Paarshooting lediglich ein paar tage verschoben. Das Afterwedding Shooting dauert circa 45-60 Minuten. Am Ende bekommt ihr circa 50 Bearbeite Bilder von mir",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Hochzeitsfotograf in Starnberg, München, Augsburg",
    articleSection:
      "Sollte mal die Zeit während euer Hochzeit zu knapp für das Paar Shooting können wir gerne eine Afterwedding Shooting Termin vereinbaren. Quasi euer Hochzeits Paarshooting lediglich ein paar tage verschoben. Das Afterwedding Shooting dauert circa 45-60 Minuten. Am Ende bekommt ihr circa 50 Bearbeite Bilder von mir",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    articleSection:
      "Sollte mal die Zeit während euer Hochzeit zu knapp für das Paar Shooting können wir gerne eine Afterwedding Shooting Termin vereinbaren. Quasi euer Hochzeits Paarshooting lediglich ein paar tage verschoben. Das Afterwedding Shooting dauert circa 45-60 Minuten. Am Ende bekommt ihr circa 50 Bearbeite Bilder von mir",
    articleBody: [
      "After Wedding Shooting",
      "Hochzeitsfotograf in Starnberg, München, Augsburg",
    ],
  },
];

const Leistungen = () => {
  const t = useTranslations("pageLeistungen");
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Memories />
      <Includes />
      <WeddingPackete
        title={t("hochzeitsPackete.title")}
        packet1Title={t("hochzeitsPackete.packet1.title")}
        packet1Fahrt={t("hochzeitsPackete.packet1.fahrt")}
        packetDa1={t("hochzeitsPackete.packet1.zeit")}
        packet2Title={t("hochzeitsPackete.packet2.title")}
        packet2Fahrt={t("hochzeitsPackete.packet2.fahrt")}
        packetDa2={t("hochzeitsPackete.packet2.zeit")}
        packet3Title={t("hochzeitsPackete.packet3.title")}
        packet3Fahrt={t("hochzeitsPackete.packet3.fahrt")}
        packetDa3={t("hochzeitsPackete.packet3.zeit")}
        packet4Title={t("hochzeitsPackete.packet4.title")}
        packet4Fahrt={t("hochzeitsPackete.packet4.fahrt")}
        beratung={t("hochzeitsPackete.basicInfo.beratung")}
        bearbeitung={t("hochzeitsPackete.basicInfo.bearbeitung")}
        onlineGal={t("hochzeitsPackete.basicInfo.onlineGal")}
        usbStick={t("hochzeitsPackete.basicInfo.usbStick")}
        nichtsPassendes={t("hochzeitsPackete.zusatzInfo.nichtsPassendes")}
        kmPreis={t("hochzeitsPackete.zusatzInfo.kmPreis")}
        keineAnfItalien={t("hochzeitsPackete.zusatzInfo.keineAnfItalien")}
        preisAnf={t("hochzeitsPackete.basicInfo.preisBtn")}
      />
      <ShootingPreise />
    </main>
  );
};

export default Leistungen;
