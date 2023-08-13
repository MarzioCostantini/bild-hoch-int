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
  const t = useTranslations();
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
