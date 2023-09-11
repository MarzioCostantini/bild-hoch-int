import styles from "../styles/WelcomeHero.module.css";
import Image from "next/image";
import Link from "next/link";
import Circle from "../../../public/img/svgs/circle";

import { useTranslations } from "next-intl";
const WelcomeHero = () => {
  const t = useTranslations();

  return (
    <section className={styles.heroWelcome}>
      <div className={styles.homeWrapper}>
        <h1>
          {t.rich("pageHome.welcomeHero.bigTitle", {
            br: () => <br />,
          })}
        </h1>
        <h2>
          {t.rich("pageHome.welcomeHero.subTitle", {
            important: (chunks) => <b>{chunks}</b>,
            very: (chunks) => <i>{chunks}</i>,
          })}
        </h2>

        <div>
          <hr />
          <p className={styles.zusatz}>
            {t.rich("pageHome.welcomeHero.zusatztext1", {
              br: () => <br />,
            })}
          </p>
          <Image
            src="/img/home/Hochzeitsfotograf-Marzio-Costantini-min.avif"
            height={350}
            width={300}
            alt="Hochzeitsfotograf München"
            // style={{ width: "100%", height: "auto" }}
          />

          <p className={styles.zusatz}>
            {t.rich("pageHome.welcomeHero.zusatztext2", {
              br: () => <br />,
            })}
          </p>
          <hr />
        </div>
        <div className={styles.linebtm}></div>
        <Circle />
        <p className={styles.content}>
          {t("pageHome.welcomeHero.welcomeText")}
        </p>
        <Link href="/about">
          <p className="btn">{t("pageHome.welcomeHero.buttonHero")}</p>
        </Link>
      </div>
    </section>
  );
};

export default WelcomeHero;
