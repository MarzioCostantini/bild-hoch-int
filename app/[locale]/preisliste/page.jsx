import DownloadVertrag from "../components/DownloadVertrag";
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
  const t = useTranslations("");
  return (
    <main>
      <div className="preisliste">
        <h1>
          {t("pagePreisliste.title")} {new Date().getFullYear()} /{" "}
          {new Date().getFullYear() + 1}
        </h1>
        <h6>by MARZIO COSTANTINI</h6>
        <hr />
      </div>
      <Memories />
      <Includes />
      <WeddingPackete
        title={t("pageLeistungen.hochzeitsPackete.title")}
        packet1Title={t("pageLeistungen.hochzeitsPackete.packet1.title")}
        packet1Fahrt={t("pageLeistungen.hochzeitsPackete.packet1.fahrt")}
        packetDa1={t("pageLeistungen.hochzeitsPackete.packet1.zeit")}
        packet2Title={t("pageLeistungen.hochzeitsPackete.packet2.title")}
        packet2Fahrt={t("pageLeistungen.hochzeitsPackete.packet2.fahrt")}
        packetDa2={t("pageLeistungen.hochzeitsPackete.packet2.zeit")}
        packet3Title={t("pageLeistungen.hochzeitsPackete.packet3.title")}
        packet3Fahrt={t("pageLeistungen.hochzeitsPackete.packet3.fahrt")}
        packetDa3={t("pageLeistungen.hochzeitsPackete.packet3.zeit")}
        packet4Title={t("pageLeistungen.hochzeitsPackete.packet4.title")}
        packet4Fahrt={t("pageLeistungen.hochzeitsPackete.packet4.fahrt")}
        beratung={t("pageLeistungen.hochzeitsPackete.basicInfo.beratung")}
        bearbeitung={t("pageLeistungen.hochzeitsPackete.basicInfo.bearbeitung")}
        onlineGal={t("pageLeistungen.hochzeitsPackete.basicInfo.onlineGal")}
        usbStick={t("pageLeistungen.hochzeitsPackete.basicInfo.usbStick")}
        nichtsPassendes={t(
          "pageLeistungen.hochzeitsPackete.zusatzInfo.nichtsPassendes"
        )}
        kmPreis={t("pageLeistungen.hochzeitsPackete.zusatzInfo.kmPreis")}
        keineAnfItalien={t(
          "pageLeistungen.hochzeitsPackete.zusatzInfo.keineAnfItalien"
        )}
        preisAnf={t("pageLeistungen.hochzeitsPackete.basicInfo.preisBtn")}
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
