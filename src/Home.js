import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// STYLES
import "./styles/home.scss";
// IMAGES
import calc from "./assets/images/calc.svg";
import line from "./assets/images/line.svg";
import plus from "./assets/images/plus.svg";
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
const Home = () => {
  const [pln, setPln] = useState(1);
  const [ukgbp, setUkgbp] = useState({ currency: "", code: "", mid: "" });
  const [euro, setEuro] = useState({ currency: "", code: "", mid: "" });
  const [usd, setUsd] = useState({ currency: "", code: "", mid: "" });
  const [nok, setNok] = useState({ currency: "", code: "", mid: "" });
  const [czk, setCzk] = useState({ currency: "", code: "", mid: "" });
  const [thb, setThb] = useState({ currency: "", code: "", mid: "" });
  const [aud, setAud] = useState({ currency: "", code: "", mid: "" });
  const [hkn, setHkn] = useState({ currency: "", code: "", mid: "" });
  const [cad, setCad] = useState({ currency: "", code: "", mid: "" });
  const [huf, setHuf] = useState({ currency: "", code: "", mid: "" });
  const [chf, setChf] = useState({ currency: "", code: "", mid: "" });

  useEffect(() => {
    AOS.init()
    const fetchData = async () => {
      const currencyData = await axios(
        `http://api.nbp.pl/api/exchangerates/tables/a/`
      );
      //   setExchange({ ipaddress: address.data.query, isp: address.data.isp, org: address.data.org, as: address.data.as, region: address.data.regionName, timezone: address.data.timezone})
      setUkgbp({
        currency: currencyData.data[0].rates[10].currency,
        code: currencyData.data[0].rates[10].code,
        mid: currencyData.data[0].rates[10].mid,
      });
      setEuro({
        currency: currencyData.data[0].rates[7].currency,
        code: currencyData.data[0].rates[7].code,
        mid: currencyData.data[0].rates[7].mid,
      });
      setUsd({
        currency: currencyData.data[0].rates[1].currency,
        code: currencyData.data[0].rates[1].code,
        mid: currencyData.data[0].rates[1].mid,
      });
      setNok({
        currency: currencyData.data[0].rates[16].currency,
        code: currencyData.data[0].rates[16].code,
        mid: currencyData.data[0].rates[16].mid,
      });
      setCzk({
        currency: currencyData.data[0].rates[13].currency,
        code: currencyData.data[0].rates[13].code,
        mid: currencyData.data[0].rates[13].mid,
      });
      setThb({
        currency: currencyData.data[0].rates[0].currency,
        code: currencyData.data[0].rates[0].code,
        mid: currencyData.data[0].rates[0].mid,
      });
      setAud({
        currency: currencyData.data[0].rates[2].currency,
        code: currencyData.data[0].rates[2].code,
        mid: currencyData.data[0].rates[2].mid,
      });
      setHkn({
        currency: currencyData.data[0].rates[3].currency,
        code: currencyData.data[0].rates[3].code,
        mid: currencyData.data[0].rates[3].mid,
      });
      setCad({
        currency: currencyData.data[0].rates[4].currency,
        code: currencyData.data[0].rates[4].code,
        mid: currencyData.data[0].rates[4].mid,
      });
      setHuf({
        currency: currencyData.data[0].rates[8].currency,
        code: currencyData.data[0].rates[8].code,
        mid: currencyData.data[0].rates[8].mid,
      });
      setChf({
        currency: currencyData.data[0].rates[9].currency,
        code: currencyData.data[0].rates[9].code,
        mid: currencyData.data[0].rates[9].mid,
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
    },
    {
      flag: eu,
      code: euro.code,
      name: euro.currency,
      ratio: pln === 1 ? euro.mid : (pln / euro.mid).toFixed(2),
      plny: `1 PLN = ${(1 / euro.mid).toFixed(4)} ${euro.code}`,
    },
    {
      flag: norway,
      code: nok.code,
      name: nok.currency,
      ratio: pln === 1 ? nok.mid : (pln / nok.mid).toFixed(2),
      plny: `1 PLN = ${(1 / nok.mid).toFixed(4)} ${nok.code}`,
    },
    {
      flag: usa,
      code: usd.code,
      name: usd.currency,
      ratio: pln === 1 ? usd.mid : (pln / usd.mid).toFixed(2),
      plny: `1 PLN = ${(1 / usd.mid).toFixed(4)} ${usd.code}`,
    },
    {
      flag: canada,
      code: cad.code,
      name: cad.currency,
      ratio: pln === 1 ? cad.mid : (pln / cad.mid).toFixed(2),
      plny: `1 PLN = ${(1 / cad.mid).toFixed(4)} ${cad.code}`,
    },
    {
      flag: hungary,
      code: huf.code,
      name: huf.currency,
      ratio: pln === 1 ? huf.mid : (pln / huf.mid).toFixed(2),
      plny: `1 PLN = ${(1 / huf.mid).toFixed(4)} ${huf.code}`,
    },
    {
      flag: switzerland,
      code: chf.code,
      name: chf.currency,
      ratio: pln === 1 ? chf.mid : (pln / chf.mid).toFixed(2),
      plny: `1 PLN = ${(1 / chf.mid).toFixed(4)} ${chf.code}`,
    },
    {
      flag: czech,
      code: czk.code,
      name: czk.currency,
      ratio: pln === 1 ? czk.mid : (pln / czk.mid).toFixed(2),
      plny: `1 PLN = ${(1 / czk.mid).toFixed(4)} ${czk.code}`,
    },
    {
      flag: thailand,
      code: thb.code,
      name: thb.currency,
      ratio: pln === 1 ? thb.mid : (pln / thb.mid).toFixed(2),
      plny: `1 PLN = ${(1 / thb.mid).toFixed(4)} ${thb.code}`,
    },
    {
      flag: australia,
      code: aud.code,
      name: aud.currency,
      ratio: pln === 1 ? aud.mid : (pln / aud.mid).toFixed(2),
      plny: `1 PLN = ${(1 / aud.mid).toFixed(4)} ${aud.code}`,
    },
    {
      flag: hongkong,
      code: hkn.code,
      name: hkn.currency,
      ratio: pln === 1 ? hkn.mid : (pln / hkn.mid).toFixed(2),
      plny: `1 PLN = ${(1 / hkn.mid).toFixed(4)} ${hkn.code}`,
    },
  ];
  return (
    <div className="container">
      <div className="currency-item" data-aos="fade-up">
        <div className="currency-flag" >
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
          />
        </div>
        <img src={line} alt="" />
        <div className="currency-calc">
          <img src={calc} alt="" />
        </div>
      </div>
      {countries.map((item, index) => (
        <div className="currencies-single-item" data-aos="fade-up">
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
        <button className="btn-add-country">
          <img src={plus} alt="" />
          <span>dodaj walutę</span>
        </button>
      </div>
      <div className="placeholder"></div>
    </div>
  );
};

export default Home;
