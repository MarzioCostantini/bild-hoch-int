import { createTranslator, useTranslations } from "next-intl";
import styles from "../styles/Agb.module.css";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  return {
    title: t("pageAGB.meta.title"),
    description: t("pageAGB.meta.description"),
  };
}

const agb = () => {
  const t = useTranslations();

  return (
    <>
      <main className={styles.agb}>
        <article className={styles.hero}>
          <h1>agb</h1>
          <hr />
        </article>
        <article>
          <p>
            {t.rich("pageAGB.punkt1", {
              br: () => <br />,
            })}
          </p>

          <p>
            {t.rich("pageAGB.punkt2", {
              br: () => <br />,
            })}
          </p>
          <p>
            {t.rich("pageAGB.punkt4", {
              br: () => <br />,
            })}
          </p>
          <p>
            {t.rich("pageAGB.punkt5", {
              br: () => <br />,
            })}
          </p>
          <p>
            {t.rich("pageAGB.punkt6", {
              br: () => <br />,
            })}
          </p>
        </article>
      </main>
    </>
  );
};

export default agb;
