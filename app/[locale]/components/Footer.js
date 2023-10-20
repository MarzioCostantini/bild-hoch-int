import Link from "next/link";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import WebDevelopment from "../../../public/img/svgs/WebDevelopment";
import { useTranslations } from "next-intl";
import McImage from "./McImage";

const Footer = () => {
  const t = useTranslations();
  return (
    <footer className={styles.footer}>
      <section>
        <article className={styles.legal}>
          <h3>Legal</h3>
          <div>
            <Link href="/impressum">
              <p>{t("footer.legal.link1")}</p>
            </Link>
            <Link href="/agb">
              <p>{t("footer.legal.link2")}</p>
            </Link>
            <Link href="/datenschutz">
              <p>{t("footer.legal.link3")}</p>
            </Link>
            <Link href="/">
              <p>{t("footer.legal.link4")}</p>
            </Link>
            <Link href="/hochzeitsfotograf-starnberg">
              <p>{t("footer.legal.link5a")}</p>
            </Link>
            <Link href="/hochzeitsfotograf-mallorca">
              <p>{t("footer.legal.link5")}</p>
            </Link>
            <Link href="/hochzeitsfotograf-toskana">
              <p>{t("footer.legal.link6")}</p>
            </Link>
            <Link href="/hochzeitsfotograf-gardasee">
              <p>{t("footer.legal.link7")}</p>
            </Link>
            <Link href="/heiraten-auf-der-zugspitze">
              <p>{t("footer.legal.link8")}</p>
            </Link>
          </div>
        </article>
        <div className={styles.dekoimg}>
          <WebDevelopment />
          <div></div>
        </div>
        <article className={styles.instagram}>
          <h3>Instagram</h3>
          <Link target="_blank" href="https://www.instagram.com/bild_hochzeit/">
            <p>@BILD_HOCHZEIT</p>
          </Link>

          <Link target="_blank" href="https://www.instagram.com/bild_hochzeit/">
            <div className={styles.igColl}>
              <McImage
                src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697793410/Components/Hochzeitsfotograf_Munchen04-min_k7yb25.avif"
                height={200}
                width={200}
                alt="Hochzeitsfotograf München"
              />
              <McImage
                src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697793411/Components/Hochzeitsfotograf_Munchen06-min_nevtur.avif"
                height={200}
                width={200}
                alt="Hochzeitsfotograf München"
              />
              <McImage
                src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697793410/Components/Hochzeitsfotograf_Munchen01-min_ws3vkd.avif"
                height={200}
                width={200}
                alt="Hochzeitsfotograf München"
              />
              <McImage
                src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697793411/Components/Hochzeitsfotograf_Munchen03-min_mm9zem.avif"
                height={200}
                width={200}
                alt="Hochzeitsfotograf München"
              />
              <McImage
                src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697793409/Components/Hochzeitsfotograf_Munchen02-min_rhyp0m.avif"
                height={200}
                width={200}
                alt="Hochzeitsfotograf München"
              />
              <McImage
                src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697793410/Components/Hochzeitsfotograf_Munchen05-min_kptw9w.avif"
                height={200}
                width={200}
                alt="Hochzeitsfotograf München"
              />
            </div>
          </Link>
        </article>
        <div className={styles.dekoimg}>
          <WebDevelopment />
          <div></div>
        </div>
        <article className={styles.sitemap}>
          <h3>Sitemap</h3>
          <div>
            <Link href="/">
              <p>{t("footer.sitemap.link1")}</p>
            </Link>
            <Link href="/hochzeitsreportagen">
              <p>{t("footer.sitemap.link2")}</p>
            </Link>
            <Link href="/kontakt">
              <p>{t("footer.sitemap.link3")}</p>
            </Link>
            <Link href="/leistungen">
              <p>{t("footer.sitemap.link4")}</p>
            </Link>
            <Link href="/faq">
              <p>{t("footer.sitemap.link5")}</p>
            </Link>
            <Link href="/about">
              <p>{t("footer.sitemap.link6")}</p>
            </Link>
            <Link href="/partner">
              <p>Partner</p>
            </Link>
          </div>
        </article>
      </section>
      <p>
        © {new Date().getFullYear()} {t("footer.copyright")}
      </p>
    </footer>
  );
};

export default Footer;
