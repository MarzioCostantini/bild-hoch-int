import styles from "../styles/WelcomeHero.module.css";
import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";
const WelcomeHero = () => {
  const t = useTranslations();

  return (
    <section className={styles.heroWelcome}>
      <h1>
        {t.rich("pageHome.welcomeHero.bigTitle", {
          br: () => <br />,
        })}
      </h1>

      <hr></hr>
      <p>{t("pageHome.welcomeHero.welcomeText")}</p>
      <div>
        <hr />
        <p>
          {t.rich("pageHome.welcomeHero.zusatztext1", {
            br: () => <br />,
          })}
        </p>
        <div className="lineimg">
          <Image
            src="/img/home/Hochzeitsfotograf-Marzio-Costantini-min.avif"
            height={350}
            width={350}
            alt="Hochzeitsfotograf München"
            loading="eager"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <p>
          {t.rich("pageHome.welcomeHero.zusatztext2", {
            br: () => <br />,
          })}
        </p>
        <hr />
      </div>
      <Link href="/about">
        <p className="btn">{t("pageHome.welcomeHero.buttonHero")}</p>
      </Link>
    </section>
  );
};

export default WelcomeHero;
