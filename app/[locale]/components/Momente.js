import styles from "../styles/Momente.module.css";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Momente = () => {
  const t = useTranslations();

  return (
    <section className={styles.momente}>
      <article>
        <div>
          <Image
            src="/img/home/Hochzeitsfotograf-Augsburg1-min.avif"
            height={600}
            width={500}
            alt="Hochzeitsfotograf Starnberg, Hochzeitsfotograf München, Hochzeitsfotograf Augsburg"
          />
        </div>
        <div>
          <h4>
            {t.rich("pageHome.momente.text1", {
              br: () => <br />,
            })}
          </h4>
        </div>
      </article>
      <article>
        <div>
          <h4>
            {t.rich("pageHome.momente.text2", {
              br: () => <br />,
            })}
          </h4>
          <Link href={"/kontakt"}>
            <p className="btn">{t("pageHome.momente.btn")}</p>
          </Link>
        </div>

        <div>
          <Image
            src="/img/home/Hochzeitsfotograf-Augsburg2-min.avif"
            height={750}
            width={550}
            alt="Hochzeitsfotograf Starnberg, Hochzeitsfotograf München, Hochzeitsfotograf Augsburg"
          />
        </div>
      </article>
    </section>
  );
};

export default Momente;
