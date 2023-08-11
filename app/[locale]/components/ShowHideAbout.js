"use client";

import { useState } from "react";
import Image from "next/image";

function Tabs({
  details,
  infos,
  reisentitle,
  reisencontent,
  naturtitle,
  naturcontent,
  zwilligetitle,
  zwilligecontent,
  programmierentitle,
  programmierencontent,
  geradetitle,
  geradecontent,
}) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <h4>{infos}</h4>
        <div className="line"></div>
        <ul>
          <li
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            {reisentitle}
          </li>
          <li
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            {naturtitle}
          </li>
          <li
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            {zwilligetitle}
          </li>
          <li
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            {programmierentitle}
          </li>
          <li
            className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(5)}
          >
            {geradetitle}
          </li>
        </ul>
      </div>

      <div className="content-tabs">
        <h4>{details}</h4>
        <section className="line"></section>
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <p>{reisencontent}</p>
          <Image
            src="/img/about/Hochzeitsfotograf_Starnberg_vietnam_bike.png"
            height={450}
            width={600}
            alt="Hochzeitsfotograf Starnberg, München, Garmisch-Partenkirch, Augsburg, Tutzing"
          />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <p>{naturcontent}</p>
          <Image
            src="/img/about/Hochzeitsfotograf_Starnberg_berg-min.jpg"
            height={400}
            width={500}
            alt="Hochzeitsfotograf Starnberg, München, Garmisch-Partenkirch, Augsburg, Tutzing"
          />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <p>{zwilligecontent}</p>
          <Image
            src="/img/about/Hochzeitsfotograf_Starnberg_vietnam-min.jpg"
            height={400}
            width={500}
            alt="Hochzeitsfotograf Starnberg, München, Garmisch-Partenkirch, Augsburg, Tutzing"
          />
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <p>{programmierencontent}</p>
          <Image
            src="/img/about/Hochzeitsfotograf_Starnberg_code-min.jpg"
            height={500}
            width={400}
            alt="Hochzeitsfotograf Starnberg, München, Garmisch-Partenkirch, Augsburg, Tutzing"
          />
        </div>

        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <p>{geradecontent}</p>
          <article>
            <div></div>
            <div></div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
