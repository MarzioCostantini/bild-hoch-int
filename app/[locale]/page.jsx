import FaqHome from "./components/FaqHome";
import HochzeitsfotografStarnberg from "./components/HochzeitsfotografStarnberg";
import HomeText from "./components/HomeText";
import Momente from "./components/Momente";
import PortfolioBanner from "./components/PortfolioBanner";
import FilterWedding from "./components/WeddingFilter";
import WelcomeHero from "./components/WelcomeHero";
import AuthenticWedding from "./components/AuthenticWedding";

import styles from "./styles/Home.module.css";
import { useTranslations } from "next-intl";
import { createTranslator } from "next-intl";

// META TAGS
export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  return {
    title: t("pageHome.meta.title"),
    description: t("pageHome.meta.description"),
  };
}

const jsonLd = [
  {
    "@context": "http://schema.org",
    "@type": "Article",
    name: "Marzio Costantini",
    image:
      "https://res.cloudinary.com/dzlk6w9fd/image/upload/v1689686554/Pages/Home/Titelbild_Hochzeitsfotograf_kgk1w7.jpg",
    articleSection:
      "Ihr Hochzeitsfotograf München - Herzlich Willkommen auf meiner Website. Schön das du da bist! Auf meinem Blog erhältst du Einblicke in meine bisherige Arbeit als ihr Hochzeitsfotograf in München. Als Hochzeitsfotograf erstelle ich für dich professionelle Hochzeitsreportagen in München. Das detailliert einfangen, was euch als Paar an eurem Hochzeitstag in München ausmacht, ist mein Ziel. Ich liebe das Reisen! Daher begleite ich euch nicht nur an eurer Hochzeitslocation München, sondern auch auf der ganzen restlichen Welt. Ich stehe für euch rund um den Globus bereit. Statt kitschigen & gestellten Bildern garantiere ich dir überall auf der Welt authentische und natürliche Fotografien, die deine Erinnerungen immer frisch halten. Ich erzähle eure Geschichte so, wie sie sich zugetragen hat",
    articleBody: "Hochzeitsfotograf München",
    url: "https://bild-hochzeit.de/about",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    articleSection:
      "Fotografie war schon immer eine mächtige Möglichkeit, um einige der wertvollsten Momente unseres Lebens unvergesslich zu machen. Mir ist es wichtig diese Momente eurer Hochzeit in München so Authentisch und Echt zu erzählen wie ich es erlebt habe. Ohne Schnick Schnack. Kein Prinzessinnen kram. Offen und Ehrlich!",
    articleBody: "Hochzeitsfotograf München",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    articleSection:
      "Hochzeit in der Orangerie Schloss Weikersheim Hochzeit Schloss Weikersheim - Die beiden haben sich in der Schlosskirche in Bad Mergentheim das Ja-Wort gegeben und anschließend in der zauberhaften ... [Hochzeit Zugspitze - Berg Hochzeit] Hochzeit auf der Zugspitze - Sina und Marcel Sina und Marcel haben es gewagt und sich für ihre Traumhochzeit nichts Geringeres als die Zugspitze, den höchsten Berg Deutschlands, ausgesucht. Aber ... [Hochzeitsfotograf München Augsburg und Starnberg] Rustikale Boho Hochzeit in Gauting - Hochzeitisfotograf Gaurting Vor einigen Tagen durfte ich wunderschöne Hochzeit in Gauting begleiten.... [Hochzeitsfotograf München - Heiraten in Landgasthof Lenderstuben Balzhausen] Scheunen Hochzeit in Landgasthof lenderstuben Balzhausen Vor einigen Tagen durfte ich wunderschöne Hochzeit in der Lenderstuben in Balzhausen fotografieren.... [Hochzeitsfotograf Südtirol] Berg liebe in Südtirol - Hochzeit auf der Seiser Alm An diesem wunderschönen Morgen durfte ich die beiden bei eine After Wedding Shooting auf der Seiseralm fotografieren das licht und die beiden waren ei... [Hochzeitsfotograf Florenz] Paarshooting in der Toskana zum Sonnenuntergang diese beiden habe ich in der Wunderschönen Toskana zum Sonnenuntergang Fotografiert...",
    articleBody: "Authentische <BR/> Hochzeitsreportagen",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    articleSection:
      "Mit Leidenschaft gehe ich meinem Beruf nach, indem ich außergewöhnliche Momente für die Ewigkeit festhalte! Dabei begeistern mich einige Hochzeitsstile besonders, darunter fallen naturnahe Hochzeiten im Boho Stil, Scheunenhochzeiten und vor allem Mediterrane Hochzeiten in Italien. Toskana --Gardasee --Mallorca Du liebst Landschaften? Hochzeiten inmitten außergewöhnlichen Landschaften sind meine Favoriten. Egal ob diese in der Toskana oder aber auch an einem schönen Küstenabschnitt in Mallorca stattfinden. Ich liebe es deshalb die Hochzeit zusammen mit einer schönen Landschaft zu fotografieren. Ihr möchtet euren Hochzeitstag ganz entspannt genießen? Dann holen wir die Paarfotos im After Wedding Shooting nach.",
    articleBody:
      "Hochzeitsfotograf München: Für einzigartige und emotionale Hochzeitsbilder",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    articleSection:
      "Informiere dich auf dieser Website, wenn du auf der Suche nach einem Hochzeitsfotografen in München bist. Wirf doch einen Blick in meine Reportagen. Mein Blog enthält dort zahlreiche Bilder, die ich in der Vergangenheit in München fotografiert habe. Du möchtest mich buchen oder mehr über mein Angebot erfahren, dann schreibe mir eine Mail, um eine Frage zu stellen oder ein kostenloses und unverbindliches Angebot einzuholen. Ich freue mich auf dich!",
    articleBody: "Unvergessliche andenken an eure Hochzeit in München",
    url: "",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    articleSection:
      "Informiere dich auf dieser Website, wenn du auf der Suche nach einem Hochzeitsfotografen in München bist. Wirf doch einen Blick in meine Reportagen. Mein Blog enthält dort zahlreiche Bilder, die ich in der Vergangenheit in München fotografiert habe. Du möchtest mich buchen oder mehr über mein Angebot erfahren, dann schreibe mir eine Mail, um eine Frage zu stellen oder ein kostenloses und unverbindliches Angebot einzuholen. Ich freue mich auf dich!",
    articleBody: "Unvergessliche andenken an eure Hochzeit in München",
    url: "",
  },
  {
    "@context": "http://schema.org",
    "@type": "Article",
    articleSection:
      "© 2023MARZIO COSTANTINI - HOCHZEITSFOTOGRAF IN MÜNCHEN / STARNBERG / AUGSBURG / GARMISCH-PARTENKIRCHEN",
  },
];

export default function Home() {
  const t = useTranslations();

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <>
          <div className={styles.hero}>
            <div className={styles.wrapperInner}>
              <div className={styles.freeWeddingDates}></div>
            </div>
          </div>
          <div className={styles.welcomeHero}>
            <WelcomeHero />
          </div>
          <AuthenticWedding />
          <HochzeitsfotografStarnberg />
          <PortfolioBanner />
          <FilterWedding />
          <div className={styles.momenteHome}>
            <Momente />
          </div>
          <HomeText />
          <FaqHome />
        </>
      </div>
    </main>
  );
}
