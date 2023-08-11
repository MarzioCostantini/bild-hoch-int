import styles from "../styles/Preise.module.css";
import Link from "next/link";
import CheckIcon from "../../../public/img/svgs/CheckIcon";
import { useTranslations } from "next-intl";

const Preise = () => {
  const t = useTranslations();

  return (
    <section className={styles.preise}>
      <article>
        <p>01</p>

        <h3>{t("pageLeistungen.leistungenLabel.leistung1")}</h3>
        <div></div>
        <ul>
          <li>
            <CheckIcon /> {t("pageLeistungen.leistungsDetail.bearatung")}
          </li>
          <li>
            <CheckIcon /> -{" "}
            {t("pageLeistungen.leistungsDetail.nachbearbeitung")}
          </li>
          <li>
            <CheckIcon /> - {t("pageLeistungen.leistungsDetail.bilder")}
          </li>

          <li>
            <CheckIcon /> - {t("pageLeistungen.leistungsDetail.bearatung")}
          </li>
          <li>
            <CheckIcon /> - {t("pageLeistungen.leistungsDetail.usbStick")}
          </li>
        </ul>
        <Link href="/kontakt">
          <p className="btn">{t("pageLeistungen.btnAnfrage")}</p>
        </Link>
      </article>

      <article>
        <p>02</p>

        <h3>{t("pageLeistungen.leistungenLabel.leistung2")}</h3>
        <div></div>
        <ul>
          <li>
            <CheckIcon /> - {t("pageLeistungen.leistungsDetail.bearatung")}
          </li>
          <li>
            <CheckIcon /> -{" "}
            {t("pageLeistungen.leistungsDetail.nachbearbeitung")}
          </li>

          <li>
            <CheckIcon /> - {t("pageLeistungen.leistungsDetail.bilder")}
          </li>
          <li>
            <CheckIcon /> - {t("pageLeistungen.leistungsDetail.bearatung")}
          </li>
          <li>
            <CheckIcon /> - {t("pageLeistungen.leistungsDetail.usbStick")}
          </li>
        </ul>
        <Link href="/kontakt">
          <p className="btn">{t("pageLeistungen.btnAnfrage")}</p>
        </Link>
      </article>

      <article>
        <p>03</p>

        <h3>{t("pageLeistungen.leistungenLabel.leistung3")}</h3>
        <div></div>
        <ul>
          <li>
            <CheckIcon /> - {t("pageLeistungen.leistungsDetail.bearatung")}
          </li>
          <li>
            <CheckIcon /> -{" "}
            {t("pageLeistungen.leistungsDetail.nachbearbeitung")}
          </li>
          <li>
            <CheckIcon /> - {t("pageLeistungen.leistungsDetail.bilder")}
          </li>

          <li>
            <CheckIcon /> - {t("pageLeistungen.leistungsDetail.bearatung")}
          </li>
          <li className={styles.disable}>
            <CheckIcon /> - {t("pageLeistungen.leistungsDetail.usbStick")}
          </li>
        </ul>
        <Link href="/kontakt">
          <p className="btn">{t("pageLeistungen.btnAnfrage")}</p>
        </Link>
      </article>

      <article>
        <p>04</p>

        <h3>{t("pageLeistungen.leistungenLabel.leistung4")}</h3>
        <div></div>
        <ul>
          <li>
            <CheckIcon /> - {t("pageLeistungen.leistungsDetail.bearatung")}
          </li>
          <li>
            <CheckIcon /> -{" "}
            {t("pageLeistungen.leistungsDetail.nachbearbeitung")}
          </li>
          <li>
            <CheckIcon /> - {t("pageLeistungen.leistungsDetail.bilder")}
          </li>

          <li className={styles.disable}>
            <CheckIcon /> - {t("pageLeistungen.leistungsDetail.bearatung")}
          </li>
          <li className={styles.disable}>
            <CheckIcon /> - {t("pageLeistungen.leistungsDetail.usbStick")}
          </li>
        </ul>
        <Link href="/kontakt" className="btn">
          {t("pageLeistungen.btnAnfrage")}
        </Link>
        <p>{t("pageLeistungen.leistungsDetail.unterDrei")}</p>
      </article>
    </section>
  );
};

export default Preise;
