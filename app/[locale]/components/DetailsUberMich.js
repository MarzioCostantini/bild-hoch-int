import styles from "../styles/DetailsUberMich.module.css";
import Image from "next/image";
import { useState } from "react";

const DetailsUberMich = () => {
  const Texte = [
    "Ich liebe einfach das Reise und in ferne Länder, die unterschiedlichen Kulturen kennen zu lernen. Deswegen habe ich bereits zwei Weltreisen gemacht. Kommt dann noch zu einer Fernreise einwenig Abenteuer hinzu, PERFEKT! So war ich 2019 am Mt. Everest Basecamp oder bin mit einem Motorrad über Cambodia und Vietnam bis an die Chinesische grenze hoch gefahren. Ahja, habe ich erwähnt das ich noch kein Motorrad Führerschein habe?",
    "Ursprünglich habe ich mit der Landschaftsfotografie angefangen und bin erst über die Jahre in die Hochzeitsfotografie reingekommen. Daher ist es eigentlich klar, das ich gerne draussen beim Wandern bin oder und unter freie Himmel schlafe :-)",
    "Sollte ich mal keine Kamera in der Hand haben oder nicht in der Welt unterweg sein, kann es sein das ich gerade ein paar Personen das Programmieren beibringe. Ich liebe es auch in diese Richtung mich kreativ auszuleben. Ob man es glaubt oder nicht, Programmieren kann kreativ sein :-)",
    "Naja, nicht ganz aber fast. Ich habe einen Zwillingsbruder dem ich ziemlich ähnlich sehe, mit dem ich die meisten meiner wilden Abenteuer durchziehe. Er selber Fotografiert auch Hochzeiten und uns kann man auch zu zweit Buchen.",
    "In Einigen Hinsichten bin ich einfach ein Perfektionist und ich hasse es zb wenn Sachen nicht gerade sind wie zb eine Bild an der Wand oder meine Monitore! Die zwei Monitore müssen perfekt Kante an Kante anliegen und es darf auch keine Lücke dazwischen geben… :-D!",
  ];
  const [myProfession, setMyProfession] = useState("");

  return (
    <section className={styles.aboutDetails}>
      <article className={styles.details}>
        <h5>Details</h5>
        <div></div>

        <div>
          <p>{myProfession}</p>
          <Image
            src="/img/about/Hochzeitsfotograf_Starnberg_everest-min.jpg"
            height={300}
            width={500}
            alt="Hochzeitsfotograf München Starnberg Augsburg Garmisch-partenkirchen Gardasee Florenz"
          />
        </div>
      </article>
      <article className={styles.list}>
        <h5>Ein Paar Infos über mich </h5>
        <div></div>
        <ul>
          <li onClick={() => setMyProfession(Texte[1])}>
            Ich liebe es zu Reise
          </li>
          <li>Ich bin gerne in der Natur unterwegs</li>
          <li></li>
          <li>Meine zweite Leidenschaft ist es zu Programmieren</li>
          <li>Mich gibt es zwei mal ;-)</li>
          <li>Ich hasse es wenn was nicht gerade ist </li>
        </ul>
      </article>
    </section>
  );
};

export default DetailsUberMich;
