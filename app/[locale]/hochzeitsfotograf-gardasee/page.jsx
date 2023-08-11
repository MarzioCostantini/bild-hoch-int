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
    title: t("pageHzGardasee.meta.title"),
    description: t("pageHzGardasee.meta.description"),
  };
}

const HochzeitsfotografGardasee = () => {
  const t = useTranslations("pageHzGardasee");

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
                src="/img/sonstige/Hochzeitsfotograf-münchen-augsburg-starnberg-17-min.jpg"
                height={400}
                width={300}
                alt="Hochzeitsfotograf Gardasee - Starnberg Marzio Costantini"
              />
            </div>
            <div>
              <Image
                src="/img/sonstige/hochzeitsfotograf-tutzing-18-min.jpg"
                height={200}
                width={300}
                alt="Hochzeitsfotograf Gardasee - Starnberg Marzio Costantini"
              />
            </div>
          </article>
        </section>
        <section className={styles.oneImg}>
          <article>
            <div className="lineim">
              <Image
                src="/img/sonstige/Hochzeitsfotograf-starnberg-mallorca-15-min.jpg"
                height={700}
                width={1000}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt="Hochzeitsfotograf Gardasee - Starnberg Marzio Costantini"
              />
            </div>
          </article>
          <article>
            <h3>{t("warum.titel")}</h3>
            <p>
              {t.rich("warum.content1", {
                br: () => <br />,
              })}
            </p>
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
                alt="Hochzeitsfotograf Gardasee - Starnberg Marzio Costantini"
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
              <h3>Antica Dimora del Turco</h3>
              <Link href="https://www.anticadimoradelturco.it/de/">
                <p target="_blank" className="btn">
                  {t("link")}
                </p>
              </Link>
            </div>
            <p className={styles.text}>{t("location.loca1.content")}</p>
          </article>

          <article>
            <p className={styles.number}>2</p>
            <div className={styles.data}>
              <h4>{t("location.loca2.subTitle")}</h4>
              <h3>La finestra sul Fiume</h3>
              <Link href="https://www.lafinestrasulfiume.it/">
                <p target="_blank" className="btn">
                  {t("link")}
                </p>
              </Link>
            </div>
            <p className={styles.text}>{t("location.loca2.content")}</p>
          </article>

          <article>
            <p className={styles.number}>3</p>
            <div className={styles.data}>
              <h4>{t("location.loca3.subTitle")}</h4>
              <h3>Tenuta la Presa</h3>
              <Link href="https://www.tenutalapresa.it/de/">
                <p target="_blank" className="btn">
                  {t("link")}
                </p>
              </Link>
            </div>
            <p className={styles.text}>{t("location.loca3.content")}</p>
          </article>

          <article>
            <p className={styles.number}>4</p>
            <div className={styles.data}>
              <h4>{t("location.loca4.subTitle")}</h4>
              <h3> Azienda Agricola Pratello</h3>
              <Link href="https://www.pratello.com/de">
                <p target="_blank" className="btn">
                  {t("link")}
                </p>
              </Link>
            </div>
            <p className={styles.text}>{t("location.loca4.content")}</p>
          </article>

          <article>
            <p className={styles.number}>5</p>
            <div className={styles.data}>
              <h4>{t("location.loca5.subTitle")}</h4>
              <h3>Villa Arcadio</h3>
              <Link href="https://www.hotelvillaarcadio.it/de/">
                <p target="_blank" className="btn">
                  {t("link")}
                </p>
              </Link>
            </div>
            <p className={styles.text}>{t("location.loca5.content")}</p>
          </article>

          <article>
            <p className={styles.number}>6</p>
            <div className={styles.data}>
              <h4>{t("location.loca6.subTitle")}</h4>
              <h3>Corte Guastalla</h3>
              <Link href="https://www.corteguastalla.it/de/hochzeiten/">
                <p target="_blank" className="btn">
                  {t("link")}
                </p>
              </Link>
            </div>
            <p className={styles.text}>{t("location.loca6.content")}</p>
          </article>

          <article>
            <p className={styles.number}>7</p>
            <div className={styles.data}>
              <h4>{t("location.loca7.subTitle")}</h4>
              <h3>Villa san Vigillio</h3>
              <Link href="https://en.villasanvigilio.com/matrimoni">
                <p target="_blank" className="btn">
                  {t("link")}
                </p>
              </Link>
            </div>
            <p className={styles.text}>{t("location.loca7.content")}</p>
          </article>

          <article>
            <p className={styles.number}>8</p>
            <div className={styles.data}>
              <h4>{t("location.loca8.subTitle")}</h4>
              <h3>Villa Cariola</h3>
              <Link href="https://www.villacariola.it/de/hochzeiten/?gclid=CjwKCAjwpqCZBhAbEiwAa7pXeaY_MwAkZvDLMhZS7CUU3T5tcGXsAP-PZpocevh0tHj41h8k-gx0qRoCoIwQAvD_BwE">
                <p target="_blank" className="btn">
                  {t("link")}
                </p>
              </Link>
            </div>
            <p className={styles.text}>{t("location.loca8.content")}</p>
          </article>

          <article>
            <p className={styles.number}>9</p>
            <div className={styles.data}>
              <h4>{t("location.loca9.subTitle")}</h4>
              <h3>Azienda della Pieve</h3>
              <Link href="https://www.agriturismodellapieve.it/">
                <p target="_blank" className="btn">
                  {t("link")}
                </p>
              </Link>
            </div>
            <p className={styles.text}>{t("location.loca9.content")}</p>
          </article>

          <article>
            <p className={styles.number}>10</p>
            <div className={styles.data}>
              <h4>{t("location.loca10.subTitle")}</h4>
              <h3>Isola del Garda</h3>
              <Link href="https://www.isoladelgarda.com/de/Hochzeiten">
                <p target="_blank" className="btn">
                  {t("link")}
                </p>
              </Link>
            </div>
            <p className={styles.text}>{t("location.loca10.content")}</p>
          </article>
        </section>

        <section className={styles.kosten}>
          <h2>
            {t.rich("kosten.title", {
              br: () => <br />,
            })}
          </h2>
          <h6>{t("kosten.subTitle")} </h6>
          <div className="line"></div>
          <p>
            {t.rich("kosten.content", {
              br: () => <br />,
            })}
          </p>
          <div className={styles.img}>
            <div>
              <Image
                src="/img/florenz/Hochzeitsfotograf-toskana-florenz (10 von 11)-min.jpg"
                height={300}
                width={450}
                alt="Hochzeitsfotograf Mallorca - Hochzeit Mallorca"
              />
            </div>
            <div>
              <Image
                src="/img/florenz/Hochzeitsfotograf-toskana-florenz (8 von 11)-min.jpg"
                height={500}
                width={350}
                alt="Hochzeitsfotograf Mallorca - Hochzeit Mallorca"
              />
            </div>
            <div>
              <Image
                src="/img/florenz/hochzeitslocation-toskana-1-min.jpg"
                height={250}
                width={370}
                alt="Hochzeitsfotograf Mallorca - Hochzeit Mallorca"
              />
            </div>
          </div>
        </section>
        <section className={styles.weddingPlaner}>
          <div className={styles.headlinePlaner}>
            <h2>{t("hochzeitsplaner.title")}</h2>
            <h6>{t("hochzeitsplaner.subTitle")}</h6>
            <div className="line"></div>
          </div>
          <article>
            <p className={styles.numberPlaner}>01</p>
            <div className={styles.PlanContent}>
              <h3>Synergy Wedding</h3>
              <p>{t("hochzeitsplaner.planer.plan1.content")}</p>
              <Link href="www.synergywedding.com">
                <p target="_blank" className="btn">
                  {t("link")}
                </p>
              </Link>
            </div>
          </article>

          <article>
            <p className={styles.numberPlaner}>02</p>
            <div className={styles.PlanContent}>
              <h3>Beautiful Italian Weddings</h3>
              <p>{t("hochzeitsplaner.planer.plan2.content")}</p>
              <Link href="https://www.beautifulitalianweddings.com/">
                <p target="_blank" className="btn">
                  {t("link")}
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

export default HochzeitsfotografGardasee;
