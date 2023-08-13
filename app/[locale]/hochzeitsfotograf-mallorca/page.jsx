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

const jsonLd = [
  {
    "@context": "http://schema.org",
    "@type": "Article",
    articleSection: ["Hochzeit", "Heiraten auf Mallorca"],
    articleBody: "Hochzeit Mallorca",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Heiraten auf Mallorca",
    articleSection:
      "Heiraten auf der bezaubernden Insel Mallorca - Als Hochzeitsfotograf auf Mallorca kann ich mit Sicherheit sagen, dass es die prächtigste aller Inseln ist. Schon vor vielen Jahren habe ich mich in den unwiderstehlichen Charme der Insel verliebt und bin seither als Hochzeitsfotograf auf Mallorca tätig. Wenn ihr euch nichts Schöneres vorstellen könnt, als auf dieser Insel euer Eheversprechen zu geben, ist dieser Gedanke absolut nachvollziehbar. Unabhängig von der Hochzeitslocation auf Mallorca bietet die Insel eine beeindruckende Atmosphäre und verleiht eurer Feier ein passendes und ebenso unvergessliches Ambiente. Seit einigen Jahren begleite ich mehrmals pro Saison Paare auf ihrem Weg zum Altar. Eine Hochzeit auf Mallorca ist keineswegs kompliziert, sollte aber gut geplant sein. Aus diesem Grund biete ich euch neben meiner Haupttätigkeit als Hochzeitsfotograf auf Mallorca an, wichtige Kontakte für die Hochzeitsplanung zu vermitteln und darüber hinaus die passende Hochzeitslocation auf Mallorca gemeinsam mit euch zu finden.",
    articleBody:
      "Alles Wissenswerte rund um das Thema Hochzeitsplanung für die Hochzeit Mallorca",
    url: "https://bild-hochzeit.de/kontakt",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    articleSection:
      "Für meine stets verliebten Kunden bin ich in ganz Europa unterwegs, um die perfekten Kulissen für beeindruckende Fotos zu finden. Doch meine Arbeit als Hochzeitsfotograf auf Mallorca ist mir besonders ans Herz gewachsen. Mit Stolz kann ich sagen, dass ich diese traumhafte Insel wie meine Westentasche kenne. Mit meiner Unterstützung und meinem Gespür für die perfekten Momente wird eure Hochzeit auf Mallorca zu einem unvergesslichen Erlebnis. Sowohl privat als auch beruflich zieht es mich seit vielen Jahren immer wieder auf die Insel. Dort angekommen, freue ich mich jedes Mal aufs Neue, als Hochzeitsfotograf auf Mallorca die schönsten Momente festzuhalten und euch eine bleibende Erinnerung an diesen besonderen Tag mit auf den gemeinsamen Lebensweg zu geben. Heiraten Mallorca - Generell solltet ihr bei euren Planungen bedenken, dass eine Hochzeit auf Mallorca in Bezug auf die Organisation eine anspruchsvolle Aufgabe darstellen kann. Ich habe in der Vergangenheit bereits mit vielen Dienstleistern auf der Insel zusammengearbeitet, daher kann ich euch mit meinen Kontakten und Erfahrungen zur Seite stehen. Von der Auswahl des Hochzeitsmenüs bis hin zur Suche nach der perfekten Hochzeitslocation auf Mallorca sollten wir in der Lage sein, einen detaillierten Plan für eure Traumhochzeit zu erstellen.",
    articleBody: "Warum eine Hochzeit auf Mallorca so schön ist",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Heiraten Mallorca",
    articleSection:
      "In Übereinstimmung mit eurer ausgewählten Hochzeitslocation auf Mallorca erstelle ich eine emotionale und authentische Bildreportage von diesem besonderen Tag in eurem Leben. Mein Ziel ist es, lebendige und dynamische Bilder von eurer Hochzeit, euch selbst sowie euren Freunden und Familienmitgliedern zu schaffen. Diese Bilder sollen auch nach vielen Jahren noch Gänsehautmomente hervorrufen. Als Hochzeitsfotograf auf Mallorca ist es meine Hauptaufgabe, mich diskret im Hintergrund zu bewegen und dennoch professionelle Aufnahmen zu machen. Eine Hochzeit auf Mallorca sollte für euch nicht nur vergleichbar mit einem Inselurlaub sein, sondern auch euren einzigartigen Moment in einer unvergesslichen Atmosphäre festhalten. Ich sehe meine Arbeit als Hochzeitsfotograf auf Mallorca erst dann als erfolgreich an, wenn ihr mir vertraut und euch bei mir wohl fühlt. Ich freue mich auf euch und eure kreativen Ideen für den großen Tag.",
    articleBody:
      "Hochzeit auf Mallorca: Gefühlvolle und authentische Aufnahmen von eurem besonderen Tag auf Mallorca",
    url: "https://bild-hochzeit.de/kontakt",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Heiraten auf Mallorca - Die 5 besten Hochzeitslocations auf Mallorca",
    articleSection:
      "Hochzeitslocation auf Mallorca Finca Santa Lucia Zur Webseite Wenn ihr schon immer davon überzeugt wart, dass eine Hochzeit auf Mallorca für euch das perfekte Erlebnis darstellt, dann seid ihr hier genau richtig. Die Finca Santa Lucia unterstreicht mit ihrem beeindruckenden Charme die Schönheit der gesamten Insel. Das Ambiente des Anwesens wird euch vom ersten Moment an verzaubern und bietet euch hinsichtlich der Gestaltung der Location jede Menge kreativen Spielraum. Als Hochzeitsfotograf auf Mallorca schätze ich die dortigen Lichtverhältnisse sowie die durchweg entspannte Atmosphäre der Umgebung. Hier könnt ihr euren besonderen Tag mit Stil und einem ebenso hohen Erholungsfaktor verbringen. Die Finca Santa Lucia ist ein zauberhaftes Stück spanischer Wohn- und Lebenskultur. 2 Heiraten auf Mallorca Finca Alaiar Zur Webseite Die Finca Alaiar ist ein Landgut im Herzen der Insel, nahe der Ortschaft Sencelles. Diese Hochzeitslocation auf Mallorca wird euch durch ihre eingefassten Landstraßen und schönen Trockensteinmauern, kombiniert mit Mandelhainen in der Umgebung, vom ersten Moment an verzaubern. Neben diesen ohnehin unvergesslichen Eindrücken profitiere ich als Hochzeitsfotograf auf Mallorca von der Tramuntana-Bergkette in der Ferne und kann euch wunderschöne Bilder versprechen. Die Ursprünge des Anwesens liegen in der maurischen Siedlung Alayar. Als die Christen unter der Führung von König Jakob I. das Gebiet zurückeroberten, ging das Gebiet in den Besitz des Grafen von Bearn, Gastó de Montcada, über. 3 Hochzeitsfotograf Mallorca Cap Rocat Zur Webseite Wenn ihr bei eurer Hochzeitslocation auf Mallorca großen Wert auf die kulinarische Verpflegung eurer Gäste legt, ist Cap Rocat die erste Adresse für euch. Die einstige Festung ist heute ein beliebtes Luxushotel und bietet durch seinen Schlosscharakter ein mittelalterliches und dennoch elegantes Ambiente. Als Hochzeitsfotograf auf Mallorca kenne ich kaum einen besseren Ort, an dem ihr eine atemberaubende Aussicht weit in das Meer und eine ebenso romantische Szenerie genießen dürft. Das Hotel beweist eine außerordentlich große Liebe zum Detail und wird euch in seinen Bann ziehen. Für besondere Momente ist dieses Luxushotel eine tolle Gelegenheit, den wichtigsten Tag in eurem gemeinsamen Leben mit dem gewissen Etwas unvergesslich hervorzuheben. 4 Hochzeitslocation Mallorca Carrossa Spa Villa Hotel Zur Webseite Für größere Hochzeitsgesellschaften darf ich euch das Carrossa Spa Villa Hotel nahelegen. Für das Heiraten auf Mallorca gilt diese Örtlichkeit als eine der besten, die es auf der Insel zu finden gibt. Die hier erbauten Villen verfügen über jede Menge Zimmer und perfekt gepflegte Gärten. In der Ferne könnt ihr darüber hinaus den Blick auf die Bergkette Serra de Llevant genießen und euch auf tolle Hochzeitsbilder vor dieser Kulisse freuen. Für viel Entspannung sorgen der Pool sowie das hoteleigene Spa. Die gesamte Anlage ist auf dem neuesten Stand der Technik. Ein erfahrenes Veranstaltungsteam überlässt bei eurer Hochzeit mit Sicherheit nichts dem Zufall. 5 Hochzeitslocation auf Mallorca Son Togores Zur Webseite Son Togores ist ein traumhafter Ort für eure bevorstehende Hochzeitsfeier. Die Location bezaubert durch das unverkennbare Flair der Insel und liegt trotzdem in angenehmer Nähe zum pulsierenden Zentrum von Palma. Ihr und eure Gäste könnt den Tag mit einem Stadtbummel in Palma abrunden und die einzigartige Atmosphäre genießen. Die Villa Son Togores ist ohne Zweifel einer der begehrtesten Orte für Hochzeiten auf Mallorca.",
    articleBody: "Hochzeitslocations auf Mallorca  <BR/> für Euer Fest",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Was kostet eine Hochzeit auf Mallorca?",
    articleSection:
      "Kosten Mallorca Hochzeit - Eine pauschale Antwort auf diese Frage ist nicht möglich, da die Kosten für eine Hochzeit stark von der Art und Weise der Zeremonie abhängen. Überlegen Sie stattdessen, wie viel Sie bereit sind, für Ihre Hochzeit auf Mallorca und für den Hochzeitsfotografen auf Mallorca auszugeben, um ein unvergessliches Event für Sie und Ihre Gäste zu gestalten. Im Allgemeinen sollten Sie für eine Hochzeit auf Mallorca mit etwa 65 Gästen mindestens 15.000€ einplanen.",
    articleBody: "Wieviel Kostet eine Hochzeit auf Mallorca?",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Hochzeitsplaner auf Mallorca die ich Empfehlen kann",
    articleSection:
      "01 Mallorca Love Story Dana und Karim sind das Duo, das Love Story Mallorca ins Leben gerufen hat. Sie sind nicht nur erfolgreiche Hochzeitsplaner auf Mallorca, sondern organisieren auch traumhafte Hochzeiten in Italien, Ibiza und auf den Malediven. Zur Webseite 02 Love Birds Mallorca Falls ihr auf der Suche nach Hochzeitsplanern auf Mallorca seid, möchte ich euch Sandra und Vanessa wärmstens empfehlen. Sie bilden ein unschlagbares Team und werden dafür sorgen, dass eure Hochzeit auf Mallorca zu einem unvergesslichen Erlebnis wird. Zur Webseite 03 Mallorca Boutique Weddings Katja und ihr Team, die sich auf Destination-Hochzeiten und Elopements auf Mallorca spezialisiert haben, heißen Sie herzlich willkommen. Mit ihrem Sitz direkt auf Mallorca bieten sie eine umfangreiche Hochzeitsplanung an, einschließlich eines Hochzeitsfotografen auf Mallorca.",
    articleBody: "Die besten Hochzeitsplaner auf Mallorca",
    url: "https://mallorca-boutique-weddings.com/",
  },
];

const HochzeitsfotografMallorca = () => {
  const t = useTranslations("pageHzMallorca");

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
