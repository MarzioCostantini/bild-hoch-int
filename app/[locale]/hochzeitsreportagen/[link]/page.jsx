import styles from "../../styles/WeddingDetailNew.module.css";
import { createTranslator, useTranslations } from "next-intl";
import Link from "next/link";
import ShowGallery from "../../components/ShowGallery";
import Circle from "../../../../public/img/svgs/circle";

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
        images: [
          {
            url: t(`blog.post${i}.thumbnail`),
            width: 800,
            height: 600,
          },
        ],
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

  //   ! OLD
  //   // Erstellen Sie ein Array mit den Werten aus blogPost1
  //   const blogPost1Values = keys.map((key) => t(`${key}`));
  //   console.log("Blog Post 1 Values (Array):", blogPost1Values);

  //   // Erstellen Sie ein Objekt mit den Schlüsseln und Werten aus blogPost1
  //   const blogPost1Data = keys.reduce((acc, key) => {
  //     acc[key] = t(`${key}`);
  //     return acc;
  //   }, {});
  //   console.log("Blog Post 1 Values (Object):", blogPost1Data);

  //   ! NEW

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
      <section>
        <div className={styles.longLine}></div>
        <p className={styles.feauter}>Feauter in Wedding</p>
        <h1>{postData.title}</h1>
        <Circle />
        <article className={styles.btnKontakt}>
          <div></div>
          <Link className="btn" href="/kontakt">
            Kontakt
          </Link>
          <div></div>
        </article>
        <div className={styles.content}>
          <p>{postData.description}</p>
        </div>
        <article className={styles.touch}>
          <p>Like What you See?</p>
          <div></div>
          <Link className="btn" href="/kontakt">
            GET IN TOUCH
          </Link>
        </article>
      </section>

      <ShowGallery tag={postData.cloudinaryTag} alt={postData.keyword1} />
    </main>
  );
};

export default Page;
