import "./globals.css";
import Footer from "./components/Footer";
import NavMarzio from "./components/NavMarzio";
import FreeWeddingDates from "./components/FreeWeddingDates";
import { useLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";

// Guy vid
import GoogleAnalyticss from "../../components/GoogleAnalytics";
import CookieBanner from "../../components/CookieBanner";

// ! === META ===

export const metadata = {
  title: "Euer Hochzeitsfotograf in München | Authentisch und Echt ☀",
  description:
    "Ich bin Marzio Hochzeitsfotograf in München. Hochzeitsreportagen in München und Umgebung | Klickt für weitere Informationen einfach hier!",
  openGraph: {
    title: "Euer Hochzeitsfotograf in München | Authentisch und Echt ☀",
    description:
      "Ich bin Marzio Hochzeitsfotograf in München. Hochzeitsreportagen in München und Umgebung | Klickt für weitere Informationen einfach hier!",
    url: "https://bild-hochzeit.de/",
    images: [
      {
        url: "https://bild-hochzeit.de/_next/static/media/Hochzeitsfotograf-Starnberg-Munchen-Augsburg-und-Garmisch-Partenkirchen_avif.99c80d23.avif",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();

  // console.log("locale", locale);

  if (params.locale !== locale) {
    notFound();
  }

  const t = useTranslations();
  return (
    <html lang={locale}>
      <body>
        <GoogleAnalyticss
          GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GOOGLE_ID}
        />

        <CookieBanner
          text={t("cookie.text")}
          akzeptierenbtn={t("cookie.akzeptieren")}
          ablehnenbtn={t("cookie.ablehnen")}
        />

        <NavMarzio
          foto={t("menu.foto")}
          kontakt={t("menu.kontakt")}
          faq={t("menu.faq")}
          leistungen={t("menu.leistungen")}
          about={t("menu.about")}
        />

        <FreeWeddingDates />
        {children}
        <Footer />
      </body>
    </html>
  );
}
