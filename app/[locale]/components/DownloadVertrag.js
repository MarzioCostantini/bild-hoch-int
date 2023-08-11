import styles from "../styles/DownloadVertrag.module.css";

const DownloadVertrag = () => {
  return (
    <section className={styles.vertrag}>
      <h3>Hochzeitsvetrag Downloaden</h3>
      <h6>Hier können Sie sich meinen Hochzeitsvetrag runterladen</h6>
      <a href="../Hochzeitsfotograf_Marzio_Costantini.pdf" download>
        <button className="btn">Download</button>
      </a>
    </section>
  );
};

export default DownloadVertrag;
