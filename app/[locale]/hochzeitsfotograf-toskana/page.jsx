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
    title: t("pageHzFlorenz.meta.title"),
    description: t("pageHzFlorenz.meta.description"),
  };
}

const HochzeitsfotografFlorenz = () => {
  const t = useTranslations("pageHzFlorenz");

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
                {t("link")}
              </p>
            </Link>
          </article>

          <article className={styles.imgwrapper}>
            <div>
              <Image
                src="/img/florenz/Hochzeitsfotograf-toskana-florenz (6 von 11)-min.jpg"
                height={400}
                width={300}
                alt="Hochzeitsfotograf Starnberg Marzio Costantini"
              />
            </div>
            <div>
              <Image
                src="/img/home/Hochzeitsfotograf-Starnberg-deko5-min.jpg"
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
                src="/img/florenz/hochzeitsfotograftoskana-1.jpg"
                height={500}
                width={400}
                sizes="100vw"
                style={{ width: "80%", height: "auto" }}
                alt="Hochzeitsfotograf Starnberg Marzio Costantini"
              />
            </div>
          </article>
          <article>
            <h3>{t("warum.titel")}</h3>
            <p>{t("warum.content1")}</p>
          </article>
        </section>
        <section>
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
              <h3>Schloss von Vincigliata</h3>
              <Link href="http://www.tuscanydream.org/castle-vincigliata.html">
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
              <h3>Villa di Maiano</h3>
              <Link href="https://www.villadimaiano.it/gallery">
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
              <h3>Villa Cora</h3>
              <Link href="http://www.villacora.it/de/location-per-eventi-5-stelle-firenze.php">
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
              <h3> Hotel Four Seasons</h3>
              <Link href="https://www.fourseasons.com/florence/?ef_id=Cj0KCQiAg_KbBhDLARIsANx7wAxfG4Mlo9oKfn28uUyU_A-jGgE7zTbEkoGYGHkdw6r-dnMyBT8W9FUaAiYuEALw_wcB:G:s&s_kwcid=AL!4732!3!623667867047!p!!g!!four%20seasons%20hotel%20firenze&&source=ppc%7CFLO%7Cgaw%7Cacr%7CRG%7CBrand-WW&kpid=go_cmp-10222087579_adg-105713464961_ad-623667867047_kwd-6273481460_dev-c_ext-_prd-_sig-Cj0KCQiAg_KbBhDLARIsANx7wAxfG4Mlo9oKfn28uUyU_A-jGgE7zTbEkoGYGHkdw6r-dnMyBT8W9FUaAiYuEALw_wcB&ppc=true&gclid=Cj0KCQiAg_KbBhDLARIsANx7wAxfG4Mlo9oKfn28uUyU_A-jGgE7zTbEkoGYGHkdw6r-dnMyBT8W9FUaAiYuEALw_wcB&gclsrc=aw.ds">
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
              <h3> Der Rosengarten Florenz</h3>
              <Link href="https://www.visittuscany.com/de/attraktionen/der-rosengarten-in-florenz/">
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
              <h3> Hotel St. Regis</h3>
              <Link href="https://www.melia.com/de/hotels/italien/florenz/hotel-tenuta-di-artimino-melia-collection?esl-k=sem-google%7Cng%7Cc630979993889%7Cmb%7Ckhotels%20in%20der%20n%C3%A4he%20von%20florenz%7Cp%7Ct%7Cdc%7Ca142726615677%7Cg18669108925&gclid=Cj0KCQiAg_KbBhDLARIsANx7wAxzdfvE3x9MutL6T3pl5O6p_PaCyab9PxXuRtuXkmXd576J8PB746MaAjDEEALw_wcB&gclsrc=aw.ds">
                <p target="_blank" className="btn">
                  {t("link")}
                </p>
              </Link>
            </div>
            <p className={styles.text}>{t("location.loca6.content")}</p>
          </article>
        </section>
        <section className={styles.whatYouNeed}>
          <h2>
            {t.rich("benotigen.title", {
              br: () => <br />,
            })}
          </h2>
          <h6>{t("einleitung.subTitle")}</h6>

          <div className="line"></div>
          <p>
            {t.rich("benotigen.content", {
              br: () => <br />,
            })}
          </p>
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
                src="/img/home/Hochzeitsfotograf-Starnberg-Hintergrundbild-min.jpg"
                height={200}
                width={400}
                alt="Hochzeitsfotograf Starnberg Marzio Costantini"
              />
            </div>
            <div>
              <Image
                src="/img/sonstige/Hochzeitsfotograf-starnberg-mallorca-35-min.jpg"
                height={400}
                width={300}
                alt="Hochzeitsfotograf Starnberg Marzio Costantini"
              />
            </div>
            <div>
              <Image
                src="/img/faq/Hochzeitsfotograf_augsburg_06-min.jpg"
                height={200}
                width={300}
                alt="Hochzeitsfotograf Starnberg Marzio Costantini"
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
              <h3>Floé Hochzeiten</h3>
              <p>{t("hochzeitsplaner.planer.plan1.content")}</p>
              <Link href="https://floeweddings.com/">
                <p target="_blank" className="btn">
                  {t("link")}
                </p>
              </Link>
            </div>
          </article>

          <article>
            <p className={styles.numberPlaner}>02</p>
            <div className={styles.PlanContent}>
              <h3>Your Wedding in Florence</h3>
              <p>{t("hochzeitsplaner.planer.plan2.content")}</p>
              <Link href="https://yourweddinginflorence.com/">
                <p target="_blank" className="btn">
                  {t("link")}
                </p>
              </Link>
            </div>
          </article>

          <article>
            <p className={styles.numberPlaner}>03</p>
            <div className={styles.PlanContent}>
              <h3>Blooming Eventi</h3>
              <p>{t("hochzeitsplaner.planer.plan3.content")}</p>
              <Link href="http://www.bloomingeventi.it/">
                <p target="_blank" className="btn">
                  {t("link")}
                </p>
              </Link>
            </div>
          </article>

          <article>
            <p className={styles.numberPlaner}>04</p>
            <div className={styles.PlanContent}>
              <h3>Original Tuscan Wedding</h3>
              <p>{t("hochzeitsplaner.planer.plan4.content")}</p>
              <Link href="https://www.originaltuscanwedding.com/">
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

export default HochzeitsfotografFlorenz;
