// "use client";
import weddingData from "../../../../WeddingData.json";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/WeddingDetail.module.css";

// import { ScrollToTop } from "../../components/ScrolltoTop";
import ShowGallery from "../../components/ShowGallery";

const Detail = ({ params }) => {
  const link = params.link;

  let filterWedding = weddingData.filter((elt) => {
    return elt.link === link;
  });

  console.log("FILTER -->", filterWedding);

  return (
    <main className={styles.weddingDetail}>
      {filterWedding.map((elt, index) => (
        <div key={index}>
          <h1>{elt.title}</h1>
          <div className="line"></div>
          <p>{elt.description}</p>
          <p>
            Wenn auch ihr noch auf der Suche nach einem Hochzeitsfotografen
            seid, schreibt mir gerne eine Nachricht.
          </p>
          <Link className="btn" href="/kontakt">
            Kontakt
          </Link>
          <ShowGallery tag={elt.cloudinaryTag} alt={elt.keyword1} />
        </div>
      ))}
    </main>
  );
};

export default Detail;
