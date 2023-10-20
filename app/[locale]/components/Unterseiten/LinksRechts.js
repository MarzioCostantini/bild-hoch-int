import parse from "html-react-parser";
import Image from "next/image";
import styles from "../../styles/LinksRechts.module.css";
import McImage from "../McImage";

//#title, text, img, bgColor, reverse

const LinksRechts = ({ title, text, img1, img2, bgColor, reverse, id }) => {
  return (
    <section
      id={id}
      className={`${styles.linksRechts} ${
        reverse == "true" ? styles.reverse : ""
      }`}
      style={{ backgroundColor: bgColor }}
    >
      <div className={styles.imgbox}>
        <McImage
          src={img1}
          height={500}
          width={300}
          //   layout="responsive"
          alt="Heiraten auf der Zugspitze"
        />
        <McImage
          src={img2}
          height={350}
          width={250}
          //   layout="responsive"
          alt="Heiraten auf der Zugspitze"
        />
      </div>

      <div className={styles.textbox}>
        <h2>{parse(title)}</h2>
        <p>{parse(text)}</p>
      </div>
    </section>
  );
};

export default LinksRechts;
