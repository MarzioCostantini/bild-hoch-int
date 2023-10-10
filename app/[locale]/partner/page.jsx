import Link from "next/link";
import ArrowSection from "../components/Unterseiten/ArrowSection";
import Locations from "../components/Unterseiten/Locations";

const Partner = () => {
  return (
    <main>
      <ArrowSection
        title="Empfohlene Partner und Dienstleister"
        img="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1694526556/Pages/Leistungen/packet04_beozzl.jpg"
        text1=" Herzlich willkommen im Bereich unserer empfohlenen Partner und Dienstleister. Durch meine langjährige Tätigkeit als Hochzeitsfotograf habe ich die Gelegenheit gehabt, mit einer Vielzahl von Dienstleistern in der Hochzeitsbranche zusammenzuarbeiten. Dabei habe ich festgestellt, dass Qualität und Zuverlässigkeit entscheidende Faktoren für den Erfolg einer Hochzeit sind. Deshalb möchte ich Ihnen hier einige ausgewählte Partner vorstellen, die diese Kriterien in besonderem Maße erfüllen und die ich aus voller Überzeugung empfehlen kann."
        text2="In der Liste finden Sie Floristen, Caterer, Musiker und viele weitere Dienstleister, die Ihr Hochzeitsfest zu einem unvergesslichen Erlebnis machen können. Jeder dieser Partner zeichnet sich durch Professionalität, Kreativität und ein hohes Maß an Kundenorientierung aus. Sie können sich darauf verlassen, dass diese Dienstleister mit der gleichen Leidenschaft und dem gleichen Engagement an Ihrer Hochzeit teilnehmen werden, wie ich es als Ihr Hochzeitsfotograf tue."
      />
      <Locations
        title="Hochzeitsdiensleister "
        subTitle="Best of"
        einleitung="Hier finden Sie ausgewählte Partner und Dienstleister, die ich nur wärmstens empfehlen kann. Durch meine langjährige Erfahrung als Hochzeitsfotograf lernt man viele Dienstleister kennen, und die hier aufgeführten haben sich durch Qualität und Zuverlässigkeit besonders hervorgetan."
        locations={[
          {
            name: "Blumenoase",
            webseite: "https://www.dieblumenoase.de/",
            slogan: " Hochzeitsfloristik",
            text: "Say YES - Zu deiner beeindruckenden Blumendekoration - Die Florale Dekoration  ist dabei eine der wichtigsten Bausteine für die gesamte Atmosphäre. Das Team begleitet euch von Anfang an, mit jahrelanger Erfahrung, bei der Planung eurer Dekoration.",
            catrgory: "Florist",
          },
          {
            name: "StuhlHussenWorld",
            webseite: "https://stuhlhussenworld.de/",
            slogan: "Stuhlhussen",
            text: "Sie planen eine Hochzeit oder eine Geburtstagsfeier, haben aber noch keine Vorstellung, wie Sie Ihren Anlass dekorativ gestalten? Wir helfen Ihnen, Ihre persönliche Dekoidee zu finden. Wir beraten Sie schnell und unkompliziert damit Sie die passenden Stuhlhussen mieten und die perfekte Dekoration bekommen. StuhlHussenWorld ist auf den Verleih von Hussen jeglicher Art und Dekoration spezialisiert. Zu unseren Kunden zählen Privatpersonen und Gewerbetreibende, wie Eventagenturen, Gastronomie- und Hotellerie Betriebe. Durch Stuhlhussen und der passenden Dekoration schaffen Sie auf Hochzeiten, Geburtstagsfeiern, Taufen, Jubiläumsveranstaltungen und Events jeglicher Art ein feierliches Flair. Wir freuen uns auf Ihre Anfrage.",
            catrgory: "Sonstiges",
          },
          {
            name: "Bine Singt",
            webseite: "https://www.binesingt.net/Hochzeit",
            slogan: "Hochzeitssängerin",
            text: "Sie suchen noch Ihre Hochzeitssängerin? Mit viel Herz und Stimme sorgt die Sängerin Bine Trinker aus München bei Ihrer Trauung für Gänsehautmomente. Auf Wunsch begleitet sie auch den Empfang musikalisch und sorgt am Abend mit ihrer Band für Partystimmung auf der Tanzfläche.",
            catrgory: "Sänger",
          },
          {
            name: "Hochzeitsflorstik Kirsten Brugger",
            webseite: "www.kirsten-brugger.de",
            slogan: "Hochzeitsflorstik",
            text: "Gerne biete ich euch professionelle Hochzeitsfloristik für eure Hochzeit in München, Starnberg, am Ammersee, Starnberger See oder im Landkreis Fürstenfeldbruck. Ob Ihr euch eine elegante und festliche Dekoration für Ihre Hochzeit wünscht, eine romantische Boho-Hochzeit plant oder eine traditionelle bayerische Trachtenhochzeit bevorzugt, die Gestaltung Ihrer Traumhochzeit liegt in euren Händen. Unser Ziel ist es, eure Hochzeit zu einem unvergesslichen Erlebnis zu machen.",
            catrgory: "Florist",
          },
        ]}
      />
    </main>
  );
};

export default Partner;
