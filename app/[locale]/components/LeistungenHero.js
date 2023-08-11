import styles from "../styles/HeroImg.module.css";
import Link from "next/link";
import Image from "next/image";

const HeroImg = ({ titel, img1, img2, kontakt }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <article>
          <Image
            src={img1}
            height={900}
            width={700}
            alt="Hochzeitsfotograf München"
          />
        </article>
        <hr />
        <article>
          <h2>{titel}</h2>
          <div></div>
          <Link href="/kontakt">
            <p className="btn">{kontakt}</p>
          </Link>
        </article>
        <hr />
        <article>
          <Image
            src={img2}
            height={900}
            width={700}
            alt="Hochzeitsfotograf München"
          />
        </article>
      </div>
    </section>
  );
};

export default HeroImg;
