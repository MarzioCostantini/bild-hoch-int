import DownloadVertrag from "../components/DownloadVertrag";
import PreisBerechnung from "../components/PreisBerechnung";
import ShootingPreise from "../components/ShootingPreise";
import LeistungenHero from "../components/LeistungenHero";
import WeddingPackete from "../components/WeddingPackete";
import { useTranslations } from "next-intl";
import Momente from "../components/Momente";
import Memories from "../components/Memories";
import Includes from "../components/Includes";

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
  const t = useTranslations("pageLeistungen");
  return (
    <main>
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
