import { createTranslator } from "next-intl";
import FaqAll from "../components/FaqAll";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  return {
    title: t("pageFaq.meta.title"),
    description: t("pageFaq.meta.description"),
  };
}

const jsonLd = [
  {
    "@context": "http://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: "Antworten und Fragen Einge fragen, die ihr vielleicht schonmal vorab habt.",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mich als Hochzeitsfotograf München kann man mich selbstverständlich rund um München und Starnberg buchen. Aber nicht nur hier im Deutschsprachigen Raum bin ich für euch als Hochzeitsfotograf tätig. Für meine Paar bin ich europa- und sogar Weltweit tätig. Wichtig ist mir das ich die Hochzeiten meiner Paar so fotografiere wie sie ist. Authentisch und Echte Hochzeitsreportagen europa und Weltweit!",
      },
      text: "Hochzeitsfotograf Müchen - Wo kann man dich überall buchen?",
    },
  },
  {
    "@context": "http://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mir als Hochzeitisfotograf ist es wie bereits erwähnt besonders wichtig so die Hochzeit zu fotografieren wie sie tatsächlich passiert ist. Authentisch und Echt! Denn nur so kann ich euer Hochzeit echt wiedergeben, komplett ohne gestellt Bilder. Das ist so garnicht mein Ding! Bei mir werdet ihr nicht hinter einen baum vorbei schauen müssen… :-). Aus diesem Grund werde ich mich auf euer Hochzeit möglichst im Hintergrund halten um die großen und die kleinen besonderen Momente festzuhalten.",
      },
      text: "Wie arbeitest du auf unsere Hochzeit?",
    },
  },
  {
    "@context": "http://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Auch wenn ich in Deutschland wohne, fotografiere ich einige male im Jahr Destination Weddings. Vor allem Hochzeiten in Italien (Gardasee, Comer See , Toskana & Dolomiten) aber auch auf Mallorca bin ich des öffteren. Kein weg ist mir für eine Interessante Hochzeit zu weit, gerne Reise ich auch bis an ende der Welt für euch! Die Kosten für eine Destination Weddings sind die selben wie bei einer Innlandsochzeit. Die Reisezeit (Flugzeit / Anfahrt etc.) berechne ich nicht als Arbeitszeit. Lediglich die Reisekosten kommen hinzu. Diese sind in der Regel sehr überschaubar!",
      },
      text: "Wie läuft eine Destination Wedding ab?",
    },
  },
  {
    "@context": "http://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: "Corona Regelung bei Hochzeiten",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solltet Ihr nicht heiraten können da es COVID-19 nicht zulässt, zahlt Ihr lediglich 20% eures gebuchten Betrags. Die 20% bekommt Ihr anschließend beim folge Termin wieder gutgeschrieben, vorausgesetzt euer folge Termin ist bei mir noch nicht vergeben. So bezahlt ihr quasi nichts für die Stornierung. Sollte ich schon am folge Termin gebucht sein, bekommt Ihr eine Paar- Afterwedding Shooting von mir.",
      },
      text: "Was passiert wenn wir Wegen COVID-19 nicht heiraten dürfen?",
    },
  },
  {
    "@context": "http://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: "Hochzeitsfotograf Starnberg",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das kommt drauf an wo Ihr das Paarshooting machen wollt. Reine Shootingzeit circa 1 Stunde + Fahrzeit. WICHTIG: Bitte hierfür möglichst den Sonnenuntergang wählen",
      },
      text: "Wielange sollten wir für das paarshooting einplanen?",
    },
  },
  {
    "@context": "http://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das kommt draufIn der Regel fange ich dann an wenn die Visagistin zu 60% fertig ist. Sprich den letzten schliff fotografiere ich. Man sollte noch genug zeit ein planen damit ich noch zeit habe das Kleid, Blumen die Papeterie etc. fotografieren kann. an wo Ihr das Paarshooting machen wollt. Reine Shootingzeit circa 1 Stunde + Fahrzeit. WICHTIG: Bitte hierfür möglichst den Sonnenuntergang wählen!",
      },
      text: "Wieviel Zeit sollten wir für das Getting Ready einplanen?",
    },
  },
  {
    "@context": "http://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      acceptedAnswer: {
        "@type": "Answer",
        text: "zum Glück ist es seit 2014 noch nicht ein mal passiert! Sollte es aber doch soweit kommen helfe ich euch natürlich einen ersatz zu finden. Durch meine langjährige Erfahrung kenne ich inzwischen viele Fotografen/in und bin gut mit ihnen vernetzt so das es kein Problem sein sollte einen würdigen ersatz für mich zu finden. Sollte schon eine Anzahlung getätigt worden sein, wird diese wieder von mit zurück überwiesen.",
      },
      text: "Was Passiert wenn der Hochzeitsfotograf krank wird?",
    },
  },
  {
    "@context": "http://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: "Regen am Hochzeitstag",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sollte es regnen ist es kein Problem. Auch im Regen kann mans super schöne Bilder machen ohne komplett nass zu werden. Ihr könnt euch hierfür den Notfall einen durchsichtigen Regenschirm besorgen.",
      },
      text: "Was ist wenn es an unserer Hochzeit Regnet?",
    },
  },
];

const Faq = () => {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqAll />
    </main>
  );
};

export default Faq;
