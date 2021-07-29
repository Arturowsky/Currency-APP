import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// STYLES
import "./styles/home.scss";
// IMAGES
import calc from "./assets/images/calc.svg";
import line from "./assets/images/line.svg";
import plus from "./assets/images/plus.svg";
import check from "./assets/images/check-all.svg";
import poland from "./assets/flags/poland.svg";
import uk from "./assets/flags/uk.svg";
import eu from "./assets/flags/eu.svg";
import usa from "./assets/flags/usa.svg";
import norway from "./assets/flags/norway.svg";
import czech from "./assets/flags/czech.svg";
import thailand from "./assets/flags/thailand.svg";
import australia from "./assets/flags/australia.svg";
import hongkong from "./assets/flags/hongkong.svg";
import canada from "./assets/flags/canada.svg";
import hungary from "./assets/flags/hungary.svg";
import switzerland from "./assets/flags/switzerland.svg";
import sweden from "./assets/flags/sweden.svg";
// IMAGES FOR SECOND ARRAY

import ukraine from "./assets/flags/ukraine.svg";
import japan from "./assets/flags/japan.svg";
import denmark from "./assets/flags/denmark.svg";
import croatia from "./assets/flags/croatia.svg";
import bulgaria from "./assets/flags/bulgaria.svg";
import romania from "./assets/flags/romania.svg";
import turkey from "./assets/flags/turkey.svg";
import chile from "./assets/flags/chile.svg";
import mexico from "./assets/flags/mexico.svg";
import brazil from "./assets/flags/brazil.svg";
import southafrica from "./assets/flags/south-africa.svg";
import malaysia from "./assets/flags/malaysia.svg";
import add from "./assets/images/add.svg";

const Home = () => {
  const [scroll, setScroll] = useState(false);
  const [pln, setPln] = useState(1);
  const [ukgbp, setUkgbp] = useState({ currency: "", code: "", vision: true });
  const [euro, setEuro] = useState({ currency: "", code: "", vision: true });
  const [usd, setUsd] = useState({ currency: "", code: "", vision: true });
  const [nok, setNok] = useState({ currency: "", code: "", vision: true });
  const [sek, setSek] = useState({ currency: "", code: "", vision: true });
  const [czk, setCzk] = useState({ currency: "", code: "", vision: true });
  const [thb, setThb] = useState({ currency: "", code: "", vision: true });
  const [aud, setAud] = useState({ currency: "", code: "", vision: true });
  const [hkn, setHkn] = useState({ currency: "", code: "", vision: true });
  const [cad, setCad] = useState({ currency: "", code: "", vision: true });
  const [huf, setHuf] = useState({ currency: "", code: "", vision: true });
  const [chf, setChf] = useState({ currency: "", code: "", vision: true });
  const [uah, setUah] = useState({ currency: "", code: "", vision: true });
  const [jpy, setJpy] = useState({ currency: "", code: "", vision: true });
  const [dkk, setDkk] = useState({ currency: "", code: "", vision: true });
  const [hrk, setHrk] = useState({ currency: "", code: "", vision: true });
  const [bgn, setBgn] = useState({ currency: "", code: "", vision: true });
  const [ron, setRon] = useState({ currency: "", code: "", vision: true });
  const [trytur, setTrytur] = useState({
    currency: "",
    code: "",
    vision: true,
  });
  const [clp, setClp] = useState({ currency: "", code: "", vision: true });
  const [mxn, setMxn] = useState({ currency: "", code: "", vision: true });
  const [zar, setZar] = useState({ currency: "", code: "", vision: true });
  const [brl, setBrl] = useState({ currency: "", code: "", vision: true });
  const [myr, setMyr] = useState({ currency: "", code: "", vision: true });
  // MENU ON/OFF
  const [openMenu, setOpenMenu] = useState(-200);
  // VISIBILITY
  const [visiblestate, setVisiblestate] = useState(true);
  const inputEl = useRef(null);
  // BTN CALC HANDLER
  const onBtnClick = () => {
    inputEl.current.focus();
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  useEffect(() => {
    AOS.init();
    const pos = window.scrollY;

    console.log(pos);

    const fetchData = async () => {
      const currencyData = await axios(
        `https://api.nbp.pl/api/exchangerates/tables/a/`
      );
      //   setExchange({ ipaddress: address.data.query, isp: address.data.isp, org: address.data.org, as: address.data.as, region: address.data.regionName, timezone: address.data.timezone})
      setUkgbp({
        currency: currencyData.data[0].rates[10].currency,
        code: currencyData.data[0].rates[10].code,
        mid: currencyData.data[0].rates[10].mid,
        vision: true,
      });
      setEuro({
        currency: currencyData.data[0].rates[7].currency,
        code: currencyData.data[0].rates[7].code,
        mid: currencyData.data[0].rates[7].mid,
        vision: true,
      });
      setUsd({
        currency: currencyData.data[0].rates[1].currency,
        code: currencyData.data[0].rates[1].code,
        mid: currencyData.data[0].rates[1].mid,
        vision: true,
      });
      setNok({
        currency: currencyData.data[0].rates[16].currency,
        code: currencyData.data[0].rates[16].code,
        mid: currencyData.data[0].rates[16].mid,
        vision: true,
      });
      setSek({
        currency: currencyData.data[0].rates[17].currency,
        code: currencyData.data[0].rates[17].code,
        mid: currencyData.data[0].rates[17].mid,
        vision: true,
      });
      setCzk({
        currency: currencyData.data[0].rates[13].currency,
        code: currencyData.data[0].rates[13].code,
        mid: currencyData.data[0].rates[13].mid,
        vision: true,
      });
      setThb({
        currency: currencyData.data[0].rates[0].currency,
        code: currencyData.data[0].rates[0].code,
        mid: currencyData.data[0].rates[0].mid,
        vision: true,
      });
      setAud({
        currency: currencyData.data[0].rates[2].currency,
        code: currencyData.data[0].rates[2].code,
        mid: currencyData.data[0].rates[2].mid,
        vision: true,
      });
      setHkn({
        currency: currencyData.data[0].rates[3].currency,
        code: currencyData.data[0].rates[3].code,
        mid: currencyData.data[0].rates[3].mid,
        vision: true,
      });
      setCad({
        currency: currencyData.data[0].rates[4].currency,
        code: currencyData.data[0].rates[4].code,
        mid: currencyData.data[0].rates[4].mid,
        vision: true,
      });
      setHuf({
        currency: currencyData.data[0].rates[8].currency,
        code: currencyData.data[0].rates[8].code,
        mid: currencyData.data[0].rates[8].mid,
        vision: true,
      });
      setChf({
        currency: currencyData.data[0].rates[9].currency,
        code: currencyData.data[0].rates[9].code,
        mid: currencyData.data[0].rates[9].mid,
        vision: true,
      });
      setUah({
        currency: currencyData.data[0].rates[11].currency,
        code: currencyData.data[0].rates[11].code,
        mid: currencyData.data[0].rates[11].mid,
        vision: false,
      });
      setJpy({
        currency: currencyData.data[0].rates[12].currency,
        code: currencyData.data[0].rates[12].code,
        mid: currencyData.data[0].rates[12].mid,
        vision: false,
      });
      setDkk({
        currency: currencyData.data[0].rates[14].currency,
        code: currencyData.data[0].rates[14].code,
        mid: currencyData.data[0].rates[14].mid,
        vision: false,
      });
      setHrk({
        currency: currencyData.data[0].rates[18].currency,
        code: currencyData.data[0].rates[18].code,
        mid: currencyData.data[0].rates[18].mid,
        vision: false,
      });
      setBgn({
        currency: currencyData.data[0].rates[20].currency,
        code: currencyData.data[0].rates[20].code,
        mid: currencyData.data[0].rates[20].mid,
        vision: false,
      });
      setRon({
        currency: currencyData.data[0].rates[19].currency,
        code: currencyData.data[0].rates[19].code,
        mid: currencyData.data[0].rates[19].mid,
        vision: false,
      });
      setTrytur({
        currency: currencyData.data[0].rates[21].currency,
        code: currencyData.data[0].rates[21].code,
        mid: currencyData.data[0].rates[21].mid,
        vision: false,
      });
      setClp({
        currency: currencyData.data[0].rates[23].currency,
        code: currencyData.data[0].rates[23].code,
        mid: currencyData.data[0].rates[23].mid,
        vision: false,
      });
      setMxn({
        currency: currencyData.data[0].rates[25].currency,
        code: currencyData.data[0].rates[25].code,
        mid: currencyData.data[0].rates[25].mid,
        vision: false,
      });
      setZar({
        currency: currencyData.data[0].rates[26].currency,
        code: currencyData.data[0].rates[26].code,
        mid: currencyData.data[0].rates[26].mid,
        vision: false,
      });
      setBrl({
        currency: currencyData.data[0].rates[27].currency,
        code: currencyData.data[0].rates[27].code,
        mid: currencyData.data[0].rates[27].mid,
        vision: false,
      });
      setMyr({
        currency: currencyData.data[0].rates[28].currency,
        code: currencyData.data[0].rates[28].code,
        mid: currencyData.data[0].rates[28].mid,
        vision: false,
      });
    };
    fetchData();
  }, []);

  const countries = [
    {
      flag: uk,
      code: ukgbp.code,
      name: ukgbp.currency,
      ratio: pln === 1 ? ukgbp.mid : (pln / ukgbp.mid).toFixed(2),
      plny: `1 PLN = ${(1 / ukgbp.mid).toFixed(4)} ${ukgbp.code}`,
      visibility: ukgbp.vision,
    },
    {
      flag: eu,
      code: euro.code,
      name: euro.currency,
      ratio: pln === 1 ? euro.mid : (pln / euro.mid).toFixed(2),
      plny: `1 PLN = ${(1 / euro.mid).toFixed(4)} ${euro.code}`,
      visibility: euro.vision,
    },
    {
      flag: norway,
      code: nok.code,
      name: nok.currency,
      ratio: pln === 1 ? nok.mid : (pln / nok.mid).toFixed(2),
      plny: `1 PLN = ${(1 / nok.mid).toFixed(4)} ${nok.code}`,
      visibility: nok.vision,
    },
    {
      flag: usa,
      code: usd.code,
      name: usd.currency,
      ratio: pln === 1 ? usd.mid : (pln / usd.mid).toFixed(2),
      plny: `1 PLN = ${(1 / usd.mid).toFixed(4)} ${usd.code}`,
      visibility: usd.vision,
    },
    {
      flag: sweden,
      code: sek.code,
      name: sek.currency,
      ratio: pln === 1 ? sek.mid : (pln / sek.mid).toFixed(2),
      plny: `1 PLN = ${(1 / sek.mid).toFixed(4)} ${sek.code}`,
      visibility: sek.vision,
    },
    {
      flag: canada,
      code: cad.code,
      name: cad.currency,
      ratio: pln === 1 ? cad.mid : (pln / cad.mid).toFixed(2),
      plny: `1 PLN = ${(1 / cad.mid).toFixed(4)} ${cad.code}`,
      visibility: cad.vision,
    },
    {
      flag: hungary,
      code: huf.code,
      name: huf.currency,
      ratio: pln === 1 ? huf.mid : (pln / huf.mid).toFixed(2),
      plny: `1 PLN = ${(1 / huf.mid).toFixed(4)} ${huf.code}`,
      visibility: huf.vision,
    },
    {
      flag: switzerland,
      code: chf.code,
      name: chf.currency,
      ratio: pln === 1 ? chf.mid : (pln / chf.mid).toFixed(2),
      plny: `1 PLN = ${(1 / chf.mid).toFixed(4)} ${chf.code}`,
      visibility: chf.vision,
    },
    {
      flag: czech,
      code: czk.code,
      name: czk.currency,
      ratio: pln === 1 ? czk.mid : (pln / czk.mid).toFixed(2),
      plny: `1 PLN = ${(1 / czk.mid).toFixed(4)} ${czk.code}`,
      visibility: czk.vision,
    },
    {
      flag: thailand,
      code: thb.code,
      name: thb.currency,
      ratio: pln === 1 ? thb.mid : (pln / thb.mid).toFixed(2),
      plny: `1 PLN = ${(1 / thb.mid).toFixed(4)} ${thb.code}`,
      visibility: thb.vision,
    },
    {
      flag: australia,
      code: aud.code,
      name: aud.currency,
      ratio: pln === 1 ? aud.mid : (pln / aud.mid).toFixed(2),
      plny: `1 PLN = ${(1 / aud.mid).toFixed(4)} ${aud.code}`,
      visibility: aud.vision,
    },
    {
      flag: hongkong,
      code: hkn.code,
      name: hkn.currency,
      ratio: pln === 1 ? hkn.mid : (pln / hkn.mid).toFixed(2),
      plny: `1 PLN = ${(1 / hkn.mid).toFixed(4)} ${hkn.code}`,
      visibility: hkn.vision,
    },
    {
      flag: ukraine,
      code: uah.code,
      name: uah.currency,
      ratio: pln === 1 ? uah.mid : (pln / uah.mid).toFixed(2),
      plny: `1 PLN = ${(1 / uah.mid).toFixed(4)} ${uah.code}`,
      visibility: uah.vision,
    },
    {
      flag: japan,
      code: jpy.code,
      name: jpy.currency,
      ratio: pln === 1 ? jpy.mid : (pln / jpy.mid).toFixed(2),
      plny: `1 PLN = ${(1 / jpy.mid).toFixed(4)} ${jpy.code}`,
      visibility: jpy.vision,
    },
    {
      flag: denmark,
      code: dkk.code,
      name: dkk.currency,
      ratio: pln === 1 ? dkk.mid : (pln / dkk.mid).toFixed(2),
      plny: `1 PLN = ${(1 / dkk.mid).toFixed(4)} ${dkk.code}`,
      visibility: dkk.vision,
    },
    {
      flag: croatia,
      code: hrk.code,
      name: hrk.currency,
      ratio: pln === 1 ? hrk.mid : (pln / hrk.mid).toFixed(2),
      plny: `1 PLN = ${(1 / hrk.mid).toFixed(4)} ${hrk.code}`,
      visibility: hrk.vision,
    },
    {
      flag: bulgaria,
      code: bgn.code,
      name: bgn.currency,
      ratio: pln === 1 ? bgn.mid : (pln / bgn.mid).toFixed(2),
      plny: `1 PLN = ${(1 / bgn.mid).toFixed(4)} ${bgn.code}`,
      visibility: bgn.vision,
    },
    {
      flag: romania,
      code: ron.code,
      name: ron.currency,
      ratio: pln === 1 ? ron.mid : (pln / ron.mid).toFixed(2),
      plny: `1 PLN = ${(1 / ron.mid).toFixed(4)} ${ron.code}`,
      visibility: ron.vision,
    },
    {
      flag: turkey,
      code: trytur.code,
      name: trytur.currency,
      ratio: pln === 1 ? trytur.mid : (pln / trytur.mid).toFixed(2),
      plny: `1 PLN = ${(1 / trytur.mid).toFixed(4)} ${trytur.code}`,
      visibility: trytur.vision,
    },
    {
      flag: chile,
      code: clp.code,
      name: clp.currency,
      ratio: pln === 1 ? clp.mid : (pln / clp.mid).toFixed(2),
      plny: `1 PLN = ${(1 / clp.mid).toFixed(4)} ${clp.code}`,
      visibility: clp.vision,
    },
    {
      flag: mexico,
      code: mxn.code,
      name: mxn.currency,
      ratio: pln === 1 ? mxn.mid : (pln / mxn.mid).toFixed(2),
      plny: `1 PLN = ${(1 / mxn.mid).toFixed(4)} ${mxn.code}`,
      visibility: mxn.vision,
    },
    {
      flag: southafrica,
      code: zar.code,
      name: `${zar.currency.slice(0, 4)} (RPA)`,
      ratio: pln === 1 ? zar.mid : (pln / zar.mid).toFixed(2),
      plny: `1 PLN = ${(1 / zar.mid).toFixed(4)} ${zar.code}`,
      visibility: zar.vision,
    },
    {
      flag: brazil,
      code: brl.code,
      name: brl.currency,
      ratio: pln === 1 ? brl.mid : (pln / brl.mid).toFixed(2),
      plny: `1 PLN = ${(1 / brl.mid).toFixed(4)} ${brl.code}`,
      visibility: brl.vision,
    },
    {
      flag: malaysia,
      code: myr.code,
      name: myr.currency,
      ratio: pln === 1 ? myr.mid : (pln / myr.mid).toFixed(2),
      plny: `1 PLN = ${(1 / myr.mid).toFixed(4)} ${myr.code}`,
      visibility: myr.vision,
    },
  ];
  return (
    <div className="container">
      <div
      className={scroll ? "currency-item-sticky" : "currency-item"}
        
      >
        <div className="currency-flag">
          <img src={poland} alt="poland" />
        </div>
        <div className="currency-name">
          <h3>PLN</h3>
          <p>polski złoty</p>
        </div>
        <div className="currency-number">
          <input
            type="number"
            placeholder="1"
            value={pln}
            onChange={(e) => setPln(e.target.value)}
            min="0"
            ref={inputEl}
          />
        </div>
        <img src={line} alt="" />
        <div className="currency-calc">
          {/* <img src={calc} alt="" /> */}
          <button
            className="btn-calc"
            aria-label="Provide number"
            onClick={onBtnClick}
          >
            <img src={calc} alt="" />
          </button>
        </div>
      </div>
      {countries.map((item, index) => (
        <div
          className="currencies-single-item"
          data-aos="fade-up"
          style={{ display: `${item.visibility === true ? "grid" : "none"}` }}
          key={index}
        >
          <div className="currencies-flag">
            <img src={item.flag} alt="" />
          </div>
          <div className="currencies-name">
            <h3>{item.code}</h3>
            <p>{item.name}</p>
          </div>
          <div className="currencies-value">
            <h3>{item.ratio}</h3>
            <p>{item.plny}</p>
          </div>
        </div>
      ))}

      <div className="button-container">
        <button className="btn-add-country" onClick={() => setOpenMenu(0)}>
          <img src={plus} alt="" />
          <span>dodaj walutę</span>
        </button>
      </div>
      <div
        className="more-currencies"
        style={{ transform: `translateX(${openMenu}%)` }}
      >
        <button
          className="btn-add-country-opened"
          onClick={() => setOpenMenu(-200)}
        >
          <img src={plus} alt="" />
          <span>dodaj zaznaczone</span>
        </button>
        <div className="more-container">
          <div
            className="more-item"
            data-aos="fade-up"
            onClick={() =>
              setUah({
                vision: true,
                currency: uah.currency,
                code: uah.code,
                mid: uah.mid,
              })
            }
          >
            <img
              src={ukraine}
              alt="ukraine"
              style={{ width: "16px", height: "16px" }}
            />
            <p>
              UAH <span>- hrywna (Ukraina)</span>
            </p>
            <img src={uah.vision === true ? check : add} alt="add country" />
          </div>
          <div
            className="more-item"
            data-aos="fade-up"
            onClick={() =>
              setJpy({
                vision: true,
                currency: jpy.currency,
                code: jpy.code,
                mid: jpy.mid,
              })
            }
          >
            <img
              src={japan}
              alt="japan"
              style={{ width: "16px", height: "16px" }}
            />
            <p>
              JPY <span>- jen (Japonia)</span>
            </p>
            <img src={jpy.vision === true ? check : add} alt="add country" />
          </div>
          <div
            className="more-item"
            data-aos="fade-up"
            onClick={() =>
              setDkk({
                vision: true,
                currency: dkk.currency,
                code: dkk.code,
                mid: dkk.mid,
              })
            }
          >
            <img
              src={denmark}
              alt="denmark"
              style={{ width: "16px", height: "16px" }}
            />
            <p>
              DKK <span>- korona duńska</span>
            </p>
            <img src={dkk.vision === true ? check : add} alt="add country" />
          </div>
          <div
            className="more-item"
            data-aos="fade-up"
            onClick={() =>
              setHrk({
                vision: true,
                currency: hrk.currency,
                code: hrk.code,
                mid: hrk.mid,
              })
            }
          >
            <img
              src={croatia}
              alt="croatia"
              style={{ width: "16px", height: "16px" }}
            />
            <p>
              HRK <span>- kuna (Chorwacja)</span>
            </p>
            <img src={hrk.vision === true ? check : add} alt="add country" />
          </div>
          <div
            className="more-item"
            data-aos="fade-up"
            onClick={() =>
              setBgn({
                vision: true,
                currency: bgn.currency,
                code: bgn.code,
                mid: bgn.mid,
              })
            }
          >
            <img
              src={bulgaria}
              alt="bulgaria"
              style={{ width: "16px", height: "16px" }}
            />
            <p>
              BGN <span>- lew (Bułgaria)</span>
            </p>
            <img src={bgn.vision === true ? check : add} alt="add country" />
          </div>
          <div
            className="more-item"
            data-aos="fade-up"
            onClick={() =>
              setRon({
                vision: true,
                currency: ron.currency,
                code: ron.code,
                mid: ron.mid,
              })
            }
          >
            <img
              src={romania}
              alt="romania"
              style={{ width: "16px", height: "16px" }}
            />
            <p>
              RON <span>- lej rumuński</span>
            </p>
            <img src={ron.vision === true ? check : add} alt="add country" />
          </div>
          <div
            className="more-item"
            data-aos="fade-up"
            onClick={() =>
              setTrytur({
                vision: true,
                currency: trytur.currency,
                code: trytur.code,
                mid: trytur.mid,
              })
            }
          >
            <img
              src={turkey}
              alt="turkey"
              style={{ width: "16px", height: "16px" }}
            />
            <p>
              TRY <span>- lira turecka</span>
            </p>
            <img src={trytur.vision === true ? check : add} alt="add country" />
          </div>
          <div
            className="more-item"
            data-aos="fade-up"
            onClick={() =>
              setClp({
                vision: true,
                currency: clp.currency,
                code: clp.code,
                mid: clp.mid,
              })
            }
          >
            <img
              src={chile}
              alt="chile"
              style={{ width: "16px", height: "16px" }}
            />
            <p>
              CLP <span>- peso chilijskie</span>
            </p>
            <img src={clp.vision === true ? check : add} alt="add country" />
          </div>
          <div
            className="more-item"
            data-aos="fade-up"
            onClick={() =>
              setMxn({
                vision: true,
                currency: mxn.currency,
                code: mxn.code,
                mid: mxn.mid,
              })
            }
          >
            <img
              src={mexico}
              alt="mexico"
              style={{ width: "16px", height: "16px" }}
            />
            <p>
              MXN <span>- peso meksykańskie</span>
            </p>
            <img src={mxn.vision === true ? check : add} alt="add country" />
          </div>
          <div
            className="more-item"
            data-aos="fade-up"
            onClick={() =>
              setZar({
                vision: true,
                currency: zar.currency,
                code: zar.code,
                mid: zar.mid,
              })
            }
          >
            <img
              src={southafrica}
              alt="south-africa"
              style={{ width: "16px", height: "16px" }}
            />
            <p>
              ZAR <span>- rand (Republika Południowej Afryki)</span>
            </p>
            <img src={zar.vision === true ? check : add} alt="add country" />
          </div>
          <div
            className="more-item"
            data-aos="fade-up"
            onClick={() =>
              setBrl({
                vision: true,
                currency: brl.currency,
                code: brl.code,
                mid: brl.mid,
              })
            }
          >
            <img
              src={brazil}
              alt="brazil"
              style={{ width: "16px", height: "16px" }}
            />
            <p>
              BRL <span>- real (Brazylia)</span>
            </p>
            <img src={brl.vision === true ? check : add} alt="add country" />
          </div>
          <div
            className="more-item"
            data-aos="fade-up"
            onClick={() =>
              setMyr({
                vision: true,
                currency: myr.currency,
                code: myr.code,
                mid: myr.mid,
              })
            }
          >
            <img
              src={malaysia}
              alt="malaysia"
              style={{ width: "16px", height: "16px" }}
            />
            <p>
              MYR <span>- ringgit (Malezja)</span>
            </p>
            <img src={myr.vision === true ? check : add} alt="add country" />
          </div>
        </div>
      </div>
      <div className="placeholder"></div>
    </div>
  );
};

export default Home;
