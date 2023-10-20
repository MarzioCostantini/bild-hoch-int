import Image from "next/image";
import parse from "html-react-parser";
import styles from "../../styles/ThreeText.module.css";
import McImage from "../McImage";

// #   title, textEinleitung, titleLinks, textLinks,  titleRechts, textRechts, img

const ThreeText = ({
  title,
  textEinleitung,
  titleLinks,
  textLinks,
  titleRechts,
  textRechts,
  img,
  bgColor,
  id,
}) => {
  return (
    <section
      id={id}
      className={styles.threeText}
      style={{ backgroundColor: bgColor }}
    >
      <article className={styles.deko}>
        <div></div>
        <McImage
          src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1695904301/deko/kreuz_hqtbq7.png"
          height={70}
          width={70}
          alt="Hochzeitsfotograf Starnberg München Augsburg Garmisch-Partenkirchen"
        />
        <div></div>
      </article>
      <div className={styles.header}>
        <h2>{title}</h2>
        <p>{parse(textEinleitung)}</p>
      </div>
      <div className={styles.line}></div>
      <article className={styles.middle}>
        <section>
          <div className={styles.textcontent}>
            <h3>{titleLinks}</h3>
            <p>{parse(textLinks)}</p>
          </div>
        </section>
        <section>
          <div className={styles.textcontent}>
            <h3>{titleRechts}</h3>
            <p>{parse(textRechts)}</p>
          </div>
        </section>
      </article>
      <McImage
        src={img}
        height={450}
        width={690}
        layout="responsive"
        style={{ width: "100%", height: "auto", maxWidth: "1000px" }}
        alt="Hochzeitsfotograf Starnberg München Augsburg Garmisch-Partenkirchen"
      />
    </section>
  );
};

export default ThreeText;
