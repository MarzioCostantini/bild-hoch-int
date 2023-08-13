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

const jsonLd = [
  {
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Heiraten in Mediterranen Toskana",
    articleBody: "Hochzeit in der Toskana <BR/> Heiraten in Italien",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Heiraten in der Toskana",
    image:
      "https://bild-hochzeit.de/_next/image?url=%2Fimg%2Fflorenz%2FHochzeitsfotograf-toskana-florenz%20(6%20von%2011)-min.jpg&w=640&q=75",
    articleSection:
      "Hochzeitsfotograf Toskana - Sie haben beschlossen sich das Ja-Wort zu geben und eine Hochzeit in der Toskana zu Organisieren. Dazu möchte ich Ihnen gratulieren. Nun geht es an die Planung der Hochzeit. Sie wollen diese vor einer atemberaubenden Kulisse stattfinden lassen? Dann möchte ich Ihnen eine Hochzeit in Florenz ans Herz legen. In diesem Ratgeber verrate ich Ihnen alles, was Sie über eine Hochzeit in Florenz und andere wunderschöne Orte zum Heiraten wissen müssen und wie Sie an den Hochzeitsfotograf Florenz kommen",
    articleBody:
      "Hochzeit in der Toskana - Alles Wissenswerte rund um da Thema Hochzeitsplanung für die Hochzeit in der Toskana",
    url: "https://bild-hochzeit.de/kontakt",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    articleSection:
      "Heiraten in der Toskana - Sie haben den wundervollen Entschluss gefasst, sich in der malerischen Toskana das Ja-Wort zu geben. Die Organisation Ihrer Traumhochzeit steht nun im Vordergrund. Sie träumen von einer Zeremonie vor einem beeindruckenden Panorama? Dann empfehle ich Ihnen von Herzen eine Hochzeit in der Toskana. In diesem Leitfaden enthülle ich Ihnen alle Geheimnisse, die Sie für eine Hochzeit in Florenz und anderen bezaubernden Heiratsorten kennen sollten, und wie Sie den perfekten Hochzeitsfotografen in Florenz finden.",
    articleBody: "Warum eine Hochzeit in der Toskana so besonders ist",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Heiraten in der Toskana - Die besten Hochzeitslocations in der Toskana",
    articleSection:
      "1 Hochzeitslocation Florenz Schloss von Vincigliata Zur Webseite Hochzeitsfotograf Toskana - Für Ihr einmaliges Hochzeitsfest in der Toskana möchte ich Ihnen unbedingt das Schloss Vincigliata samt einem passenden Hochzeitsfotografen vor Ort nahelegen. Dieser atemberaubende Ort, eingebettet in die Hügel von Fiesole, bildet eine perfekte Szenerie für den Hochzeitsfotografen in Florenz. Unweit der Stadt zelebrieren Sie hier eine unvergessliche italienische Trauung und geben sich in den malerischen Gärten oder auf der malerischen Terrasse das Ja-Wort. Das Schloss erweist sich mit seinem geräumigen Innenhof als idealer Schauplatz für Ihre Hochzeitsfeier in der Toskana. Es bietet Ihren Gästen und dem Hochzeitsfotografen genügend Raum für eine stimmungsvolle Feier und herausragende Fotos. Der Hochzeitsfotograf wird Sie in die umliegenden Weinberge führen, um Sie vor dieser eindrucksvollen Kulisse in Szene zu setzen. Eine Besonderheit dieses Ortes sind die Fackeln, die rund um das Schloss platziert sind - ein zauberhafter Anblick, den der Hochzeitsfotograf sicherlich gekonnt auf Bildern festhalten wird. 2 Heiraten in der Toskana Villa di Maiano Zur Webseite Nicht weit vom Castello di Vincigliata liegt die bezaubernde Villa di Maiano, in der Sie sich entscheiden können, ob Ihre toskanische Hochzeit im Innen- oder im Freien stattfinden soll. Passende Locations, komplett mit einem Hochzeitsfotografen aus der Toskana, stehen Ihnen hier in verschiedenen Variationen zur Verfügung. Ich rate Ihnen, unter den alten Eichenästen Ihr Ja-Wort zu geben und danach Ihre Feier in den Ballsaal zu verlegen, um dort Ihren ersten Tanz unter historischen Kronleuchtern zu vollführen. Darüber hinaus besteht die Option, die nahegelegene Kirche San Maerino a Maiano in Ihre Festivitäten zu integrieren, falls eine katholische Zeremonie auf Ihrer Wunschliste steht. Dort gibt es Platz für über 200 Gäste und natürlich auch für den Hochzeitsfotografen aus der Toskana. 3 Hochzeitsfotograf Toskana Villa Cora Zur Webseite Heiraten in der Toskana - Visualisieren Sie Ihre Traumhochzeit im Herzen von Florenz, umgeben von einem jahrhundertealten Park, der mit Blick auf die berühmten Boboli-Gärten zum Ja-Wort einlädt. An dieser Stelle möchte ich Ihnen das prachtvolle Villa Cora ans Herz legen. Dieses exklusive Grandhotel wartet mit bildschönen Veranstaltungsräumen auf Sie, darunter der Moresken Saal und der Spiegelsaal. Falls Sie die Vorstellung einer Hochzeitsfeier unter dem Himmel von Florenz begeistert, bietet die weitläufige Dachterrasse mit ihren 150 Quadratmetern genug Raum für Ihre Gäste. Natürlich darf hierbei der Hochzeitsfotograf aus Florenz nicht fehlen, der diese spektakuläre Kulisse in unvergesslichen Bildern festhält. 4 Hochzeitslocation Toskana Hotel Four Seasons Zur Webseite Im Herzen von Florenz, nur einen Steinwurf von den Uffizien und dem Dom entfernt, erhebt sich das prächtige Four Seasons Hotel. Diese historische Villa bietet Raum für bis zu 500 geladene Gäste und ermöglicht Ihnen eine unvergessliche Groß-Hochzeit in der Toskana. Der Ballsaal des Klosters bildet die ideale Kulisse für Ihr Ja-Wort. Als Alternative schlage ich Ihnen die Tempio-Rasenfläche vor, die von einem seit Jahrhunderten bestehenden Garten umgeben ist. Zudem verfügt das Four Seasons über eine alte Kapelle aus dem Jahr 1475. Ihr Hochzeitsfotograf aus Florenz wird Sie an diesen beeindruckenden Orten gekonnt in Szene setzen und Ihnen unvergleichliche Erinnerungsfotos schenken. 5 Hochzeitsfotograf Toskana Der Rosengarten Florenz Zur Webseite Hochzeitslocation Toskana - Gleich unterhalb des berühmten Piazzale Michelangelo erstreckt sich der Rosengarten, der einen atemberaubenden Ausblick auf die Stadt bietet. Ein japanischer Garten, zahlreiche Bronzestatuen und eine Vielfalt von 350 verschiedenen Rosenarten machen diesen Ort zu einer faszinierenden Kulisse für Ihre Hochzeit in Florenz. Von Mai bis September öffnet die Gartenterrasse ihre Tore für standesamtliche Trauungen. Selbstverständlich ist hierbei auch der Hochzeitsfotograf aus der Toskana stets mit dabei. 6 Heiraten in der Toskana Hotel St. Regis Zur Webseite Sie träumen davon, in einem historischen Palast zu heiraten? Dann ist das St. Regis in Florenz genau die richtige Adresse für Sie. Von hier aus eröffnen sich wunderschöne Panoramen auf die berühmten Sehenswürdigkeiten der Stadt und den Fluss Arno. Unabhängig davon, ob Sie eine intime Feier oder eine große Veranstaltung planen: Das Hotel bietet flexible Räumlichkeiten für jede Eventgröße. Im größten Saal finden 250 Gäste Platz, die selbstverständlich auch im Hotel untergebracht werden können. Buchen Sie nur noch den Hochzeitsfotografen aus Florenz, und die unvergessliche Feier kann beginnen.",
    articleBody: "Hochzeitslocations in der Toskana",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Heiraten in der Toskana",
    articleSection:
      "Hochzeitsfotograf Toskana - Sie besitzen die amerikanische Staatsbürgerschaft? Lassen Sie sich nicht von der Bürokratie abschrecken, denn eine Heirat in Italien ist definitiv realisierbar. Holen Sie sich vor Ihrer Abreise aus den USA ein Atto Notorio im italienischen Konsulat. Für die Trauung benötigen Sie Ihre beiden Geburtsurkunden, eventuelle frühere Heiratsurkunden sowie das decreto assoluto. Sollte es zutreffen, brauchen Sie außerdem die beglaubigte und übersetzte Sterbeurkunde des vormaligen Ehepartners. Ihr Reisepass wird an der Grenze abgestempelt. Zusätzlich müssen Sie im amerikanischen Konsulat einen Termin für Ihre Hochzeit in der Toskana vereinbaren und das sogenannte nulla osta-Formular ausfüllen. Nach der Hochzeit müssen Sie Ihre Heiratsurkunde zur Prefettura bringen, um sie für die USA legalisieren zu lassen. Und natürlich ist der Hochzeitsfotograf aus Florenz ein unverzichtbarer Teil Ihrer Vorbereitungen.",
    articleBody:
      "Heiraten in Italien <BR/> das brauchen Sie für Ihre Hochzeit in der Toskana?",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Was kostet eine Hochzeit in Italien oder Florenz / Toskana",
    image:
      "https://bild-hochzeit.de/_next/image?url=%2Fimg%2Fsonstige%2FHochzeitsfotograf-starnberg-mallorca-35-min.jpg&w=640&q=75",
    articleSection:
      "Es ist schwierig, eine allgemeingültige Antwort auf diese Frage zu geben, da die Kosten stark von der Art und Weise Ihrer Feier abhängen. Überlegen Sie vielmehr, wie viel Sie bereit sind, für Ihre Hochzeit in der Toskana und den Hochzeitsfotografen aus Florenz zu investieren, um ein unvergessliches Erlebnis für Sie und Ihre Gäste zu schaffen. Grob geschätzt, sollten Sie für eine Hochzeit in Florenz mit ungefähr 65 Gästen mindestens 15.000€ einplanen - inklusive Hochzeitsfotograf aus der Toskana.",
    articleBody:
      "Wieviel Kostet <BR/> eine Hochzeit in Florenz / Toskana / Italien",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Hochzeitsplaner in Florenz / Toskana die ich Empfehlen kann",
    articleSection: [
      "01 Floé Hochzeiten Falls Sie planen, in der Toskana zu heiraten und großen Wert auf kompetente Hochzeitsplaner sowie einen professionellen Hochzeitsfotografen aus Florenz legen, sind Sie bei Sara und ihrem Team genau richtig. Lassen Sie sich bei der Suche nach dem perfekten Veranstaltungsort, bei der Abwicklung der bürokratischen Angelegenheiten und bei sämtlichen Aspekten Ihrer Hochzeitsplanung unterstützen. Auch die Suche nach dem passenden Hochzeitsfotografen aus Florenz kann durch Floé Hochzeiten übernommen werden. Sollten Sie lediglich eine Teilleistung für Ihre Hochzeitsplanung wünschen, ist dies ebenfalls möglich. Zur Webseite 02 Your Wedding in Florence Die Gründerin und Geschäftsführerin des Unternehmens, Rita, hat ihre Wurzeln in Frankreich, Rom und New York. Zusammen mit ihrem Team hat sie sich in Florenz niedergelassen und widmet sich mit Hingabe der Organisation Ihrer Luxushochzeit samt Hochzeitsfotograf in der Toskana. Vertrauen Sie auf ein mehrsprachiges Team, welches in Kombination mit einem Hochzeitsfotografen aus der Toskana Ihr Event zu einem unvergesslichen und stressfreien Erlebnis gestaltet. Zur Webseite 03 Blooming Eventi Bei Mariane und ihrem Team treffen Sie auf echte Spezialisten für Destination-Hochzeiten und Elopements in Italien. Mit ihrem Unternehmenssitz in Florenz bietet das Team eine umfassende Hochzeitsplanung, einschließlich der Vermittlung eines professionellen Hochzeitsfotografen aus Florenz. Zur Webseite 04 Original Tuscan Wedding Hierbei handelt es sich um eine weitere Agentur für Hochzeitsplanung in Florenz - tatsächlich um die erste, die auf Englischsprachige Kunden spezialisiert ist. Das Team kooperiert mit anderen Hochzeitsdienstleistern der Region und den besten Veranstaltungsorten. Sie sind Ihnen gerne dabei behilflich, Sprachbarrieren zu überwinden und kümmern sich auch um den passenden Hochzeitsfotografen in der Toskana. Zur Webseite",
      "Heiraten in der Toskana",
    ],
    articleBody: "Die besten Hochzeitsplaner in der Toskana",
  },
];

const HochzeitsfotografFlorenz = () => {
  const t = useTranslations("pageHzFlorenz");

  return (
    <div className={styles.Unterseite}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
