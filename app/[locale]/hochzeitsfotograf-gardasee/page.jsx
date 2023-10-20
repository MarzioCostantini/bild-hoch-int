import Image from "next/image";
import Link from "next/link";
import Momente from "../components/Momente";
import PortfolioBanner from "../components/PortfolioBanner";
import LeistungenHero from "../components/LeistungenHero";
import styles from "../styles/Unterseite.module.css";
import { createTranslator, useTranslations } from "next-intl";
import McImage from "../components/McImage";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  return {
    title: t("pageHzGardasee.meta.title"),
    description: t("pageHzGardasee.meta.description"),
  };
}

const jsonLd = [
  {
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Alles was ihr wissen müsst für eure Hochzeit am Gardasee",
    articleSection: "Heiraten am Gardasee Hochzeit am Gardasee feiern",
    articleBody:
      "Hochzeit am Gardasee - Alles Wissenswerte rund um das Thema Hochzeitsplanung",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Heiraten am Gardasee",
    image:
      "https://bild-hochzeit.de/_next/image?url=%2Fimg%2Fsonstige%2FHochzeitsfotograf-starnberg-mallorca-15-min.jpg&w=3840&q=75",
    articleSection:
      "Als jemand, der sich auf Hochzeitsfotografie am Gardasee spezialisiert hat, kann ich mit Sicherheit sagen, dass dieser See zu den malerischsten in ganz Italien zählt und zudem angenehm nah an Deutschland liegt! Über die Jahre hinweg habe ich immer wieder die Gelegenheit gehabt, dort sowohl meinen Urlaub zu verbringen als auch als Hochzeitsfotograf zu arbeiten. Eine Hochzeit am Gardasee wird euch mit Sicherheit verzaubern und atemberaubende Bilder sind dort gewiss. Unabhängig davon, in welchem der zahlreichen idyllischen Orte rund um den Gardasee ihr eure Hochzeitsfeierlichkeiten abhalten möchtet, der Gardasee bietet eine faszinierende Atmosphäre und verleiht eurer Feier ein passendes und unvergessliches Ambiente. Seit einigen Jahren habe ich das Privileg, mehrere Paare pro Saison auf ihrem Weg zum Altar zu begleiten. Eine Hochzeit am Gardasee zu planen und den perfekten Ort dafür zu finden, ist sicherlich keine Herausforderung, erfordert jedoch eine sorgfältige Planung. Deshalb biete ich euch neben meiner Haupttätigkeit als Hochzeitsfotograf am Gardasee auch an, wichtige Kontakte für die Hochzeitsplanung bereitzustellen und gemeinsam mit euch die ideale Hochzeitslocation am Gardasee ausfindig zu machen",
    articleBody: "Warum eine Hochzeit am Gardasee so besonders ist",
    url: "https://bild-hochzeit.de/kontakt",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Heiraten am Gardasee",
    articleSection:
      "Ich bin als Hochzeitsfotograf Gardasee in ganz Europa unterwegs, immer auf der Suche nach den perfekten Schauplätzen für atemberaubende Aufnahmen. Doch ein Ort hat es mir besonders angetan: der Gardasee. Ich hatte das Glück, fast alle malerischen Ortschaften rund um den Gardasee zu bereisen und zu fotografieren. Mit meiner Unterstützung und meinem Wissen um die schönsten Fotolocations wird eure Hochzeit am Gardasee sicherlich zu einem unvergesslichen Erlebnis. Seit vielen Jahren zieht es mich sowohl privat als auch im Auftrag meiner Brautpaare immer wieder an den Gardasee. Dort freue ich mich jedes Mal aufs Neue, als Hochzeitsfotograf am Gardasee beeindruckende Bilder vor atemberaubenden Kulissen zu kreieren und euch eine wertvolle Erinnerung an diesen besonderen Tag mit auf euren gemeinsamen Lebensweg zu geben. Bei euren Planungen solltet ihr bedenken, dass eine Hochzeit am Gardasee eine umfangreiche Organisation erfordert. Ich habe bereits mit vielen Dienstleistern in den verschiedenen Regionen rund um den Gardasee zusammengearbeitet und kann euch daher mit meinen Kontakten und Erfahrungen zur Seite stehen. Es gibt zahlreiche wunderschöne Hochzeitslocations in verschiedenen Preiskategorien, die ich euch empfehlen kann. Auch bei der Auswahl des Hochzeitsmenüs stehe ich euch gerne mit Rat und Tat zur Seite, damit eurer Traumhochzeit am Gardasee nichts im Wege steht.",
    articleBody:
      "Emotionale und authentisch Bilder von Eurer Hochzeit am Gardasee",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Wunderschöne Hochzeitslocation am Gardasee",
    image:
      "https://bild-hochzeit.de/_next/image?url=%2Fimg%2Fflorenz%2FHochzeitsfotograf-toskana-florenz%20(6%20von%2011)-min.jpg&w=828&q=75",
    articleSection:
      "Hochzeitsfotograf am Gardasee - Abgestimmt auf den Ort eurer Hochzeitsfeier fertige ich eine gefühlvolle und authentische Dokumentation dieses besonderen Tages in eurem Leben an. Die Bilder werden euch immer wieder in die Lage versetzen, euren Hochzeitstag mit euren Familien und Freunden erneut zu durchleben. Letztendlich sollen sie auch nach vielen Jahren noch für Gänsehautmomente sorgen. Als Hochzeitsfotograf am Gardasee werde ich mich diskret im Hintergrund halten und professionelle Aufnahmen machen. Eine Hochzeit am Gardasee wird nicht nur ein Mini-Urlaub für euch sein, sondern auch spektakuläre und einzigartige Bilder von eurer Hochzeit garantieren. Meine Arbeit als Hochzeitsfotograf am Gardasee sehe ich erst dann als vollendet an, wenn ihr mir vertraut und euch bei mir wohl fühlt. Ich freue mich auf euch und eure kreativen Ideen für euren großen Tag.",
    articleBody:
      "Die 10 besten Hochzeitslocations <BR/> am Gardasee für Euer Hochzeit",
    url: "https://bild-hochzeit.de/kontakt",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Was kostet eine Hochzeit am Gardasee",
    articleSection:
      "1 Hochzeitslocation am Gardasee Antica Dimora del Turco Zur Webseite Gelegen zwischen dem Gardasee und Verona, präsentiert das historische Antica Dimora del Turco den idealen Ort für Hochzeitsfeiern. Die urige Location Antica Dimora del Turco ist eingebettet in Weinberge und die Hügellandschaft des Gardasees. Zusätzlich verfügt der Ort über mehrere Übernachtungsmöglichkeiten und einen Swimmingpool in direkter Nähe 2 Heiraten am Gardasee La finestra sul Fiume Zur Webseite La Finestra Sul Fiume, zu Deutsch das Fenster zum Fluss, befindet sich am Ufer des Flusses in Valeggio sul Mincio, nur wenige Kilometer von Peschiera del Garda, Verona und den Seen von Mantua entfernt. Hier formen die Hügel von Valeggiano, eine der schönsten venezianischen Landschaften, geprägt von Weinbergen und Gärten, einen Hang zum Fluss, der in einer Wiese endet, die ins Wasser mündet. Ein perfekter Ort für eure Hochzeit am Gardasee. 3 Location Gardasee Tenuta la Presa Zur Webseite Das historische Landhaus aus dem 15. Jahrhundert bietet ein gemütliches und gut erreichbares Ambiente, das sich ideal für eure Hochzeit eignet. Der große Saal mit seinem aus Stein und Ziegel gefertigten Gewölbe vereint die Wärme des ländlichen Ambientes mit der Eleganz und Exklusivität eines echten Empfangssaals. Die Scheune mit der alten Tenne schafft eine exquisite Atmosphäre, die euch als Brautpaar durch euren besonderen Tag begleitet. Der weitläufige Park mit seinen Sträuchern und Bäumen, von der Sonne geküsst und durch die vom Monte Baldo wehende Brise erfrischt, bietet in der warmen Jahreszeit den idealen Rahmen für eure Hochzeit. Unvergessliche Hochzeiten, bis ins kleinste Detail geplant, werden einzigartig in Verbindung mit den vom Landgut produzierten Weinen. 4 Hochzeitslocation Gardasee Azienda Agricola Pratello Zur Webseite Inmitten der grünen Weinberge auf den Moränenhügeln von Padenghe befindet sich das Landgut Agriturismo Pratello. Zum Anwesen gehört ein weitläufiger Garten mit einem Bioteich und einer prächtigen Allee aus Zypressen. Viele der angebotenen Speisen, darunter Wurst, Pasta und Marmelade, stammen aus eigener Produktion. Auch die hervorragenden Weine und Öle werden hier hergestellt. Für Hochzeitsgäste, die mit dem Auto anreisen, stehen ausreichend Parkplätze zur Verfügung. Etwa 35 Gäste können direkt im Agriturismo Pratello übernachten. Die Lage: Der historische Bauernhof liegt in Padenghe sul Garda, einer kleinen, ruhigen Stadt an der Westseite des Gardasees in der Lombardei. 5 Hochzeitslocation im Gardasee Villa Arcadio Zur Webseite Nur zwei Kilometer von der historischen Altstadt von Salò am westlichen Ufer des Gardasees entfernt, thront die Villa Arcadio auf einem Hügel, umgeben von einer Landschaft aus Olivenbäumen, Obstgärten, Wäldern und Blumen. Das 4-Sterne-Hotel ist in einem ehemaligen Kloster untergebracht und bietet euch und euren Hochzeitsgästen einen angenehmen Aufenthalt. Die insgesamt 18 Zimmer und Suiten sind stilvoll eingerichtet und verbinden geschickt historische Architektur mit modernem Stil. Dies bietet den perfekten Rahmen für das Getting Ready an eurem Hochzeitstag. Im hoteleigenen Restaurant, das über wunderschöne Panoramaterrassen verfügt, werden köstliche Gerichte von der lokalen bis zur internationalen Küche serviert - vorzugsweise mit Zutaten aus eigenem Anbau. Neben einem Swimmingpool bietet die Hochzeitslocation am Gardasee auch verschiedene Aktivitäten zur Entspannung und Erholung von Körper und Geist an. 6 Hochzeitsfotograf am Gardasee Corte Guastalla Zur Webseite Das von Grund auf renovierte, alte Landgut ist in eine atemberaubende Landschaft eingebettet und von einem 13 Hektar großen, jahrhundertealten Park umgeben, der von alten Steinmauern eingerahmt wird. Die im Country-Chic-Stil gestalteten Zimmer bieten den perfekten Rahmen für eure Hochzeit. Das Corte Guastalla befindet sich in einer bevorzugten Lage zwischen dem Gardasee und der Kunststadt Verona. Die exklusive Location garantiert absolute Privatsphäre und einen Empfang der Extraklasse in einem informellen, aber eleganten Ambiente. Ein professionelles Team, das auf jedes kleinste Detail achtet, begleitet euch während der Planung, sodass jeder Wunsch erfüllt werden kann und dieser Tag für euch als Brautpaar und eure Gäste wahrlich unvergesslich und glücklich sein wird. Ein Frühstück mit frischen, lokalen Zutaten wie beispielsweise roten Früchten ist nur einer der vielen Vorteile für alle, die das Corte Guastalla als Location für ihre Veranstaltung wählen. 7 Heiraten am Gardasee Villa san Vigillio Zur Webseite Punta San Vigilio befindet sich an der Spitze des Monte Baldo und erstreckt sich weit in den See hinein, genau dort, wo der See am weitesten und offensten ist: Von hier aus hat man einen Überblick über fast den gesamten Gardasee. Eine elegante und exklusive Hochzeitslocation am Gardasee: Die Villa San Vigilio wird euch als Brautpaar mit dem Charme der Renaissance-Villa, den bezaubernden Gärten und der herrlichen Naturkulisse des Gardasees, die sie umgibt, willkommen heißen und eurem schönsten Tag noch mehr Zauber verleihen. Es ist möglich, eine freie Trauung in der prächtigen Renaissance-Villa oder im zauberhaften Garten mit Zitronenbäumen, Oleander und Zypressen zu feiern. 8 Hochzeitslocation Gardasee Villa Cariola Zur Webseite Mit ihren bezaubernden Innenräumen im Stil des 18. Jahrhunderts, ihren Panoramaterrassen, den weiten Parks, die sie umgeben, und dem atemberaubenden Blick über das gesamte Valpolicella, bietet die Villa Cariola einen raffinierten Charme, der sie zu einem exklusiven Ort für märchenhafte Hochzeiten macht. Wir begleiten euch bei der Organisation jedes Details eures großen Tages: von der Zeremonie über den Empfang bis hin zur Beratung von passenden Dienstleistern wie Floristen, Friseuren und Bands. Unsere engagierten Hochzeitsplaner helfen euch dabei, eure Wünsche in die Realität umzusetzen. Die Villa Cariola steht sowohl für kleinere, private Veranstaltungen als auch für große und exklusive Empfänge mit über 250 Personen zur Verfügung. 9 Hochzeitslocation am Gardasee Azienda della Pieve Zur Webseite Dieser reizvolle Agriturismo mit Villa und kleiner hauseigener Kirche befindet sich nur wenige Minuten von Bardolino am Gardasee entfernt. Die Geschichte dieses Gutshofes reicht bis ins 15. Jahrhundert zurück. Das traditionelle, authentische Anwesen ist wunderbar für eine Hochzeit inmitten der Natur gelegen. Zudem lassen die gastfreundlichen Besitzer keine Wünsche offen. 10 Hochzeitsfotograf am Gardasee Isola del Garda Zur Webseite Die Insel birgt unzählige Überraschungen und Schätze. Entdeckt diejenigen, die euch am meisten faszinieren, dank der Leidenschaft und Erfahrung der Eigentümer, die euch bei der Gestaltung eures einzigartigen Events unterstützen, um eure Gäste zu überraschen und diesen besonderen Tag unvergleichlich zu machen. Genießt zusammen mit euren Gästen eine atemberaubende Kulisse für die Hochzeitszeremonie mit Blick auf den See, umgeben von Terrassen und exotischen Hängegärten unter der majestätischen Villa, dem imposanten Turm und den alten Mauern des Klosters. Eine exklusive Umgebung für euren Empfang wäre die Loggia mit ihren Fresken aus dem 18. Jahrhundert, der majestätische Naturpark und die formalen Gärten mit den süßen Düften der Rosen und Hortensien. Die Eleganz eines erstklassigen Catering-Services wird durch das spektakuläre Dekor, den Blick auf die Labyrinthgärten, die kunstvollen Details der Villa und die Reflexionen des Sonnenuntergangs auf dem See verstärkt. Die abgeschiedenen Ufer des Sees sind eine leere Leinwand für eure Fantasie und ein perfekter Hintergrund für außergewöhnliche Unterhaltung wie ein schwebendes Feuerwerk, Theaterszenen und vieles mehr.",
    articleBody: "Wieviel Kostet <BR/> eine Hochzeit Gardasee?",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Hochzeitsplaner am Gardasee die ich Empfehlen kann",
    image:
      "https://bild-hochzeit.de/_next/image?url=%2Fimg%2Fflorenz%2FHochzeitsfotograf-toskana-florenz%20(8%20von%2011)-min.jpg&w=750&q=75",
    articleSection:
      "Es ist nicht einfach, eine allgemeingültige Antwort auf die Frage zu geben, was eine Hochzeit am Gardasee kostet. Letztlich hängt der Kostenfaktor von der Gestaltung eurer Zeremonie ab. Stellt euch stattdessen die Frage, wie viel ihr bereit seid, für das Heiraten am Gardasee und den Hochzeitsfotografen am Gardasee auszugeben, um ein unvergessliches Ereignis für euch und eure Gäste zu gestalten. Im Groben könnt ihr mit mindestens 17.000€ für eine Hochzeit am Gardasee mit etwa 65 Personen rechnen.",
    articleBody: "Die besten Hochzeitsplaner am Gardasee",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Hochzeitsfotograf Gardasee",
    articleSection:
      "01 Synergy Wedding Synergy Weddings Hochzeitsplaner - Claudia Schuchter Lamboglia ist eure persönliche Hochzeitsplanerin, wenn es um das Thema Heiraten am Gardasee geht. Ursprünglich aus Innsbruck stammend, hat Claudia mittlerweile ihr Zuhause in Italien gefunden. Als vereidigte Dolmetscherin für die italienische Sprache ist sie in der Lage, eure standesamtliche Hochzeitszeremonie ins Deutsche zu übersetzen. Francesco Lamboglia, ein gebürtiger Italiener, ist euer perfekter Ansprechpartner für unsere Locations in Italien. Zur Webseite 02 Beautiful Italian Weddings Hochzeitsplaner Beautiful Italian Weddings - Jede Hochzeit ist ein einzigartiges Ereignis. Bei Beautiful Italian Weddings behandeln sie jede Hochzeit als solches: ein ganz besonderer Tag, der nur euch gehört. Beautiful Italian Weddings liebt Hochzeiten und ist bereit, euch dabei zu unterstützen, der Welt zu zeigen, wie sehr ihr euch liebt; und wer könnte das besser tun als ein Unternehmen aus dem Land der Liebe? Ihr italienischer Hintergrund lässt sie vor Fantasie und kreativen Ideen sprudeln.",
    articleBody: "Heiraten am Gardasee",
    url: "https://bild-hochzeit.de/kontakt",
  },
];

const HochzeitsfotografGardasee = () => {
  const t = useTranslations("pageHzGardasee");

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
              <McImage
                src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697807533/Components/Hochzeitsfotograf-mu%CC%88nchen-augsburg-starnberg-17-min_ictg8a.jpg"
                height={400}
                width={300}
                alt="Hochzeitsfotograf Gardasee - Starnberg Marzio Costantini"
              />
            </div>
            <div>
              <McImage
                src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697807541/Components/hochzeitsfotograf-tutzing-18-min_kksnxj.jpg"
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
              <McImage
                src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697807584/Components/Hochzeitsfotograf-starnberg-mallorca-15-min_ryjylb.jpg"
                height={500}
                width={900}
                // sizes="100vw"
                // style={{ width: "100%", height: "auto" }}
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
              <McImage
                src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697807010/Components/Hochzeitsfotograf-toskana-florenz_6_von_11_-min_eypin1.jpg"
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
              <McImage
                src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697807678/Components/Hochzeitsfotograf-toskana-florenz_10_von_11_-min_soiria.jpg"
                height={300}
                width={450}
                alt="Hochzeitsfotograf Mallorca - Hochzeit Mallorca"
              />
            </div>
            <div>
              <McImage
                src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697807681/Components/Hochzeitsfotograf-toskana-florenz_8_von_11_-min_b3y1eh.jpg"
                height={500}
                width={350}
                alt="Hochzeitsfotograf Mallorca - Hochzeit Mallorca"
              />
            </div>
            <div>
              <McImage
                src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697807688/Components/hochzeitslocation-toskana-1-min_by4wbj.jpg"
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
