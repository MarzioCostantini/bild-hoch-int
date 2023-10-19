import parse from "html-react-parser";
import styles from "../../styles/List.module.css";

// # bgColor, arrayData, title, id

const List = ({ bgColor, arrayData, title, id }) => {
  const parsedArrayData = JSON.parse(arrayData);

  return (
    <section
      id={id}
      className={styles.list}
      style={{ backgroundColor: bgColor }}
    >
      <h2>{parse(title)}</h2>
      <ul>
        {parsedArrayData.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default List;
