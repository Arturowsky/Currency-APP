import React, { useState, useEffect } from "react";
import axios from "axios";

// STYLES
import "./styles/stats.scss";

// IMAGES
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
import graphstat from "./assets/images/graphstat.svg";

const countriesStats = [
  {
    code: "gbp",
    codename: "GBP",
    currencyname: "funt szterling",
    image: uk
  },
  {
    code: "eur",
    codename: "EUR",
    currencyname: "euro",
    image: eu,
  },
  {
    code: "nok",
    codename: "NOK",
    currencyname: "korona norweska",
    image: norway,
  },
  {
    code: "usd",
    codename: "USD",
    currencyname: "dolar amerykański",
    image: usa,
  },
];
const Stats = () => {

  const [countryCode, setCountryCode] = useState("gbp");

  useEffect(() => {
    const fetchData = async () => {
      const currentCurrency = await axios(
        `http://api.nbp.pl/api/exchangerates/rates/a/${countryCode}/last/10/?format=json`
      );
      console.log(currentCurrency)
    };

    fetchData();
  }, [countryCode]);

  const ChangeCountry = (e) => {
    setCountryCode(e.target.value)
  }
  // alert(countryCode)
  // console.log(currentCurrency)
  return (
    <div className="stats-container">
      <div className="stats-logo">
        <img src={graphstat} alt="List" />
        <p>Wybierz walutę</p>
      </div>
      <div className="stats-select">
        <select onChange={ChangeCountry}>
          {countriesStats.map((item, index) => (
            <option>
              {item.code} 
            </option>
          ))}
        </select>

        <p>
          Kurs GBP <span>(ostatnie 10 dni)</span>
        </p>
      </div>
      <div className="currencies-single-item">
        <div className="currencies-flag">
          <img src={uk} alt="" />
        </div>
        <div className="currencies-name">
          <h3>GBP</h3>
          <p>funt szterling</p>
        </div>
        <div className="currencies-value">
          <h3>mid 5.2574</h3>
          <p>126/A/NBP/2021</p>
        </div>
      </div>
      
      <div className="placeholder"></div>
    </div>
  );
};

export default Stats;
