import styles from "../styles/hochzeitsfotograf.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

const HochzeitsfotografStarnberg = () => {
  const t = useTranslations();

  return (
    <section className={styles.hochzeitsfotograf}>
      <article>
        <div>
          <Image
            src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1695041606/Pages/Home/Hochzeitsfotograf-in-Mu%CC%88nchen_byppvx.avif"
            height={200}
            width={270}
            alt="Hochzeitsfotograf Starnberg München Augsburg Garmisch-Partenkirchen"
            style={{ width: "50%", height: "auto" }}
            sizes="100vw"
          />
        </div>

        <div>
          <h2>
            {t.rich("pageHome.hzfotografSta.title", {
              br: () => <br />,
            })}
          </h2>
          <h6>{t("pageHome.hzfotografSta.subtitle")}</h6>
          <p>
            {t.rich("pageHome.hzfotografSta.content", {
              br: () => <br />,
            })}
          </p>
        </div>
        <div className={styles.img02}>
          <Image
            src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1695041595/Pages/Home/Hochzeitsfotograf_Mu%CC%88nchen_33_ttxio3.jpg"
            height={250}
            width={200}
            alt="Hochzeitsfotograf Starnberg München Augsburg Garmisch-Partenkirchen"
            style={{ width: "50%", height: "auto" }}
            sizes="100vw"
          />
        </div>
      </article>
      <div className={styles.imgCol}>
        <div>
          <Image
            src="/img/home/Hochzeitsfotograf-Starnberg-deko3-min.avif"
            height={300}
            width={350}
            alt="Hochzeitsfotograf Starnberg München Augsburg Garmisch-Partenkirchen"
            style={{ height: "auto", width: "100%" }}
            sizes="100vw"
          />
        </div>

        <Image
          src="/img/home/Hochzeitsfotograf-Starnberg-deko5-min.avif"
          height={300}
          width={230}
          alt="Hochzeitsfotograf Starnberg München Augsburg Garmisch-Partenkirchen"
          style={{ height: "auto" }}
        />
        <div>
          <Image
            src="/img/home/Hochzeitsfotograf-Starnberg-deko5-min.avif"
            height={265}
            width={350}
            alt="Hochzeitsfotograf Starnberg München Augsburg Garmisch-Partenkirchen"
            style={{ height: "auto", width: "100%" }}
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default HochzeitsfotografStarnberg;
