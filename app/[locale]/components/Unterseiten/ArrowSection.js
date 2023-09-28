import Image from "next/image";
import ArrowInd from "../../../../public/img/svgs/ArrowInd";
import styles from "../../styles/ArrowSection.module.css";

// # title, img, text1, text2

const ArrowSection = ({ title, img, text1, text2 }) => {
  return (
    <section className={styles.arrowSection}>
      <article className={styles.imgCont}>
        <h2>{title}</h2>
        <div>
          <Image
            src={img}
            height={500}
            width={900}
            alt="Hochzeitsfotograf München Starnberg Augsburg Garmisch-partenkirchen Gardasee Florenz"
            style={{ position: "relative" }}
          />
        </div>
      </article>
      <article className={styles.text}>
        <p>{text1}</p>
        <p>{text2}</p>
      </article>
    </section>
  );
};

export default ArrowSection;
