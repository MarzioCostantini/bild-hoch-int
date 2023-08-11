import Image from "next/image";
import styles from "../styles/WeddingDetail.module.css";

async function fetchImg({ tag }) {
  const productsRespons = await fetch(
    // So bekommen ich die Bilder via Tagname
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image/tags/${tag}/?max_results=500`,

    {
      cache: "no-store",
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ":" +
            process.env.CLOUDINARY_API_SECRET
        ).toString("base64")}`,
      },
    }
  );

  const imgData = await productsRespons.json();
  return imgData;
}

export default async function ShowGallery({ tag, alt }) {
  const product = await fetchImg({ tag });

  // Die Vergleichsfunktion extrahiert die Zahl aus der public_id, indem sie den String nach dem letzten Schrägstrich (/) teilt und ihn dann in eine Ganzzahl (parseInt()) konvertiert.
  const sortedProduct = product.resources.sort((a, b) => {
    const numberA = parseInt(a.public_id.split("/").pop());
    const numberB = parseInt(b.public_id.split("/").pop());
    return numberA - numberB;
  });

  return (
    <section className={styles.gallery}>
      {sortedProduct.map((item) => {
        return (
          <Image
            key={item.secure_url}
            src={item.secure_url}
            // width={item.width}
            // height={item.height}
            alt={alt}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        );
      })}
    </section>
  );
}
