import { createTranslator, useTranslations } from "next-intl";
import Image from "next/image";
import KontaktForm from "../components/KontaktForm";
import styles from "../styles/Kontakt.module.css";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  return {
    title: t("pageKontakt.meta.title"),
    description: t("pageKontakt.meta.description"),
  };
}

const Kontakt = () => {
  const t = useTranslations();

  return (
    <main className={styles.kontakt}>
      <section className={styles.from}>
        <h2>Let´s Chat… :-)</h2>
        <p className={styles.textcontent}>{t("pageKontakt.text")}</p>
        <KontaktForm
          name={t("pageKontakt.labelName")}
          email={t("pageKontakt.labelEmail")}
          datum={t("pageKontakt.labelDatum")}
          location={t("pageKontakt.labelLocation")}
          stil={t("pageKontakt.labelStil")}
          gefunden={t("pageKontakt.labelGefunden")}
          nachricht={t("pageKontakt.labelNachricht")}
          instagram={t("pageKontakt.labelInsta")}
          datenschutzLab={t("pageKontakt.labelDatenschutz")}
          datenschutzAkz={t("pageKontakt.datenschutzAkz")}
          btn={t("pageKontakt.btn")}
          feedbackTitel={t("pageKontakt.feedback.title")}
          feedbackContent={t("pageKontakt.feedback.content")}
        />
      </section>
      <section>
        <div className="lineimg">
          <Image
            src="/img/kontakt/Hochzeitsfotograf-Starnberg-min.jpg"
            height={700}
            width={500}
            alt="Hochzeitsfotograf Starnberg Marzio Costantini"
          />
        </div>
      </section>
    </main>
  );
};

export default Kontakt;
