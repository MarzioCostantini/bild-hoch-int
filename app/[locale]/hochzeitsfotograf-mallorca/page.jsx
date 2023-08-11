import Image from "next/image";
import Link from "next/link";
import Momente from "../components/Momente";
import PortfolioBanner from "../components/PortfolioBanner";
import LeistungenHero from "../components/LeistungenHero";
import styles from "../styles/Unterseite.module.css";
import { createTranslator, useTranslations } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  return {
    title: t("pageHzMallorca.meta.title"),
    description: t("pageHzMallorca.meta.description"),
  };
}

const HochzeitsfotografMallorca = () => {
  const t = useTranslations("pageHzMallorca");

  return (
    <div className={styles.Unterseite}>
      <header className={styles.HeroUnterseite}>
        <div className={styles.wrapperInner}>
          <div className={styles.herocontent}>
            <h1>
              {t.rich("title", {
                br: () => <br />,
              })}
            </h1>
            <h2>{t("subTitle")}</h2>
            <div className={styles.line}></div>
          </div>
        </div>
      </header>
      <main className={styles.Florenz}>
        <section className={styles.threeImg}>
          <article>
            <h2>{t("einleitung.title")}</h2>
            <h6>{t("einleitung.subTitle")}</h6>
            <p>
              {t.rich("einleitung.content", {
                br: () => <br />,
              })}
            </p>
            <Link href="/kontakt">
              <p target="_blank" className="btn">
                {t("einleitung.btn")}
              </p>
            </Link>
          </article>

          <article className={styles.imgwrapper}>
            <div>
              <Image
                src="/img/sonstige/Hochzeitsfotograf-munchen-augsburg-starnberg-9.jpg"
                height={400}
                width={300}
                alt="Hochzeitsfotograf Starnberg Marzio Costantini"
              />
            </div>
            <div>
              <Image
                src="/img/sonstige/Hochzeitsfotograf-munchen-augsburg-starnberg-3.jpg"
                height={200}
                width={300}
                alt="Hochzeitsfotograf Starnberg Marzio Costantini"
              />
            </div>
          </article>
        </section>
        <section className={styles.oneImg}>
          <article>
            <div className="lineim">
              <Image
                src="/img/sonstige/Hochzeitsfotograf-münchen-augsburg-starnberg-7.jpg"
                height={400}
                width={600}
                sizes="100vw"
                style={{ width: "90%", height: "auto" }}
                alt="Hochzeitsfotograf Starnberg Marzio Costantini"
              />
            </div>
          </article>
          <article>
            <h3>{t("warum.titel")}</h3>
            <p>{t("warum.content1")}</p>
            <br />
            <br />
            <p>{t("warum.content2")}</p>
          </article>
        </section>

        <section className={styles.threeImg}>
          <article>
            <h2>{t("heiraten.title")}</h2>
            <h6>{t("heiraten.subTitle")}</h6>
            <p>
              {t.rich("heiraten.content", {
                br: () => <br />,
              })}
            </p>
            <Link href="/kontakt">
              <p target="_blank" className="btn">
                {t("heiraten.btn")}
              </p>
            </Link>
          </article>

          <article className={styles.imgwrapper}>
            <div>
              <Image
                src="/img/florenz/Hochzeitsfotograf-toskana-florenz (6 von 11)-min.jpg"
                height={600}
                width={400}
                alt="Hochzeitsfotograf Starnberg Marzio Costantini"
              />
            </div>
          </article>
        </section>

        <section className={styles.momente}>
          <Momente />
        </section>
        <section className={styles.location}>
          <div className={styles.headline}>
            <h2>
              {t.rich("location.title", {
                br: () => <br />,
              })}
            </h2>
            <h6>{t("location.subTitle")}</h6>
            <div className="line"></div>
          </div>
          <article>
            <p className={styles.number}>1</p>
            <div className={styles.data}>
              <h4>{t("location.loca1.subTitle")}</h4>
              <h3>Finca Santa Lucia</h3>
              <Link href="https://www.finca-santalucia-mallorca.com/can-monsenyer">
                <p target="_blank" className="btn">
                  {t("location.webseite")}
                </p>
              </Link>
            </div>
            <p className={styles.text}>
              {t.rich("location.loca1.content", {
                br: () => <br />,
              })}
            </p>
          </article>

          <article>
            <p className={styles.number}>2</p>
            <div className={styles.data}>
              <h4>{t("location.loca2.subTitle")}</h4>
              <h3>Finca Alaiar</h3>
              <Link href="https://www.alaiar.com/">
                <p target="_blank" className="btn">
                  {t("location.webseite")}
                </p>
              </Link>
            </div>
            <p className={styles.text}>
              {t.rich("location.loca2.content", {
                br: () => <br />,
              })}
            </p>
          </article>

          <article>
            <p className={styles.number}>3</p>
            <div className={styles.data}>
              <h4>{t("location.loca3.subTitle")}</h4>
              <h3>Cap Rocat</h3>
              <Link href="https://caprocat.com/?utm_source=google&utm_medium=my_business&utm_campaign=my_business">
                <p target="_blank" className="btn">
                  {t("location.webseite")}
                </p>
              </Link>
            </div>
            <p className={styles.text}>
              {t.rich("location.loca3.content", {
                br: () => <br />,
              })}
            </p>
          </article>

          <article>
            <p className={styles.number}>4</p>
            <div className={styles.data}>
              <h4>{t("location.loca4.subTitle")}</h4>
              <h3> Carrossa Spa Villa Hotel</h3>
              <Link href="https://www.carrossa.com/de">
                <p target="_blank" className="btn">
                  {t("location.webseite")}
                </p>
              </Link>
            </div>
            <p className={styles.text}>
              {t.rich("location.loca4.content", {
                br: () => <br />,
              })}
            </p>
          </article>

          <article>
            <p className={styles.number}>5</p>
            <div className={styles.data}>
              <h4>{t("location.loca5.subTitle")}</h4>
              <h3>Son Togores</h3>
              <Link href="https://www.sontogores.com/">
                <p target="_blank" className="btn">
                  {t("location.webseite")}
                </p>
              </Link>
            </div>
            <p className={styles.text}>
              {t.rich("location.loca5.content", {
                br: () => <br />,
              })}
            </p>
          </article>
        </section>

        <section className={styles.kosten}>
          <h2>
            {t.rich("kosten.title", {
              br: () => <br />,
            })}
          </h2>
          <h6>{t("kosten.subTitle")}</h6>
          <div className="line"></div>
          <p>
            {t.rich("kosten.content", {
              br: () => <br />,
            })}
          </p>
          <div className={styles.img}>
            <div>
              <Image
                src="/img/sonstige/Hochzeitsfotograf-starnberg-mallorca-5-min.jpg"
                height={250}
                width={400}
                alt="Hochzeitsfotograf Mallorca - Hochzeit Mallorca"
              />
            </div>
            <div>
              <Image
                src="/img/sonstige/Hochzeitsfotograf-starnberg-mallorca-35-min.jpg"
                height={400}
                width={300}
                alt="Hochzeitsfotograf Mallorca - Hochzeit Mallorca"
              />
            </div>
            <div>
              <Image
                src="/img/sonstige/Hochzeitsfotograf-starnberg-mallorca-2-min.jpg"
                height={200}
                width={300}
                alt="Hochzeitsfotograf Mallorca - Hochzeit Mallorca"
              />
            </div>
          </div>
        </section>
        <section className={styles.weddingPlaner}>
          <div className={styles.headlinePlaner}>
            <h2>{t("hochzeitsplaner.title")} </h2>
            <h6>{t("hochzeitsplaner.subTitle")}</h6>
            <div className="line"></div>
          </div>
          <article>
            <p className={styles.numberPlaner}>01</p>
            <div className={styles.PlanContent}>
              <h3>Mallorca Love Story</h3>
              <p>{t("hochzeitsplaner.planer.plan1.content")}</p>
              <Link href="https://www.mallorca-lovestory.com/">
                <p target="_blank" className="btn">
                  {t("location.webseite")}
                </p>
              </Link>
            </div>
          </article>

          <article>
            <p className={styles.numberPlaner}>02</p>
            <div className={styles.PlanContent}>
              <h3>Love Birds Mallorca</h3>
              <p>{t("hochzeitsplaner.planer.plan2.content")}</p>
              <Link href="https://www.lovebirds-mallorca.com/">
                <p target="_blank" className="btn">
                  {t("location.webseite")}
                </p>
              </Link>
            </div>
          </article>

          <article>
            <p className={styles.numberPlaner}>03</p>
            <div className={styles.PlanContent}>
              <h3>Mallorca Boutique Weddings</h3>
              <p>{t("hochzeitsplaner.planer.plan3.content")}</p>
              <Link href="https://mallorca-boutique-weddings.com/">
                <p target="_blank" className="btn">
                  {t("location.webseite")}
                </p>
              </Link>
            </div>
          </article>
        </section>
        <section>
          <LeistungenHero
            titel={t("slogan")}
            img1="/img/leistungen/Hochzeitsfotograf_Munchen-02-min.jpg"
            img2="/img/leistungen/Hochzeitsfotograf_Munchen-03-min.jpg"
            kontakt={t("kontakt")}
          />
        </section>
        <PortfolioBanner />
      </main>
    </div>
  );
};

export default HochzeitsfotografMallorca;
