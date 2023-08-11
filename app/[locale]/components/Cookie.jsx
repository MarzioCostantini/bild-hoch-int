"use client";

import Link from "next/link";
import styles from "../styles/Cookie.module.css";

import { setCookie, getCookie } from "cookies-next";
import { useState } from "react";

const CookieBanner = () => {
  const [open, setOpen] = useState(true);

  const setCookiee = () => {
    setCookie("cookieKey", "akzeptiert");
    // setOpen(false);
  };

  const angenommen = getCookie("cookieKey");
  console.log(angenommen);

  return (
    <section className="cookie">
      <article>
        <p>
          Wir nutzen Cookies auf unserer Website. <br /> Bitte Akzeptiere sie
          die Cookies um Fortzufahren
        </p>
        <div>
          <Link href="/datenschutz">Datenschuatz</Link>
          <Link href="/impressum">Impressum</Link>
        </div>

        <button onClick={setCookiee} className="btn">
          Akzepzieren
        </button>
        {/* <button onClick={GETCookie} className="btn">
          GET
        </button> */}
      </article>
    </section>
  );
};

export default CookieBanner;
