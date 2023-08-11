import styles from "../styles/Faq.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

const FaqHome = () => {
  const t = useTranslations();

  return (
    <section className={styles.faq}>
      <h4>{t("pageFaq.faq.title")}</h4>
      <h6 className={styles.h6}>{t("pageFaq.faq.subTitle")}</h6>
      <hr />
      <article>
        <div className="lineimg">
          <Image
            src="/img/faq/Hochzeitsfotograf_augsburg_01-min.avif"
            height={300}
            width={300}
            alt="Hochzeitsfotograf München Starnberg Augsburg Garmisch-partenkirchen Gardasee Florenz"
          />
        </div>
        <div className={styles.textContent}>
          <h3>{t("pageFaq.faq.faq1.title")}</h3>
          <h6>{t("pageFaq.faq.faq1.subTitle")}</h6>
          <p>
            {t.rich("pageFaq.faq.faq1.content", {
              span: (chunks) => <b>{chunks}</b>,
              br: () => <br />,
            })}
          </p>
        </div>
      </article>
      <article>
        <div className={styles.textContent}>
          <h3>{t("pageFaq.faq.faq2.title")}</h3>
          <h6>{t("pageFaq.faq.faq2.subTitle")}</h6>
          <p>
            {t.rich("pageFaq.faq.faq2.content", {
              span: (chunks) => <b>{chunks}</b>,
              br: () => <br />,
            })}
          </p>
        </div>
        <div className="lineimg">
          <Image
            src="/img/faq/Hochzeitsfotograf_augsburg_02-min.avif"
            height={300}
            width={300}
            alt="Hochzeitsfotograf München Starnberg Augsburg Garmisch-partenkirchen Gardasee Florenz"
          />
        </div>
      </article>
      <article>
        <div className="lineimg">
          <Image
            src="/img/faq/Hochzeitsfotograf_augsburg_03-min.avif"
            height={300}
            width={300}
            alt="Hochzeitsfotograf München Starnberg Augsburg Garmisch-partenkirchen Gardasee Florenz"
          />
        </div>
        <div className={styles.textContent}>
          <h3>{t("pageFaq.faq.faq3.title")}</h3>
          <h6>{t("pageFaq.faq.faq3.subTitle")}</h6>
          <p>
            {t.rich("pageFaq.faq.faq3.content", {
              span: (chunks) => <b>{chunks}</b>,
              br: () => <br />,
            })}
          </p>
        </div>
      </article>
    </section>
  );
};

export default FaqHome;
