"use client";
import Image from "next/image";
import styles from "../styles/weddingOverview.module.css";
// import weddingData from "../../../WeddingData.json";
import { useState } from "react";
import Link from "next/link";

const WeddingFilterOverview = () => {
  const [weddingItems, setWeddinItems] = useState(6);
  // const limitWeddingData = weddingData.slice(0, weddingItems);
  return (
    <section>
      <section className={styles.overviewwrapper}>
        {/* {limitWeddingData.map((wedding, index) => (
          <article key={index} className={styles.weddingItem}>
            <Link href={`/hochzeitsreportagen/${wedding.link}`}>
              <div>
                <Image
                  src={wedding.thumbnail}
                  height={300}
                  width={500}
                  alt={wedding.keyword1}
                />
                <h2>{wedding.title}</h2>
                <p>{`${wedding.description.slice(0, 150)}...`}</p>
              </div>
            </Link>
          </article>
        ))} */}
      </section>
      {/* <div className={weddingItems > weddingData.length ? "none" : "btnArea"}>
        <button
          onClick={() => setWeddinItems(weddingItems + 6)}
          className="btn"
        >
          + MORE
        </button>
      </div> */}
    </section>
  );
};

export default WeddingFilterOverview;
