import parse from "html-react-parser";
import Image from "next/image";
import styles from "../../styles/OneText.module.css";

// #title, text, bgColor, id

const OneText = ({ title, text, bgColor, id }) => {
  return (
    <section
      id={id}
      className={styles.oneText}
      style={{ backgroundColor: bgColor }}
    >
      <h2>{parse(title)}</h2>
      <p>{parse(text)}</p>
    </section>
  );
};

export default OneText;
