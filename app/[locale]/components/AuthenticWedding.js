import { useTranslations } from "next-intl";
import styles from "../styles/AuthenticWedding.module.css";

const AuthenticWedding = () => {
  const t = useTranslations();

  return (
    <section className={styles.authentic}>
      <h3>{t("pageHome.authentisch.authTitle")}</h3>
      <hr />
      <h6>{t("pageHome.authentisch.authSubTitle")} </h6>
    </section>
  );
};

export default AuthenticWedding;
