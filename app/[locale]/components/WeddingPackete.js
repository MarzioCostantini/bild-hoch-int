"use client";
import Image from "next/image";
import styles from "../styles/WeddingPackete.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import McImage from "./McImage";

const WeddingPackete = ({
  title,
  packet1Title,
  packet1Fahrt,
  packet2Title,
  packet2Fahrt,
  packet3Title,
  packet3Fahrt,
  packet4Title,
  packet4Fahrt,
  beratung,
  bearbeitung,
  onlineGal,
  usbStick,
  nichtsPassendes,
  kmPreis,
  keineAnfItalien,
  packetDa1,
  packetDa2,
  packetDa3,
  preisAnf,
}) => {
  const pathname = usePathname();

  return (
    <section className={styles.weddingPack}>
      <div>
        <h3>{title}</h3>
        <p>Choose Your Favorite...</p>
      </div>
      <article>
        <McImage
          src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1694526017/Pages/Leistungen/packet01_srlybb.jpg"
          height={1000}
          width={1000}
          alt="Hochzeitsfotograf München Starnberg Augsburg Garmisch-partenkirchen Gardasee Florenz"
          style={{ width: "100%", height: "auto", maxWidth: "600px" }}
        />
        <div>
          <h3>{packet1Title}</h3>
          <p>* {packetDa1}</p>
          <ul>
            <li> {beratung}</li>
            <li>{bearbeitung}</li>
            <li>{packet1Fahrt}</li>
            <li>{onlineGal}</li>
            <li>{usbStick}</li>
          </ul>
          {pathname === "/preisliste" ||
          pathname === "/en/preisliste" ||
          pathname === "/it/preisliste" ? (
            <p>1794,- €</p>
          ) : (
            <Link className="btn" href="/kontakt">
              {preisAnf}
            </Link>
          )}
        </div>
      </article>
      <article>
        <McImage
          src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1694526556/Pages/Leistungen/packet02_vci9ef.jpg"
          height={500}
          width={800}
          alt="Hochzeitsfotograf München Starnberg Augsburg Garmisch-partenkirchen Gardasee Florenz"
          style={{ width: "100%", height: "auto", maxWidth: "600px" }}
        />
        <div>
          <h3>{packet2Title}</h3>
          <p>* {packetDa2}</p>
          <ul>
            <li> {beratung}</li>
            <li>{bearbeitung}</li>
            <li>{packet2Fahrt}</li>
            <li>{onlineGal}</li>
            <li>{usbStick}</li>
          </ul>
          {pathname === "/preisliste" ||
          pathname === "/en/preisliste" ||
          pathname === "/it/preisliste" ? (
            <p>2280,- €</p>
          ) : (
            <Link className="btn" href="/kontakt">
              {preisAnf}
            </Link>
          )}
        </div>
      </article>
      <article>
        <McImage
          src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1694526555/Pages/Leistungen/Packet03_mlcfn7.jpg"
          height={1000}
          width={1000}
          alt="Hochzeitsfotograf München Starnberg Augsburg Garmisch-partenkirchen Gardasee Florenz"
          style={{ width: "100%", height: "auto", maxWidth: "600px" }}
        />
        <div>
          <h3>{packet3Title}</h3>
          <p>* {packetDa3}</p>
          <ul>
            <li> {beratung}</li>
            <li>{bearbeitung}</li>
            <li>{packet3Fahrt}</li>
            <li>{onlineGal}</li>
            <li>{usbStick}</li>
          </ul>
          {pathname === "/preisliste" ||
          pathname === "/en/preisliste" ||
          pathname === "/it/preisliste" ? (
            <p>2750,- €</p>
          ) : (
            <Link className="btn" href="/kontakt">
              {preisAnf}
            </Link>
          )}
        </div>
      </article>
      <article>
        <McImage
          src="https://res.cloudinary.com/dzlk6w9fd/image/upload/v1694526556/Pages/Leistungen/packet04_beozzl.jpg"
          height={1000}
          width={1000}
          alt="Hochzeitsfotograf München Starnberg Augsburg Garmisch-partenkirchen Gardasee Florenz"
          style={{ width: "100%", height: "auto", maxWidth: "600px" }}
        />
        <div>
          <h3>{packet4Title}</h3>
          <p> * FULL DAY ( 10H + )</p>
          <ul>
            <li> {beratung}</li>
            <li>{bearbeitung}</li>
            <li>{packet4Fahrt}</li>
            <li>{onlineGal}</li>
            <li>{usbStick}</li>
          </ul>
          {pathname === "/preisliste" ||
          pathname === "/en/preisliste" ||
          pathname === "/it/preisliste" ? (
            <p>275,- € / h</p>
          ) : (
            <Link className="btn" href="/kontakt">
              {preisAnf}
            </Link>
          )}
        </div>
      </article>
      <div className={styles.zusatzText}>
        <p>{nichtsPassendes}</p>
        <p>{kmPreis}</p>
        <p>{keineAnfItalien}</p>
      </div>
    </section>
  );
};

export default WeddingPackete;
