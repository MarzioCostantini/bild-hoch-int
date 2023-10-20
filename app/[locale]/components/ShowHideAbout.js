"use client";

import { useState } from "react";
import Image from "next/image";
import McImage from "./McImage";

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
          <McImage
            src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697799663/Components/Hochzeitsfotograf_Starnberg_vietnam_bike_n44yls.png"
            height={450}
            width={600}
            alt="Hochzeitsfotograf Starnberg, München, Garmisch-Partenkirch, Augsburg, Tutzing"
          />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <p>{naturcontent}</p>
          <McImage
            src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697799662/Components/Hochzeitsfotograf_Starnberg_berg-min_zirgpw.jpg"
            height={400}
            width={500}
            alt="Hochzeitsfotograf Starnberg, München, Garmisch-Partenkirch, Augsburg, Tutzing"
          />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <p>{zwilligecontent}</p>
          <McImage
            src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697799664/Components/Hochzeitsfotograf_Starnberg_vietnam-min_qxae4m.jpg"
            height={400}
            width={500}
            alt="Hochzeitsfotograf Starnberg, München, Garmisch-Partenkirch, Augsburg, Tutzing"
          />
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <p>{programmierencontent}</p>
          <McImage
            src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1697799663/Components/Hochzeitsfotograf_Starnberg_code-min_kfeejk.jpg"
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
