import weddingData from "../../../WeddingData.json";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/weddingOverviewFilter.module.css";
import { useTranslations } from "next-intl";

const FilterWedding = () => {
  const t = useTranslations();

  let favWedding = weddingData
    .filter((elt) => {
      return elt.favourite === true;
    })
    .slice(0, 6);

  return (
    <section className={styles.hochzeitsreportagen}>
      <section className={styles.headings}>
        <h4>
          {t.rich("pageHome.filterWeddings.title", {
            br: () => <br />,
          })}
        </h4>
        <hr />
      </section>
      <section className={styles.overviewwrapper}>
        {favWedding.map((wedding, index) => (
          <article key={index} className={styles.weddingItem}>
            <Link href={`/hochzeitsreportagen/${wedding.link}`}>
              <div>
                <Image
                  src={wedding.thumbnail}
                  height={300}
                  width={400}
                  alt={wedding.keyword1}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
                <h2>{wedding.title}</h2>
                <p>{`${wedding.description.slice(0, 150)}...`}</p>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </section>
  );
};

export default FilterWedding;
