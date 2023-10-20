import parse from "html-react-parser";
import Image from "next/image";
import styles from "../../styles/ThreeImg.module.css";
import McImage from "../McImage";

// #title, text, linksTitle, linksText, rechtsTitle, rechtsText, linksImg, mitteImg, rechtsImg, bgColor, showImg

const ThreeImg = ({
  title,
  text,
  linksTitle,
  linksText,
  rechtsTitle,
  rechtsText,
  linksImg,
  queerImg,
  rechtsImg,
  bgColor,
  showImg,
  id,
}) => {
  return (
    <section
      id={id}
      className={styles.threeImg}
      style={{ backgroundColor: bgColor }}
    >
      <div className={styles.hero}>
        <h2>{parse(title)}</h2>
        <p>{parse(text)}</p>
      </div>

      <article className={styles.textbox}>
        <div>
          <h3>{parse(linksTitle)}</h3>
          <p>{parse(linksText)}</p>
        </div>
        <div>
          <h3> {parse(rechtsTitle)}</h3>
          <p>{parse(rechtsText)}</p>
        </div>
      </article>
      <article
        className={`${styles.imgbox} ${
          showImg == "false" ? styles.showImg : ""
        }`}
      >
        <McImage
          src={linksImg}
          height={400}
          width={300}
          alt="Hochzeitsfotograf Starnberg München Augsburg Garmisch-Partenkirchen"
        />
        <McImage
          src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1695904301/deko/kreuz_hqtbq7.png"
          height={60}
          width={60}
          alt="Hochzeitsfotograf Starnberg München Augsburg Garmisch-Partenkirchen"
        />
        <McImage
          src={queerImg}
          height={500}
          width={400}
          alt="Hochzeitsfotograf Starnberg München Augsburg Garmisch-Partenkirchen"
        />
        <McImage
          src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1695904301/deko/kreuz_hqtbq7.png"
          height={60}
          width={60}
          alt="Hochzeitsfotograf Starnberg München Augsburg Garmisch-Partenkirchen"
        />
        <McImage
          src={rechtsImg}
          height={400}
          width={300}
          alt="Hochzeitsfotograf Starnberg München Augsburg Garmisch-Partenkirchen"
        />
      </article>
    </section>
  );
};

export default ThreeImg;
