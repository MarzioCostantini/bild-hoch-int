"use client";

import Link from "next/link";

import Logo from "../../../public/img/svgs/Logo";

import React, { useState } from "react";

import { usePathname } from "next/navigation";
import Languages from "./Languages";

import CookieConsent from "react-cookie-consent";

const NavMarzio = ({ foto, kontakt, faq, leistungen, about }) => {
  const link = usePathname();

  const [navActive, setNavActive] = useState(null);

  return (
    <header>
      <nav
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
            ? "white-color"
            : ""
        } nav`}
      >
        <ul className={`${navActive ? "active" : ""} nav__menu-list`}>
          <section>
            <div
              className={`${navActive ? "active" : ""} nav__menu-list`}
              onClick={() => {
                setNavActive(false);
              }}
            >
              <li
                className={
                  link == "/"
                    ? "aktiv"
                    : "" || `${navActive ? "active" : ""} nav__menu-list`
                }
              >
                <Link href="/">Home</Link>
              </li>
            </div>
            <div
              className={`${navActive ? "active" : ""} nav__menu-list`}
              onClick={() => {
                setNavActive(false);
              }}
            >
              <li className={link == "/hochzeitsreportagen" ? "aktiv" : ""}>
                <Link href="/hochzeitsreportagen">{foto}</Link>
              </li>
            </div>
            <div
              onClick={() => {
                setNavActive(false);
              }}
              className={`${navActive ? "active" : ""} nav__menu-list`}
            >
              <li className={link == "/kontakt" ? "aktiv" : ""}>
                <Link href="/kontakt">{kontakt}</Link>
              </li>
            </div>
          </section>
          <div className="logo">
            <Link href="/">
              <Logo />
            </Link>
            {/* <LangSwitcher /> */}
          </div>

          <section>
            <div
              onClick={() => {
                setNavActive(false);
              }}
              className={`${navActive ? "active" : ""} nav__menu-list`}
            >
              <li className={link == "/faq" ? "aktiv" : ""}>
                <Link href="/faq">{faq}</Link>
              </li>
            </div>

            <div
              onClick={() => {
                setNavActive(false);
              }}
              className={`${navActive ? "active" : ""} nav__menu-list`}
            >
              <li className={link == "/leistungen" ? "aktiv" : ""}>
                <Link href="/leistungen">{leistungen}</Link>
              </li>
            </div>
            <div
              onClick={() => {
                setNavActive(false);
              }}
              className={`${navActive ? "active" : ""} nav__menu-list`}
            >
              <li className={link == "/about" ? "aktiv" : ""}>
                <Link href="/about">{about}</Link>
              </li>
            </div>
            <Languages />
          </section>
        </ul>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
  );
};

export default NavMarzio;
