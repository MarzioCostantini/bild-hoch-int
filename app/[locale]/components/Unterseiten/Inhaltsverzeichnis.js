import parse from "html-react-parser";
import styles from "../../styles/Inhaltsverzeichnis.module.css";

const Inhaltsverzeichnis = ({ bgColor, inhaltsverzeichnisData }) => {
  const inhaltsverzeichnisArray = JSON.parse(inhaltsverzeichnisData);

  return (
    <section
      className={styles.Inhaltsverzeichnis}
      style={{ backgroundColor: bgColor }}
    >
      <h4>Inhaltsverzeichnis</h4>

      <ul>
        {inhaltsverzeichnisArray.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.titel}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Inhaltsverzeichnis;
