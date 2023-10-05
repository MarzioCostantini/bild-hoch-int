import Link from "next/link";
import ArrowSection from "../components/Unterseiten/ArrowSection";
import Locations from "../components/Unterseiten/Locations";

const partner = [
  {
    name: "Blumenoase",
    text: "Say YES - Zu deiner beeindruckenden Blumendekoration - Die Florale Dekoration  ist dabei eine der wichtigsten Bausteine für die gesamte Atmosphäre. Das Team begleitet euch von Anfang an, mit jahrelanger Erfahrung, bei der Planung eurer Dekoration.",
    link: "https://www.dieblumenoase.de/",
  },
  {
    name: "Blumenoas 2222",
    text: "Say YES - Zu deiner beeindruckenden Blumendekoration - Die Florale Dekoration  ist dabei eine der wichtigsten Bausteine für die gesamte Atmosphäre. Das Team begleitet euch von Anfang an, mit jahrelanger Erfahrung, bei der Planung eurer Dekoration.",
    link: "https://www.dieblumenoase.de/",
  },
];

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
          },
        ]}
      />
    </main>
  );
};

export default Partner;
