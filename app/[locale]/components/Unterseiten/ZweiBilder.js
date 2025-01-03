import Image from "next/image";
import styles from "../../styles/ZweiBilder.module.css";
import McImage from "../McImage";

const ZweiBilder = ({ title, text1, text2, img1, img2, dekoText }) => {
  return (
    <section className={styles.zweiBilder}>
      <article className={styles.hero}>
        <div></div>
        <McImage
          src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1695904301/deko/kreuz_hqtbq7.png"
          height={90}
          width={90}
          alt="Hochzeitsfotograf München Starnberg Augsburg Garmisch-partenkirchen Gardasee Florenz"
        />
        <div></div>
      </article>
      <h3>{title}</h3>
      <div className={styles.text}>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
      <article className={styles.imgCont}>
        <div className={styles.imgCon}>
          <McImage
            src={img1}
            height={600}
            width={450}
            alt="Hochzeitsfotograf Starnberg"
          />
        </div>
        <div>
          <McImage
            src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1695904301/deko/rain_itbrvh.png"
            height={105}
            width={100}
            alt="Hochzeitsfotograf Starnberg"
          />
          <h5>RAW VIVID ALIVE.</h5>
        </div>
        <div className={styles.imgCon}>
          <McImage
            src={img2}
            height={600}
            width={450}
            alt="Hochzeitsfotograf Starnberg "
          />
        </div>
      </article>
    </section>
  );
};

export default ZweiBilder;
