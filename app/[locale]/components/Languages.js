"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";
import Link from "next-intl/link";
import styles from "../styles/Languages.module.css";

export default function LocaleSwitcher() {
  const link = usePathname();
  // const router = useRouter();
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("--");

  useEffect(() => {
    if (link.includes("/en")) {
      setLang("EN");
    } else if (link.includes("/it")) {
      setLang("IT");
    } else {
      setLang("DE");
    }
  }, [link]);

  return (
    <div>
      <div
        className={`${
          link == "/" ||
          link == "/hochzeitsfotograf-toskana" ||
          link == "/hochzeitsfotograf-gardasee" ||
          link == "/hochzeitsfotograf-mallorca" ||
          link == "/en" ||
          link == "/en/hochzeitsfotograf-toskana" ||
          link == "/en/hochzeitsfotograf-gardasee" ||
          link == "/en/hochzeitsfotograf-mallorca" ||
          link == "/it" ||
          link == "/it/hochzeitsfotograf-toskana" ||
          link == "/it/hochzeitsfotograf-gardasee" ||
          link == "/it/hochzeitsfotograf-mallorca"
            ? "light-font"
            : "dark-font"
        } lang`}
      >
        <p onClick={() => setOpen((current) => !current)}>{lang}</p>
        <div className={`${open ? "" : "no-links"} links`}>
          <Link href="/" locale="de">
            <p onClick={() => setOpen(false)}>DE</p>
          </Link>
          <Link href="/" locale="en">
            <p onClick={() => setOpen(false)}>EN</p>
          </Link>
          <Link href="/" locale="it">
            <p onClick={() => setOpen(false)}>IT</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
