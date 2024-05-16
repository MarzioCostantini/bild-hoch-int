import HeroTwoImg from "../components/Unterseiten/HeroTwoImg";
import ThreeText from "../components/Unterseiten/ThreeText";
import ThreeImg from "../components/Unterseiten/ThreeImg";
import OneText from "../components/Unterseiten/OneText";
import LinksRechts from "../components/Unterseiten/LinksRechts";
import List from "../components/Unterseiten/List";
import Inhaltsverzeichnis from "../components/Unterseiten/Inhaltsverzeichnis";

// META
export const metadata = {
  title: "Heiraten auf der Zugspitze | Deutschlands höchster Hochzeitsort",
  description:
    "Plant ihr, auf der Zugspitze zu heiraten? Unser umfassender Leitfaden bietet alles, was ihr über eure Hochzeiten auf der Zugspitze wissen müsst. Termine, Anreise und mehr...",
  openGraph: {
    title: "Heiraten auf der Zugspitze | Deutschlands höchster Hochzeitsort",
    description:
      "Plant ihr, auf der Zugspitze zu heiraten? Unser umfassender Leitfaden bietet alles, was ihr über eure Hochzeiten auf der Zugspitze wissen müsst. Termine, Anreise und mehr...",
    url: "https://bild-hochzeit.de/heiraten-auf-der-zugspitze",
    siteName: "Heiraten auf der Zugspitze | Deutschlands höchster Hochzeitsort",
    images: [
      {
        url: "https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697717555/Pages/heiraten-auf-der-zugspitze/Heiraten-auf-der-zugspitze-65_juwmzb.jpggit ",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697717550/Pages/heiraten-auf-der-zugspitze/Heiraten-auf-der-zugspitze-45_q01okl.jpg",
        width: 1800,
        height: 1600,
        alt: "Heiraten auf der Zugspitze",
      },
    ],
    locale: "de",
    type: "website",
  },
};

const Zugspitze = () => {
  const inhaltsverzeichnis = [
    {
      titel: "Anreise zur Zugspitze",
      id: "anreise",
    },
    {
      titel: " Mit der Gondel oder mit der Zahnradbahn auf die Zugspitze",
      id: "gondelVsBahn",
    },
    {
      titel: "Anmeldung zum Standesamt auf der Zugspitze",
      id: "anmeldung",
    },
    {
      titel: "Paarshooting / Hochzeitsbilder auf der Zugspitze",
      id: "paarZugspitze",
    },
    {
      titel: "Paarshooting / Hochzeitsbilder am Eibsee ",
      id: "paarEibsee",
    },
    {
      titel: "Kosten fürs Heiraten auf der Zugspitze",
      id: "kosten",
    },
    {
      titel: "Kontaktdaten für eure standesamtliche Hochzeit auf der Zugspitze",
      id: "kontaktdaten",
    },
    {
      titel: "Euer Hochzeitsfotograf in Garmisch-Partenkirchen und Zugspitze",
      id: "hochzeitsfotograf",
    },
    {
      titel: "FAQ - Heiraten auf der Zugspitze",
      id: "faq",
    },
  ];

  return (
    <main>
      <HeroTwoImg
        title="Heiraten auf der Zugspitze"
        subTitle="Alles, was ihr für eine erfolgreiche Hochzeit auf der Zugspitze wissen müsst."
        text="Ihr möchtet auf der <span> Zugspitze heiraten </span>? Spitze! Dann seid ihr hier genau richtig. Die Zugspitze, <span> Deutschlands höchster Gipfel </span>, bietet nicht nur eine atemberaubende Kulisse für Abenteurer und Naturliebhaber, sondern auch für diejenigen, die den Bund fürs Leben in einer außergewöhnlichen Umgebung schließen möchten. <span> Heiraten auf der Zugspitze </span> ist mehr als nur eine Hochzeit; es ist ein unvergessliches Erlebnis, das Romantik und Abenteuer in einer einzigartigen alpinen Atmosphäre vereint. Stellt euch vor, wie ihr vor dem Hintergrund schneebedeckter Gipfel und unter dem strahlend blauen Himmel euer Eheversprechen ablegt. Dieser majestätische Ort fügt eurer Zeremonie eine ganz besondere Note hinzu und macht den Tag zu einem unvergesslichen Erlebnis, das ihr und eure Gäste ein Leben lang schätzen werden. Auf dieser Seite erfahrt ihr alles, was ihr wissen müsst, wenn ihr auf der <span> Zugspitze heiraten </span> möchtet.
        "
        imgLinks="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697717553/Pages/heiraten-auf-der-zugspitze/Heiraten-auf-der-zugspitze-59_qzlmvc.jpg"
        imgRechts="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697717542/Pages/heiraten-auf-der-zugspitze/Heiraten-auf-der-zugspitze-58_axinw2.jpg"
        id=""
      />
      <Inhaltsverzeichnis
        inhaltsverzeichnisData={JSON.stringify(inhaltsverzeichnis)}
        bgColor=""
      />
      <ThreeText
        title="Anreise zur Zugspitze"
        textEinleitung="Wenn Ihr auf der <span>Zugspitze heiraten</span>  möchtet, könnt ihr problemlos mit den <span> öffentlichen Verkehrsmitteln</span> oder auch mit dem <span> Auto</span> anreisen. Der nächstgelegene größere Ort zur Zugspitze ist <a target='_blank' href='https://www.gapa-tourismus.de/de'> Garmisch-Partenkirchen</a>. Dort oder direkt in <a target='_blank' href='https://www.grainau.de/'> Grainau </a>, das am Fuße der <span> Zugspitze</span>  liegt, könnt ihr nach einer schönen Unterkunft suchen."
        titleLinks="Anreise zur Zugspitze mit dem Auto"
        textLinks="Für eure <span>Hochzeit </span> kommt ihr ohne probleme mit dem Auto nach <a target='_blank' href='https://www.gapa-tourismus.de/de'> Garmisch-Partenkirchen</a>. Ihr könnt einfach der A95 bis nach Oberau folgen und fahrt dann lediglich die Schnellstraße bis nach Garmisch-Partenkirchen weiter. Solltet ihr euch für eine Unterkunft in Grainau entschieden haben, könnt ihr einfach durch Garmisch-Partenkirchen durchfahren und den Schildern Richtung Grainau folgen."
        titleRechts="Anreise mit den öffentlichen Verkehrsmitteln"
        textRechts="Mit den öffentlichen Verkehrsmitteln kommt ihr ebenfalls problemlos an den Fuß der <span>Zugspitze</span>. Die beste Verbindung habt ihr am Münchner Hauptbahnhof. Von dort aus könnt ihr in einen Zug  steigen Richtung Garmisch-Partenkirchen. Mit der <a target='_blank' href=' https://www.bahn.de/'> Deutschen Bahn</a> könnt ihr direkt vom Münchner Hauptbahnhof nach Garmisch-Partenkirchen durchfahren. Solltet ihr euch für eine Unterkunft in Grainau entschieden haben, könnt ihr vom Bahnhof in Garmisch-Partenkirchen in den Bus  oder in die Zahnradbahn Richtung Grainau fahren. Sowohl der Bus als auch die Zahnradbahn fahren direkt vom Bahnhof weg. Hier findet ihr die <a target='_blank' href='https://www.grainau.de/eibsee-bus-grainau '>Busverbindungen</a> und  <a target='_blank' href='https://zugspitze.de/de/Service-Informationen/Betriebszeiten-Fahrplaene'>Zahnradbahnverbindungen</a> 
        ."
        img="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697717537/Pages/heiraten-auf-der-zugspitze/Heiraten-auf-der-zugspitze-21_zn1t6u.jpg"
        bgColor=""
        id={inhaltsverzeichnis[0].id}
      />
      <ThreeImg
        title="Mit der Gondel oder mit der Zahnradbahn auf die Zugspitze"
        text="Wenn ihr auf der <span>Zugspitze heiraten</span> möchtet, müsst ihr nun nur noch auf den höchsten Berg Deutschlands kommen. Hier habt ihr zwei Optionen, um auf die <span>Zugspitze</span> zu kommen.
        "
        linksTitle="Mit der Gondel auf die Zugspitze"
        linksText="Wenn ihr schwindelfrei seid, könnt ihr euer Auto direkt am Eibsee-Parkplatz parken (<a target='_blank' href=' https://maps.app.goo.gl/dBDk6cYyCA32mnXQ7'>Parkplatz</a>) und von dort die <span>Gondel</span> auf die <span>Zugspitze</span> nehmen. Dort angekommen müsst ihr nochmal eine Gondel nehmen, um zum Skiplato zu gelangen. Denn das <span>Standesamt auf der Zugspitze</span> ist nicht auf dem Gipfel direkt, sondern im  <a target='_blank' href='https://zugspitze.de/de/Unsere-Bergwelten/Gastronomie/Sonnalpin'>„Haus Sonnalpin“</a>  im Skiplato der <span>Zugspitze</span>. Aktuell kostet eine Gondelkarte mit Berg- und Talfahrt <span>68,- €</span>. Ich als <span>Hochzeitsfotograf Garmisch-Partenkirchen</span> empfehle immer meinen Paaren, die Tickets vorher zu kaufen, um so keine Wartezeiten zu haben. Tickets könnt ihr am Ticketschalter bei Garmisch-Partenkirchen am Bahnhof oder auch an der Talstation beim Eibsee-Parkplatz kaufen. Die Tickets können auch <a target='_blank' href='https://zugspitze.skiperformance.com/de/store?skugroup_id=3360&pool_id=464&_gl=1*1firbn5*_ga*MTM4Mjk0MDIwMi4xNjk2OTM5NTQ0*_ga_QW6F33TVY5*MTY5NzAzMTY0Mi4zLjEuMTY5NzAzMTgxNi4wLjAuMA..#/de/buy '>HIER</a> online gekauft werden. "
        rechtsTitle="Mit der Zahnradbahn auf die Zugspitze"
        rechtsText="Solltet ihr Höhenangst haben, kann ich euch nur empfehlen, mit der <span>Zahnradbahn auf die Zugspitze</span> für eure <span>Hochzeit</span> zu fahren. Man kann direkt vom Bahnhof in Garmisch-Partenkirchen oder an einer der zahlreichen Haltestationen mit der Bahn auf die <span>Zugspitze</span> fahren. Die letzte halbe Stunde fährt man durch einen Tunnel und endet im Skiplato, wo auch direkt die Trauung auf der <span>Zugspitze</span> stattfindet. Die Preise sind übrigens dieselben wie mit der Gondel: <span>68,- €.</span> <a target='_blank' href='https://zugspitze.skiperformance.com/de/store?skugroup_id=3360&pool_id=464&_gl=1*1firbn5*_ga*MTM4Mjk0MDIwMi4xNjk2OTM5NTQ0*_ga_QW6F33TVY5*MTY5NzAzMTY0Mi4zLjEuMTY5NzAzMTgxNi4wLjAuMA..#/de/buy online gekauft werden.'>HIER</a> könnt ihr eure Tickets auch online kaufen."
        linksImg="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697717532/Pages/heiraten-auf-der-zugspitze/Heiraten-auf-der-zugspitze-4_z6cjsd.jpg"
        queerImg="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697717534/Pages/heiraten-auf-der-zugspitze/Heiraten-auf-der-zugspitze-14_kyxqxk.jpg"
        rechtsImg="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697717532/Pages/heiraten-auf-der-zugspitze/Heiraten-auf-der-zugspitze-6_ckaodt.jpg"
        bgColor="#e8edde"
        showImg="true"
        id={inhaltsverzeichnis[1].id}
      />
      <OneText
        title="Anmeldung zum Standesamt auf der Zugspitze"
        text="Wenn ihr euch für eine <span>Hochzeit auf der Zugspitze</span> entschieden habt, müsst ihr nun nur noch einen <span>Standesamt Termin auf der Zugspitze</span> finden. <span>Geheiratet</span> wird nur einmal im Monat an einem <span>Mittwoch</span> auf der <span>Zugspitze</span>. Die <span>Termine</span> sind sehr begehrt und in der Regel schnell vergriffen. <a target='_blank' href=' https://buergerservice.gapa.de/buerger-verwaltung/heiraten-in-garmisch-partenkirchen/zugspitze/'> HIER </a> könnt ihr eine Auskunft über die <span>Standesamt Termine auf der Zugspitze</span> bekommen. Euren Antrag für eine <span>Hochzeit auf der Zugspitze</span> könnt ihr hier <span>'standesamt@gapa.de'</span> schreiben. Anträge werden frühestens <span>sechs Monate</span>  vor dem jeweiligen Datum akzeptiert."
        bgColor=""
        id={inhaltsverzeichnis[2].id}
      />
      <LinksRechts
        title="Paarshooting / Hochzeitsbilder auf der Zugspitze"
        text="Ein <span>Paarshooting auf der Zugspitze</span> zu machen, bietet sich wirklich <span>perfekt</span> an. Ich empfehle immer, die <span>Hochzeitsbilder</span> auf dem <span>Skiplato</span> und nicht auf dem <span>Gipfel der Zugspitze</span> zu machen. Dort hat man viel mehr Platz, weniger Menschen und unberührte Natur. Um den Gipfel ist alles einmal eingezäunt, und es bietet sich nicht wirklich für die <span>Hochzeitsbilder</span>  an.
        Alternativ wäre der <span>Eibsee für ein Paarshooting / Elopement</span> ebenfalls nicht weit. "
        img1="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697717537/Pages/heiraten-auf-der-zugspitze/Heiraten-auf-der-zugspitze-23_luafpj.jpg"
        img2="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697717535/Pages/heiraten-auf-der-zugspitze/Heiraten-auf-der-zugspitze-15_ywkxzz.jpg"
        reverse=""
        bgColor="#e8edde"
        id={inhaltsverzeichnis[3].id}
      />
      <LinksRechts
        title="Paarshooting / Hochzeitsbilder am Eibsee"
        text="Wenn ich als <span>Hochzeitsfotograf Garmisch-Partenkirchen</span>  auf der <span>Zugspitze</span> gebucht bin, um <span>Hochzeitsfotos</span> zu machen, mache ich gerne auch, bevor wir auf die Zugspitze fahren, <span>Paarbilder am Eibsee</span> und dann später nochmal kurz welche auf der <span>Zugspitze</span> selbst. Der <span>Eibsee</span> mit seinem <span>Bergpanorama</span> und der <span>Zugspitze im Hintergrund</span> bietet sich einfach unglaublich gut an!
        Am <span>Eibsee</span> gibt es mehrere gute <span>Shooting Locations</span>: Der erste ist circa 10 Minuten Fußweg vom Parkplatz entfernt (<a target='_blank' href=' https://maps.app.goo.gl/79wP1VbvTPGdRbuCA'>siehe Hier </a>). Direkt nach der kleinen Metallbrücke ist eine kleine offene Fläche, wo man gute <span>Hochzeitsbilder</span> machen kann. Wenn wir dann noch ein wenig mehr Zeit haben, gibt es noch eine weitere gute Stelle. Diese <span>Shooting Location</span> (<a target='_blank' href='https://maps.app.goo.gl/q8K1dmXhZMzqTbtV7'>siehe Hier </a>) am <span>Eibsee</span> ist circa 20-25 Minuten (einfach) vom Parkplatz entfernt.
        Für das <span>Hochzeitsshooting am Eibsee</span> sollte zusätzlich mindestens 1,5 Stunden eingeplant werden."
        img1="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697717545/Pages/heiraten-auf-der-zugspitze/Heiraten-auf-der-zugspitze-52_asucn1.jpg"
        img2="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697717554/Pages/heiraten-auf-der-zugspitze/Heiraten-auf-der-zugspitze-61_bukwvs.jpg"
        reverse="true"
        bgColor=""
        id={inhaltsverzeichnis[4].id}
      />
      <OneText
        title="Kosten fürs Heiraten auf der Zugspitze"
        text="Zu den Tickets, um auf die <span> Zugspitze</span> zu gelangen, kostet die <span>Hochzeit  auf der Zugspitze 250,- €</span>. Die aktuellen <span>Preise</span> findet ihr auf der offiziellen <a target='_blank' href='https://buergerservice.gapa.de/buerger-verwaltung/heiraten-in-garmisch-partenkirchen/zugspitze/'> Webseite </a>."
        bgColor="#e8edde"
        id={inhaltsverzeichnis[5].id}
      />
      <ThreeImg
        title="Kontaktdaten für eure standesamtliche Hochzeit auf der Zugspitze"
        text="Hier sind alle wichtigen Kontakte für eure <span>Hochzeit auf der Zugspitze</span>: "
        linksTitle="Kontaktdaten zum Standesamt Garmisch-Partenkirchen:"
        linksText="<span>Standesamt Garmisch-PartenkirchenRathausplatz</span> <br/> 182467 Garmisch-Partenkirchen <br/> Tel.: +49 (0) 8821 / 910 -3112 <br/>  Fax: +49 (0) 8821 / 910 -3002 <br/>  E-Mail: standesamt@gapa.de <br/> Web: https://buergerservice.gapa.de/"
        rechtsTitle="Kontaktdaten zur Bayerische Zugspitzbahn"
        rechtsText="Auskünfte über Fahrpreise, Fahrzeiten und Reservierungen erhaltet ihr beim Verkaufsbüro der Bayerischen Zugspitzbahn <br/> Tel. +49 (0) 8821 / 797 –0 <br/> E-Mail: zugspitzbahn@zugspitze.de <br/> Web: https://zugspitze.de/de
        "
        linksImg="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697717554/Pages/heiraten-auf-der-zugspitze/Heiraten-auf-der-zugspitze-60_qfdzeo.jpg"
        queerImg="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697717551/Pages/heiraten-auf-der-zugspitze/Heiraten-auf-der-zugspitze-67_vqvxzl.jpg"
        rechtsImg="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697717545/Pages/heiraten-auf-der-zugspitze/Heiraten-auf-der-zugspitze-50_ttcd0g.jpg"
        bgColor="#e8edde"
        showImg="true"
        id={inhaltsverzeichnis[6].id}
      />
      <OneText
        title="Euer Hochzeitsfotograf in Garmisch-Partenkirchen und Zugspitze"
        text="Wenn Ihr auf der <span>Zugspitze heiraten</span> möchtet, bin ich gerne euer einheimischer <span>Hochzeitsfotograf aus Garmisch-Partenkirchen</span> und <span>fotografiere</span> eure <span>Hochzeit auf der Zugspitze</span>. Ich kenne mich sowohl am <span>Eibsee</span> als auch auf der <span>Zugspitze </span>sehr gut aus. Sollten euch also die Bilder auf dieser Seite gefallen haben, schickt mir gerne eine unverbindliche  <a target='_blank' href='/kontakt'> Anfrage </a>. Ich freue mich auf euch!"
        bgColor=""
        id={inhaltsverzeichnis[7].id}
      />

      <List
        bgColor="#e8edde"
        title="FAQ - Heiraten auf der Zugspitze"
        arrayData='[
          {
          "title": "Wie bekomme ich einen Termin für meine Hochzeit auf der Zugspitze?",
           "text": "Für einen Hochzeitstermin auf der Zugspitze müsst ihr lediglich euren Wunschtermin unter dieser E-Mail-Adresse anfragen: standesamt@gapa.de (frühestens sechs Monate vor Termin). Die Termine sind stark begrenzt."
          },

          {
          "title": "Was kostet es, auf der Zugspitze zu heiraten?",
          "text": "Wenn ihr auf der Zugspitze heiraten möchtet, zahlt ihr 250,- € zusätzlich."
          },

          {
          "title": "Wo befindet sich der Trauungssaal auf der Zugspitze?",
          "text": "Das Standesamt auf der Zugspitze befindet sich im Sonnalpin-Haus, auf dem Skiplato."
          }
        ]'
        id={inhaltsverzeichnis[8].id}
      />
    </main>
  );
};

export default Zugspitze;
