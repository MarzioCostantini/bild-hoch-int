"use client";

import { useEffect, useState } from "react";
import { Arrowicon } from "../../../public/img/svgs/ArrowIcon";
import styles from "../styles/ScrollToTop.module.css";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-2">
      <div
        style={isVisible === false ? { display: "none" } : { display: "block" }}
      >
        <div onClick={scrollToTop} className={styles.ScrollToTop}>
          <Arrowicon />
        </div>
      </div>
    </div>
  );
};
