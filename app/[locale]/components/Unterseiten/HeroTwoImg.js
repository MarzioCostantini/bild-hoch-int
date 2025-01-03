import Image from "next/image";
import styles from "../../styles/HeroTwoImg.module.css";
import parse from "html-react-parser";

import McImage from "../McImage";

// # title, text, imgLinks, imgRechts, SubTitle
const HeroTwoImg = ({ title, subTitle, text, imgLinks, imgRechts }) => {
  return (
    <section className={styles.heroTwo}>
      <McImage
        src={imgLinks}
        height={450}
        width={300}
        alt="Hochzeitsfotograf Starnberg München Augsburg Garmisch-Partenkirchen"
      />
      <div>
        <h1>{title}</h1>
        <h6>{subTitle}</h6>
        <McImage
          src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1695904304/deko/arrow_cwtqdn.png"
          height={300}
          width={110}
          alt="Hochzeitsfotograf Starnberg München Augsburg Garmisch-Partenkirchen"
          style={{ transform: "Rotate(90deg)", width: "10%", height: "100%" }}
        />
        <p>{parse(text)}</p>
      </div>
      <McImage
        src={imgRechts}
        height={450}
        width={300}
        alt="Hochzeitsfotograf Starnberg München Augsburg Garmisch-Partenkirchen"
      />
    </section>
  );
};

export default HeroTwoImg;
