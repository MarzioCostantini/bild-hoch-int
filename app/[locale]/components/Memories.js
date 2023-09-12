import Image from "next/image";
import styles from "../styles/Memories.module.css";

const Memories = () => {
  return (
    <section className={styles.memories}>
      <div className={styles.bgImg}></div>
      <div className={styles.content}></div>
      <article>
        <Image
          src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1694435004/Pages/Leistungen/Hochzeitsfotograf-mu%CC%88nchen-augsburg-starnberg-1-3_u4gjmb.jpg"
          height={300}
          width={300}
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
