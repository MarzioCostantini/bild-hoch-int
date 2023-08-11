import DownloadVertrag from "../components/DownloadVertrag";
import PreisBerechnung from "../components/PreisBerechnung";
import ShootingPreise from "../components/ShootingPreise";
import LeistungenHero from "../components/LeistungenHero";

export const metadata = {
  title: "Preisliste | Hochzeitsfotograf München und Umgebung",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const Preisliste = () => {
  return (
    <main>
      <PreisBerechnung />
      <DownloadVertrag />
      <ShootingPreise />
      <LeistungenHero
        titel="Hochzeitsfotograf in Starnberg, München, Augsburg, Garmisch Partenkirchen, Europa- & Weltweit"
        img1="/img/leistungen/Hochzeitsfotograf_Munchen-02-min.jpg"
        img2="/img/leistungen/Hochzeitsfotograf_Munchen-03-min.jpg"
      />
    </main>
  );
};

export default Preisliste;
