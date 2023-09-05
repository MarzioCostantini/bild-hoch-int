import Image from "next/image";
import styles from "../styles/weddingOverview.module.css";
import { useTranslations } from "next-intl";
import data from "../../../messages/de.json";

import Link from "next/link";

const WeddingFilterOverviewNew = () => {
  const t = useTranslations("blog");

  // Gibt mir an Array zurück mit "post1, post2 ... etc"
  const ArraywithPosts = Object.keys(data.blog);

  return (
    <section>
      <section className={styles.overviewwrapper}>
        {ArraywithPosts.map((item, index) => (
          <article key={index} className={styles.weddingItem}>
            <Link href={"hochzeitsreportagen/" + t(`${item}.link`)}>
              <div>
                <Image
                  src={t(`${item}.thumbnail`)}
                  height={300}
                  width={500}
                  alt={t(`${item}.keyword1`)}
                />
                <h2>{t(`${item}.title`)}</h2>
                <p>{t(`${item}.description`).slice(0, 150)}...</p>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </section>
  );
};

export default WeddingFilterOverviewNew;
