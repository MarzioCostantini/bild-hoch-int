import styles from "../../styles/WeddingDetailNew.module.css";
import { createTranslator, useTranslations } from "next-intl";
import Link from "next/link";
import ShowGallery from "../../components/ShowGallery";

// ! METADATA START

export async function generateMetadata({ params }) {
  console.log({ params });

  const WebLink = params.link; // Der Link aus den Parametern
  const locale = params.locale; // Die ausgewählte Sprache
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });

  let selectedPostData = null;

  // Durchsuchen Sie alle Blogposts, um den gewünschten Datensatz zu finden
  for (let i = 1; i <= 150; i++) {
    // Hier nehmen wir an, dass es maximal 150 Blogposts gibt
    const currentLink = t(`blog.post${i}.link`);
    if (currentLink === WebLink) {
      selectedPostData = {
        title: t(`blog.post${i}.title`),
        description: t(`blog.post${i}.shortDescription`),
      };
      break;
    }
  }

  if (!selectedPostData) {
    console.error(
      "Kein Blogpost gefunden, der dem angegebenen Link entspricht."
    );
    return {
      title: "Euer Hochzeitsfotograf in München | Authentisch und Echt ☀",
      description:
        "Ich bin Marzio Hochzeitsfotograf in München. Hochzeitsreportagen in München und Umgebung | Klickt für weitere Informationen einfach hier!",
    };
  }

  return selectedPostData;
}

// ! METADATA END

const Page = ({ params }) => {
  const WebLink = params.link;

  const t = useTranslations(`blog`);

  const keys = [
    "id",
    "title",
    "description",
    "shortDescription",
    "link",
    "thumbnail",
    "date",
    "favourite",
    "keyword1",
    "keyword2",
    "cloudinaryTag",
  ];

  let selectedPostKey = null;

  // Versuchen Sie, den Blogpost-Key basierend auf dem 'link'-Wert zu finden
  for (let i = 1; i <= 150; i++) {
    // Hier nehmen wir an, dass es maximal 100 Blogposts gibt
    const currentLink = t(`post${i}.link`);
    if (currentLink === WebLink) {
      selectedPostKey = `post${i}`;
      break;
    }
  }

  if (!selectedPostKey) {
    return (
      <div>
        <h2>Blogpost nicht gefunden</h2>
      </div>
    );
  }

  // Erstellen Sie ein Objekt mit den Schlüsseln und Werten des ausgewählten Blogposts
  const postData = keys.reduce((acc, key) => {
    acc[key] = t(`${selectedPostKey}.${key}`);
    return acc;
  }, {});

  //   console.log("Selected Post Data (Object):", postData);

  return (
    <main className={styles.weddingDetail}>
      <h1>{postData.title}</h1>
      <div className="line"></div>
      <p>{postData.description}</p>
      <p>
        Wenn auch ihr noch auf der Suche nach einem Hochzeitsfotografen seid,
        schreibt mir gerne eine Nachricht.
      </p>
      <Link className="btn" href="/kontakt">
        Kontakt
      </Link>
      <ShowGallery tag={postData.cloudinaryTag} alt={postData.keyword1} />
    </main>
  );
};

export default Page;

//   <ul>
//     {keys.map((key) => (
//       <li key={key}>{t(key)}</li>

//     ))}
//   </ul>
