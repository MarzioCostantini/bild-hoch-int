import Hero from "../components/Unterseiten/Hero";
import ArrowSection from "../components/Unterseiten/ArrowSection";
import ZweiBilder from "../components/Unterseiten/ZweiBilder";
import Location from "../components/Unterseiten/Locations";

export const metadata = {
  title: "Hochzeitsfotograf Starnberg - Moderne & Echt Hochzeitsbilder",
  description:
    "Hochzeitsfotograf Starnberg - Ich bin Marzio von Bild-Hochzeit, Hochzeitsfotograf in Starnberg. Für Authentische und Echte Reportagen ab 350,-€. → Jetzt Anfragen",
  openGraph: {
    title: "Hochzeitsfotograf Starnberg - Moderne & Echt Hochzeitsbilder",
    description:
      "Hochzeitsfotograf Starnberg - Ich bin Marzio von Bild-Hochzeit, Hochzeitsfotograf in Starnberg. Für Authentische und Echte Reportagen ab 350,-€. → Jetzt Anfragen",
    url: "https://bild-hochzeit.de/hochzeitsfotograf-starnberg",
    siteName: "Hochzeitsfotograf Starnberg - Moderne & Echt Hochzeitsbilder",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dzlk6w9fd/image/upload/v1695889862/Pages/Unterseiten/Hochzeitsfotograf-1-mu%CC%88nchen-augsburg-starnberg-1_w1hxvn.jpg",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};

const hochzeitsfotografStarnberg = () => {
  return (
    <main>
      <Hero
        title="Hochzeitsfotograf Starnberg"
        subTitle="ADVENTUROUS & DOCUMENTARY-STYLE hochzeitsfotograf in Starnberg"
        backgroundUrl="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1694438814/Pages/Leistungen/Bildverschwommen.jpg"
      />
      <ArrowSection
        title=" Ihr Hochzeitsfotograf Starnberg"
        img="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1694526556/Pages/Leistungen/packet04_beozzl.jpg"
        text1=" Hochzeitsfotograf Starnberg - Meine Passion ist es, die magischen Momente Ihrer Hochzeit in Starnberg und am malerischen Starnberger See fotografisch festzuhalten. Ich schaffe eine visuelle Erzählung, die ganz Ihre eigene ist, und die die Essenz Ihres besonderen Tages einfängt. Ob Sie eine standesamtliche, kirchliche oder freie Trauung in Starnberg planen, ich bin begeistert dabei, diese einzigartigen Augenblicke für Sie einzufangen. Mein oberstes Ziel ist es, dass Ihr Hochzeitstag in Starnberg ein unvergessliches Fest wird, das von Freude, Herzlichkeit und tiefen Emotionen durchdrungen ist."
        text2=" Als Ihr Hochzeitsfotograf in Starnberg begleite ich Sie den gesamten Tag und erstelle eine umfassende Hochzeitsreportage. Das beginnt schon beim Getting Ready von Braut und Bräutigam. Diese Momente der Vorfreude und der letzten Vorbereitungen sind oft genauso emotional und wichtig wie die Trauung selbst. Ich halte alle Facetten Ihrer Hochzeit fest: die emotionalen Momente der Zeremonie, die Freudentränen, die Begeisterung und die Umarmungen der Gäste. Vom Sektempfang bis zum ersten Tanz und der ausgelassenen Party ist alles dabei. Ich fange die kleinen und großen Augenblicke ein, die Ihren Tag so besonders machen."
      />
      <Location
        title=" Die Besten HochzeitsLocation in Starnberg"
        subTitle="Explore the Locations"
        einleitung="Starnberg und seine Umgebung bieten eine Vielzahl an traumhaften Hochzeitslocations. Ob direkt am Ufer des Starnberger Sees, in einem eleganten Schloss oder ein Berg in der nähe vom See. – die Auswahl ist groß und vielfältig. Ich berate Sie gerne bei der Auswahl der perfekten Location für Ihre Hochzeitsfeier."
        locations={[
          {
            name: "LA Villa Am Starnberger See",
            webseite: "https://www.lavilla.de/hochzeiten/",
            slogan: "Hochzeitslocation La Villa",
            text: "LA VILLA am Starnberger See ist eine idyllische Hochzeitslocation nahe München, die sich durch ihre historische Architektur und ihren zeitlosen Charme auszeichnet. Das Anwesen liegt am ruhigen Ufer des Starnberger Sees und bietet eine malerische Kulisse für Ihren besonderen Tag. Das erfahrene Wedding-Planner-Team von LA VILLA legt großen Wert darauf, jede Hochzeit so individuell und einzigartig wie die jeweilige Liebesgeschichte zu gestalten. Sie arbeiten eng mit den Brautpaaren zusammen, um eine nahtlose und stressfreie Hochzeitsfeier zu gewährleisten. Die Location verfügt über verschiedene beeindruckende Räumlichkeiten, die sich für verschiedene Hochzeitsstile eignen. Ob Sie eine intime Feier oder eine große Hochzeitsparty planen, LA VILLA bietet flexible Pakete, die auf Ihre Bedürfnisse zugeschnitten sind. Kulinarisch werden Sie mit einer exquisiten Auswahl an Menüs und Weinen verwöhnt, die Ihren Tag perfekt abrunden.",
          },
          {
            name: "Roseninsel Starnberger See",
            webseite:
              "https://www.feldafing.de/index.php/rathaus-feldafing/heiraten-in-feldafing",
            slogan: "Heiraten auf einer Insel",
            text: "Die Roseninsel im Starnberger See ist eine schöne Hochzeitslocations für die Standesamtliche trauung in Starnberg / Feldafing. Die Insel ist nur per Schiff erreichbar und bietet eine zauberhafte Atmosphäre mit einem großen Rosengarten. Die Trauungen finden in einer historischen Villa statt, die als 'Casino' bekannt ist. Die Villa selbst ist ein architektonisches Juwel mit Wandmalereien, die an den vierten pompejanischen Stil erinnern. Die Insel und die Villa bieten eine malerische Kulisse, die ideal für Hochzeitsfotos ist. Die Roseninsel in Starnberg kann ich als Hochzeitsfotograf Starnberg schöne Paarbilder machen",
          },
          {
            name: "Marina Resort Starnberg",
            webseite:
              "https://www.marina-bernried.de/de/seerestaurant/hochzeiten",
            slogan: "Hochzeitsfotograf am Starnberger See",
            text: "Das Marina Resort in Bernried am Starnberger See ist eine Hochzeitslocation, die keine Wünsche offenlässt. Mit einer Kapazität für bis zu 250 Gäste und einer Vielzahl an Räumlichkeiten bietet das Resort die perfekte Kulisse für jede Art von Hochzeitsfeier. Die Location ist umgeben von einer beeindruckenden Naturkulisse, die sich hervorragend für Hochzeitsfotos eignet. Als Hochzeitsfotograf aus Starnberg kann ich bestätigen, dass die Kulisse und die Einrichtungen des Resorts ideal sind, um unvergessliche Momente festzuhalten. Das Resort bietet auch verschiedene Trauungsorte, darunter eine prächtige Barockkirche und ein modernes Rathaus, die fußläufig erreichbar sind. Für den Empfang können Gäste die Seeterrasse oder den Seebalkon nutzen, die beide einen atemberaubenden Blick auf den Starnberger See bieten. Kulinarisch setzt das Marina Resort auf regionale Produkte und bietet ein maßgeschneidertes Speisen- und Getränke-Arrangement. Zudem wird ein umfangreiches Rahmenprogramm angeboten, das von der Tischdekoration bis hin zu einem Feuerwerk reicht.",
          },
        ]}
      />
      <ZweiBilder
        title="Ihr Hochzeitsfotograf Starnberg und Umgebung"
        text1="Ein besonderes Highlight ist für mich das Paarshooting in Starnberg. Es ist ein Moment, in dem wir der Feier und dem Trubel für einen Augenblick entfliehen. In diesem Rahmen halte ich Ihre Liebe in authentischen Bildern fest. Es ist eine wunderbare Gelegenheit, die Zweisamkeit zu genießen und gleichzeitig wertvolle Erinnerungen zu schaffen. Neben der Hochzeitsfotograf Starnberg biete ich auch Engagement-Shootings, After-Wedding-Shootings an. Ich bin flexibel und passe mein Angebot individuell an Ihre Wünsche und Bedürfnisse an."
        text2="hre Zufriedenheit steht für mich an erster Stelle. Ich möchte, dass Sie sich bei mir gut aufgehoben fühlen und dass die Fotos Ihre Erwartungen übertreffen. Deshalb lege ich großen Wert auf eine persönliche und individuelle Betreuung.
        Ich freue mich darauf, Sie kennenzulernen und als Ihr Hochzeitsfotograf in Starnberg Ihr unvergessliches Ereignis festzuhalten.
        "
        img1="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1695884369/Pages/Unterseiten/Hochzeitsfotograf-mu%CC%88nchen-augsburg-starnberg-88_rw84ry.jpg"
        img2="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1694435004/Pages/Leistungen/Hochzeitsfotograf-mu%CC%88nchen-augsburg-starnberg-1-3_u4gjmb.jpg"
        dekoText="RAW VIVID ALIVE."
      />
    </main>
  );
};

export default hochzeitsfotografStarnberg;
