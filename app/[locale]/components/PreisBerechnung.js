"use client";
import { useEffect, useState } from "react";
import styles from "../styles/PreisBerechnung.module.css";

const PreisBerechnung = () => {
  const [rangeval, setRangeval] = useState();
  const [km, setKm] = useState();

  const [hprice, setHprice] = useState();
  const [kmprice, setKmprice] = useState();
  const [akteullerStdPrice, setAktuellerStdPrice] = useState();

  const [gesamtPrice, setGesamtPrice] = useState();

  const whiteStd = 320;
  const silverStd = 299;
  const goldStd = 285;
  const diamand = 275;

  const getPrice = (e) => {
    setRangeval(Number(e.currentTarget.value));
  };

  useEffect(() => {
    if (rangeval < 4) {
      setHprice(rangeval * whiteStd);
      setAktuellerStdPrice(whiteStd);
    } else if (rangeval > 3 && rangeval <= 6) {
      setHprice(rangeval * silverStd);
      setAktuellerStdPrice(silverStd);
    } else if (rangeval >= 7 && rangeval <= 8) {
      setHprice(rangeval * goldStd);
      setAktuellerStdPrice(goldStd);
    } else if (rangeval > 8) {
      setHprice(rangeval * diamand);
      setAktuellerStdPrice(diamand);
    } else {
      setHprice("Bitte Wert eingeben");
    }
  }, [rangeval]);

  const getKM = (e) => {
    setKm(Number(e.currentTarget.value));
  };

  useEffect(() => {
    setKmprice(Number((km * 0.45).toFixed(2)));
  }, [km]);

  //Gesamtpreis berechnen

  useEffect(() => {
    if (km >= 400) {
      setGesamtPrice(hprice + kmprice + 100);
    } else if (km < 400) {
      setGesamtPrice(hprice + kmprice);
    } else if (Number.isNaN(kmprice) && rangeval === undefined) {
      setGesamtPrice("Bitte alle Daten eingeben.");
    }
  }, [kmprice, hprice]);

  return (
    <section className={styles.preisrechner}>
      <h2>Preisrechner</h2>
      <h6>Marzio Costantini Hochzeitsfotograf</h6>
      <hr />
      <section className={styles.preisrechnerWrapper}>
        <article>
          <h4>Daten eingabe:</h4>
          <div className={styles.datenEingabe}>
            <div className={styles.label}>
              <h5>Stundenanzahl wählen:*</h5>
              <h5 className="output">
                {rangeval === undefined
                  ? ""
                  : ` aktuell ${rangeval}  Stunden ausgewähl`}
              </h5>
            </div>

            <input type="range" min="3" max="16" onChange={getPrice} />
            <div className={styles.label}>
              <h5>Gesamte kilometeranzahl eingeben (Hin- und Rückweg):*</h5>
              <h5>ab 82327 Tutzing</h5>
            </div>

            <input type="number" onChange={getKM} />
          </div>
        </article>
        <article>
          <h4>Geschätze Gesamtkosten:</h4>
          <div className={styles.wrapperZettel}>
            <div className={styles.StdKosten}>
              <div>
                <h5>Stunden Kosten</h5>
                <p
                  style={
                    rangeval === undefined
                      ? { display: "none" }
                      : { display: "block" }
                  }
                >
                  Preis pro Stunden: {akteullerStdPrice} €
                </p>
              </div>
              <h5>{rangeval === undefined ? "0 €" : `${hprice} €`} </h5>
            </div>
            <div className={styles.FahrtKosten}>
              <div>
                <h5>Fahrtkosten</h5>
                <p>Fahrtkosten werden mit 0,45 € pro KM berechnet</p>
              </div>
              <h5>{Number.isNaN(kmprice) ? "0 €" : `${kmprice} €`}</h5>
            </div>
            <div style={km >= 400 ? { display: "block" } : { display: "none" }}>
              <div className={styles.Übernachtung}>
                <div className={styles.Übernachtunginner}>
                  <h5>Übernachtungskosten</h5>
                  <p>
                    Ab 400km entfernung, wird noch eine Hotelübernachtung
                    berechnet.
                  </p>
                </div>
                <h5> ca. 100 €</h5>
              </div>
            </div>
            <hr />

            <div className={styles.gesamtPreis}>
              <h5>Gesamtpreis:</h5>
              <h5>
                {gesamtPrice} {typeof gesamtPrice == "string" ? "" : "€"}
              </h5>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

export default PreisBerechnung;
