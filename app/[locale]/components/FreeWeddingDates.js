import { useTranslations } from "next-intl";
import Link from "next/link";
import styles from "../styles/FreeWeddingDates.module.css";

const FreeWeddingDates = () => {
  const t = useTranslations();

  return (
    <Link href="/kontakt">
      <div className={styles.container}>
        <div className={`${styles.blob} ${styles.green}`}></div>
        <p>
          {t("freeWeddingDates")} {new Date().getFullYear()} /{" "}
          {new Date().getFullYear() + 1}
        </p>
      </div>
    </Link>
  );
};

export default FreeWeddingDates;
