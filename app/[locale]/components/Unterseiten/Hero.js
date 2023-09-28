import styles from "../../styles/Hero.module.css";

//# title, subTitle, backgroundUrl

const Hero = ({ title, subTitle, backgroundUrl }) => {
  return (
    <section
      style={{ backgroundImage: `url(${backgroundUrl})` }}
      className={styles.hero}
    >
      <div className={styles.lineTop}></div>
      <div className={styles.lineLeft}></div>
      <div className={styles.lineLeftZwei}></div>
      <div className={styles.lineRight}></div>
      <div className={styles.lineRightZwei}></div>
      <h1>{title}</h1>
      <article>
        <p>{subTitle}</p>
      </article>
    </section>
  );
};

export default Hero;
