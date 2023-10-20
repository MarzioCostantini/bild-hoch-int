// import weddingData from "../../../WeddingData.json";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/weddingOverviewFilter.module.css";
import { useTranslations } from "next-intl";
import data from "../../../messages/de.json";
import McImage from "./McImage";

const FilterWedding = () => {
  // Gibt mir an Array zurück mit "post1, post2 ... etc"
  const ArraywithPosts = Object.keys(data.blog);
  const t = useTranslations();

  // Filtern der Posts, die als Favoriten markiert sind
  const favWedding = ArraywithPosts.filter((item) => {
    return t(`blog.${item}.favourite`) === "true";
  }).slice(0, 6);

  return (
    <section className={styles.hochzeitsreportagen}>
      <section className={styles.headings}>
        <h4>
          {t.rich("pageHome.filterWeddings.title", {
            br: () => <br />,
          })}
        </h4>
        <hr />
        <section className={styles.overviewwrapper}>
          {favWedding.map((item, index) => (
            <article key={index} className={styles.weddingItem}>
              <Link href={"hochzeitsreportagen/" + t(`blog.${item}.link`)}>
                <McImage
                  src={t(`blog.${item}.thumbnail`)}
                  height={300}
                  width={600}
                  alt={t(`blog.${item}.keyword1`)}
                  // style={{ width: "100%", height: "auto" }}
                />
                <div>
                  <h2>{t(`blog.${item}.title`)}</h2>
                  <p>{t(`blog.${item}.description`).slice(0, 150)}...</p>
                  <p className="btn">more</p>
                </div>
              </Link>
            </article>
          ))}
        </section>
      </section>
    </section>
  );
};

export default FilterWedding;
