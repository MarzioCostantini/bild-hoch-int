import { useTranslations } from "next-intl";
import Link from "next/link";
import styles from "../styles/HomeText.module.css";

const HomeText = () => {
  const t = useTranslations();

  return (
    <section className={styles.homeText}>
      <article>
        <h2>
          {t.rich("pageHome.homeText.title1", {
            br: () => <br />,
          })}
        </h2>
        <h6>{t("pageHome.homeText.subTitle1")}</h6>
        <p>
          {t.rich("pageHome.homeText.content1", {
            br: () => <br />,
          })}
        </p>
        <div className={styles.links}>
          <Link href="/hochzeitsfotograf-toskana">Toskana</Link> --
          <Link href="/hochzeitsfotograf-gardasee">Gardasee</Link> --
          <Link href="/hochzeitsfotograf-mallorca">Mallorca</Link>
        </div>
        <p>
          {t.rich("pageHome.homeText.content2", {
            br: () => <br />,
          })}
        </p>
        <p>
          {t.rich("pageHome.homeText.content3", {
            br: () => <br />,
          })}
        </p>
        <hr />
        <h3>{t("pageHome.homeText.title2")}</h3>
        <p>
          {t.rich("pageHome.homeText.content4", {
            br: () => <br />,
          })}
        </p>
      </article>
    </section>
  );
};

export default HomeText;
