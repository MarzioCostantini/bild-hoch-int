import Image from "next/image";
import styles from "../styles/Memories.module.css";
import McImage from "./McImage";

const Memories = () => {
  return (
    <section className={styles.memories}>
      <div className={styles.bgImg}></div>
      <div className={styles.content}></div>
      <article>
        <McImage
          src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1694435004/Pages/Leistungen/Hochzeitsfotograf-mu%CC%88nchen-augsburg-starnberg-1-3_u4gjmb.jpg"
          height={500}
          width={500}
          alt="Hochzeitsfotograf München Starnberg Augsburg Garmisch-partenkirchen Gardasee Florenz"
          style={{ width: "100%", height: "auto" }}
        />
        <p className={styles.text}>
          "IF YOU DON'T HAVE <span>MEMORIES,</span> YOU DON'T HAVE
          <span> ANYTHING.</span>"
        </p>
      </article>
    </section>
  );
};

export default Memories;
