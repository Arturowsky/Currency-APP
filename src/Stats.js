import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
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
    image: uk,
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
  {
    code: "cad",
    codename: "CAD",
    currencyname: "dolar kanadyjski",
    image: canada,
  },
  {
    code: "huf",
    codename: "HUF",
    currencyname: "forint (Węgry)",
    image: hungary,
  },
  {
    code: "chf",
    codename: "CHF",
    currencyname: "frank szwajcarski",
    image: switzerland,
  },
  {
    code: "czk",
    codename: "CZK",
    currencyname: "korona czeska",
    image: czech,
  },
];
const Stats = () => {
  const [countryCode, setCountryCode] = useState("gbp");
  const [ukgbp, setUkgbp] = useState({
    currency: "",
    code: "",
    mid: "",
    mid2: "",
    mid3: "",
    mid4: "",
    mid5: "",
    mid6: "",
    mid7: "",
    mid8: "",
    mid9: "",
    mid10: "",
    flag: "",
    time: "",
    time2: "",
    time3: "",
    time4: "",
    time5: "",
    time6: "",
    time7: "",
    time8: "",
    time9: "",
    time10: "",
  });
  useEffect(() => {
    AOS.init()
    const fetchData = async () => {
      const currentCurrency = await axios(
        `http://api.nbp.pl/api/exchangerates/rates/a/${countryCode}/last/10/?format=json`
      );
      if (countryCode === "gbp") {
        setUkgbp({
          currency: currentCurrency.data.currency,
          code: currentCurrency.data.code,
          mid: currentCurrency.data.rates[9].mid,
          time: currentCurrency.data.rates[9].effectiveDate,
          mid2: currentCurrency.data.rates[8].mid,
          time2: currentCurrency.data.rates[8].effectiveDate,
          mid3: currentCurrency.data.rates[7].mid,
          time3: currentCurrency.data.rates[7].effectiveDate,
          mid4: currentCurrency.data.rates[6].mid,
          time4: currentCurrency.data.rates[6].effectiveDate,
          mid5: currentCurrency.data.rates[5].mid,
          time5: currentCurrency.data.rates[5].effectiveDate,
          mid6: currentCurrency.data.rates[4].mid,
          time6: currentCurrency.data.rates[4].effectiveDate,
          mid7: currentCurrency.data.rates[3].mid,
          time7: currentCurrency.data.rates[3].effectiveDate,
          mid8: currentCurrency.data.rates[2].mid,
          time8: currentCurrency.data.rates[2].effectiveDate,
          mid9: currentCurrency.data.rates[1].mid,
          time9: currentCurrency.data.rates[1].effectiveDate,
          mid10: currentCurrency.data.rates[0].mid,
          time10: currentCurrency.data.rates[0].effectiveDate,
          flag: uk,
        });
      } else if (countryCode === "eur") {
        setUkgbp({
          currency: currentCurrency.data.currency,
          code: currentCurrency.data.code,
          mid: currentCurrency.data.rates[9].mid,
          time: currentCurrency.data.rates[9].effectiveDate,
          mid2: currentCurrency.data.rates[8].mid,
          time2: currentCurrency.data.rates[8].effectiveDate,
          mid3: currentCurrency.data.rates[7].mid,
          time3: currentCurrency.data.rates[7].effectiveDate,
          mid4: currentCurrency.data.rates[6].mid,
          time4: currentCurrency.data.rates[6].effectiveDate,
          mid5: currentCurrency.data.rates[5].mid,
          time5: currentCurrency.data.rates[5].effectiveDate,
          mid6: currentCurrency.data.rates[4].mid,
          time6: currentCurrency.data.rates[4].effectiveDate,
          mid7: currentCurrency.data.rates[3].mid,
          time7: currentCurrency.data.rates[3].effectiveDate,
          mid8: currentCurrency.data.rates[2].mid,
          time8: currentCurrency.data.rates[2].effectiveDate,
          mid9: currentCurrency.data.rates[1].mid,
          time9: currentCurrency.data.rates[1].effectiveDate,
          mid10: currentCurrency.data.rates[0].mid,
          time10: currentCurrency.data.rates[0].effectiveDate,
          flag: eu,
        });
      } else if (countryCode === "nok") {
        setUkgbp({
          currency: currentCurrency.data.currency,
          code: currentCurrency.data.code,
          mid: currentCurrency.data.rates[9].mid,
          time: currentCurrency.data.rates[9].effectiveDate,
          mid2: currentCurrency.data.rates[8].mid,
          time2: currentCurrency.data.rates[8].effectiveDate,
          mid3: currentCurrency.data.rates[7].mid,
          time3: currentCurrency.data.rates[7].effectiveDate,
          mid4: currentCurrency.data.rates[6].mid,
          time4: currentCurrency.data.rates[6].effectiveDate,
          mid5: currentCurrency.data.rates[5].mid,
          time5: currentCurrency.data.rates[5].effectiveDate,
          mid6: currentCurrency.data.rates[4].mid,
          time6: currentCurrency.data.rates[4].effectiveDate,
          mid7: currentCurrency.data.rates[3].mid,
          time7: currentCurrency.data.rates[3].effectiveDate,
          mid8: currentCurrency.data.rates[2].mid,
          time8: currentCurrency.data.rates[2].effectiveDate,
          mid9: currentCurrency.data.rates[1].mid,
          time9: currentCurrency.data.rates[1].effectiveDate,
          mid10: currentCurrency.data.rates[0].mid,
          time10: currentCurrency.data.rates[0].effectiveDate,
          flag: norway,
        });
      }
      else if (countryCode === "usd") {
        setUkgbp({
          currency: currentCurrency.data.currency,
          code: currentCurrency.data.code,
          mid: currentCurrency.data.rates[9].mid,
          time: currentCurrency.data.rates[9].effectiveDate,
          mid2: currentCurrency.data.rates[8].mid,
          time2: currentCurrency.data.rates[8].effectiveDate,
          mid3: currentCurrency.data.rates[7].mid,
          time3: currentCurrency.data.rates[7].effectiveDate,
          mid4: currentCurrency.data.rates[6].mid,
          time4: currentCurrency.data.rates[6].effectiveDate,
          mid5: currentCurrency.data.rates[5].mid,
          time5: currentCurrency.data.rates[5].effectiveDate,
          mid6: currentCurrency.data.rates[4].mid,
          time6: currentCurrency.data.rates[4].effectiveDate,
          mid7: currentCurrency.data.rates[3].mid,
          time7: currentCurrency.data.rates[3].effectiveDate,
          mid8: currentCurrency.data.rates[2].mid,
          time8: currentCurrency.data.rates[2].effectiveDate,
          mid9: currentCurrency.data.rates[1].mid,
          time9: currentCurrency.data.rates[1].effectiveDate,
          mid10: currentCurrency.data.rates[0].mid,
          time10: currentCurrency.data.rates[0].effectiveDate,
          flag: usa,
        });
      }
      else if (countryCode === "cad") {
        setUkgbp({
          currency: currentCurrency.data.currency,
          code: currentCurrency.data.code,
          mid: currentCurrency.data.rates[9].mid,
          time: currentCurrency.data.rates[9].effectiveDate,
          mid2: currentCurrency.data.rates[8].mid,
          time2: currentCurrency.data.rates[8].effectiveDate,
          mid3: currentCurrency.data.rates[7].mid,
          time3: currentCurrency.data.rates[7].effectiveDate,
          mid4: currentCurrency.data.rates[6].mid,
          time4: currentCurrency.data.rates[6].effectiveDate,
          mid5: currentCurrency.data.rates[5].mid,
          time5: currentCurrency.data.rates[5].effectiveDate,
          mid6: currentCurrency.data.rates[4].mid,
          time6: currentCurrency.data.rates[4].effectiveDate,
          mid7: currentCurrency.data.rates[3].mid,
          time7: currentCurrency.data.rates[3].effectiveDate,
          mid8: currentCurrency.data.rates[2].mid,
          time8: currentCurrency.data.rates[2].effectiveDate,
          mid9: currentCurrency.data.rates[1].mid,
          time9: currentCurrency.data.rates[1].effectiveDate,
          mid10: currentCurrency.data.rates[0].mid,
          time10: currentCurrency.data.rates[0].effectiveDate,
          flag: canada,
        });
      }
      else if (countryCode === "huf") {
        setUkgbp({
          currency: currentCurrency.data.currency,
          code: currentCurrency.data.code,
          mid: currentCurrency.data.rates[9].mid,
          time: currentCurrency.data.rates[9].effectiveDate,
          mid2: currentCurrency.data.rates[8].mid,
          time2: currentCurrency.data.rates[8].effectiveDate,
          mid3: currentCurrency.data.rates[7].mid,
          time3: currentCurrency.data.rates[7].effectiveDate,
          mid4: currentCurrency.data.rates[6].mid,
          time4: currentCurrency.data.rates[6].effectiveDate,
          mid5: currentCurrency.data.rates[5].mid,
          time5: currentCurrency.data.rates[5].effectiveDate,
          mid6: currentCurrency.data.rates[4].mid,
          time6: currentCurrency.data.rates[4].effectiveDate,
          mid7: currentCurrency.data.rates[3].mid,
          time7: currentCurrency.data.rates[3].effectiveDate,
          mid8: currentCurrency.data.rates[2].mid,
          time8: currentCurrency.data.rates[2].effectiveDate,
          mid9: currentCurrency.data.rates[1].mid,
          time9: currentCurrency.data.rates[1].effectiveDate,
          mid10: currentCurrency.data.rates[0].mid,
          time10: currentCurrency.data.rates[0].effectiveDate,
          flag: hungary,
        });
      }
      else if (countryCode === "chf") {
        setUkgbp({
          currency: currentCurrency.data.currency,
          code: currentCurrency.data.code,
          mid: currentCurrency.data.rates[9].mid,
          time: currentCurrency.data.rates[9].effectiveDate,
          mid2: currentCurrency.data.rates[8].mid,
          time2: currentCurrency.data.rates[8].effectiveDate,
          mid3: currentCurrency.data.rates[7].mid,
          time3: currentCurrency.data.rates[7].effectiveDate,
          mid4: currentCurrency.data.rates[6].mid,
          time4: currentCurrency.data.rates[6].effectiveDate,
          mid5: currentCurrency.data.rates[5].mid,
          time5: currentCurrency.data.rates[5].effectiveDate,
          mid6: currentCurrency.data.rates[4].mid,
          time6: currentCurrency.data.rates[4].effectiveDate,
          mid7: currentCurrency.data.rates[3].mid,
          time7: currentCurrency.data.rates[3].effectiveDate,
          mid8: currentCurrency.data.rates[2].mid,
          time8: currentCurrency.data.rates[2].effectiveDate,
          mid9: currentCurrency.data.rates[1].mid,
          time9: currentCurrency.data.rates[1].effectiveDate,
          mid10: currentCurrency.data.rates[0].mid,
          time10: currentCurrency.data.rates[0].effectiveDate,
          flag: switzerland,
        });
      }
      else if (countryCode === "czk") {
        setUkgbp({
          currency: currentCurrency.data.currency,
          code: currentCurrency.data.code,
          mid: currentCurrency.data.rates[9].mid,
          time: currentCurrency.data.rates[9].effectiveDate,
          mid2: currentCurrency.data.rates[8].mid,
          time2: currentCurrency.data.rates[8].effectiveDate,
          mid3: currentCurrency.data.rates[7].mid,
          time3: currentCurrency.data.rates[7].effectiveDate,
          mid4: currentCurrency.data.rates[6].mid,
          time4: currentCurrency.data.rates[6].effectiveDate,
          mid5: currentCurrency.data.rates[5].mid,
          time5: currentCurrency.data.rates[5].effectiveDate,
          mid6: currentCurrency.data.rates[4].mid,
          time6: currentCurrency.data.rates[4].effectiveDate,
          mid7: currentCurrency.data.rates[3].mid,
          time7: currentCurrency.data.rates[3].effectiveDate,
          mid8: currentCurrency.data.rates[2].mid,
          time8: currentCurrency.data.rates[2].effectiveDate,
          mid9: currentCurrency.data.rates[1].mid,
          time9: currentCurrency.data.rates[1].effectiveDate,
          mid10: currentCurrency.data.rates[0].mid,
          time10: currentCurrency.data.rates[0].effectiveDate,
          flag: czech,
        });
      }
      console.log(currentCurrency);
    };

    fetchData();
  }, [countryCode]);

  const ChangeCountry = (e) => {
    setCountryCode(e.target.value);
  };
  // alert(countryCode)
  // console.log(currentCurrency)
  // https://www.youtube.com/watch?v=i1ZJr5vq_4E
  return (
    <div className="stats-container">
      <div className="stats-logo" data-aos="fade-up">
        <img src={graphstat} alt="List" />
        <p>Wybierz walutę</p>
      </div>
      <div className="stats-select" data-aos="fade-up">
        <select onChange={ChangeCountry}>
          {countriesStats.map((item, index) => (
            <option>{item.code}</option>
          ))}
        </select>

        <p>
          Kurs {ukgbp.code} <span>(ostatnie 10 dni)</span>
        </p>
      </div>
      <div className="currencies-single-item" data-aos="fade-up">
        <div className="currencies-flag">
          <img src={ukgbp.flag} alt="" />
        </div>
        <div className="currencies-name">
          <h3>{ukgbp.code}</h3>
          <p>{ukgbp.currency}</p>
        </div>
        <div className="currencies-value">
          <h3>mid {ukgbp.mid}</h3>
          <p>{ukgbp.time}</p>
        </div>
      </div>
      <div className="currencies-single-item" data-aos="fade-up">
        <div className="currencies-flag">
          <img src={ukgbp.flag} alt="" />
        </div>
        <div className="currencies-name">
          <h3>{ukgbp.code}</h3>
          <p>{ukgbp.currency}</p>
        </div>
        <div className="currencies-value">
          <h3>mid {ukgbp.mid2}</h3>
          <p>{ukgbp.time2}</p>
        </div>
      </div>
      <div className="currencies-single-item" data-aos="fade-up">
        <div className="currencies-flag">
          <img src={ukgbp.flag} alt="" />
        </div>
        <div className="currencies-name">
          <h3>{ukgbp.code}</h3>
          <p>{ukgbp.currency}</p>
        </div>
        <div className="currencies-value">
          <h3>mid {ukgbp.mid3}</h3>
          <p>{ukgbp.time3}</p>
        </div>
      </div>
      <div className="currencies-single-item" data-aos="fade-up">
        <div className="currencies-flag">
          <img src={ukgbp.flag} alt="" />
        </div>
        <div className="currencies-name">
          <h3>{ukgbp.code}</h3>
          <p>{ukgbp.currency}</p>
        </div>
        <div className="currencies-value">
          <h3>mid {ukgbp.mid4}</h3>
          <p>{ukgbp.time4}</p>
        </div>
      </div>
      <div className="currencies-single-item" data-aos="fade-up">
        <div className="currencies-flag">
          <img src={ukgbp.flag} alt="" />
        </div>
        <div className="currencies-name">
          <h3>{ukgbp.code}</h3>
          <p>{ukgbp.currency}</p>
        </div>
        <div className="currencies-value">
          <h3>mid {ukgbp.mid5}</h3>
          <p>{ukgbp.time5}</p>
        </div>
      </div>
      <div className="currencies-single-item" data-aos="fade-up">
        <div className="currencies-flag">
          <img src={ukgbp.flag} alt="" />
        </div>
        <div className="currencies-name">
          <h3>{ukgbp.code}</h3>
          <p>{ukgbp.currency}</p>
        </div>
        <div className="currencies-value">
          <h3>mid {ukgbp.mid6}</h3>
          <p>{ukgbp.time6}</p>
        </div>
      </div>
      <div className="currencies-single-item" data-aos="fade-up">
        <div className="currencies-flag">
          <img src={ukgbp.flag} alt="" />
        </div>
        <div className="currencies-name">
          <h3>{ukgbp.code}</h3>
          <p>{ukgbp.currency}</p>
        </div>
        <div className="currencies-value">
          <h3>mid {ukgbp.mid7}</h3>
          <p>{ukgbp.time7}</p>
        </div>
      </div>
      <div className="currencies-single-item" data-aos="fade-up">
        <div className="currencies-flag">
          <img src={ukgbp.flag} alt="" />
        </div>
        <div className="currencies-name">
          <h3>{ukgbp.code}</h3>
          <p>{ukgbp.currency}</p>
        </div>
        <div className="currencies-value">
          <h3>mid {ukgbp.mid8}</h3>
          <p>{ukgbp.time8}</p>
        </div>
      </div>
      <div className="currencies-single-item" data-aos="fade-up">
        <div className="currencies-flag">
          <img src={ukgbp.flag} alt="" />
        </div>
        <div className="currencies-name">
          <h3>{ukgbp.code}</h3>
          <p>{ukgbp.currency}</p>
        </div>
        <div className="currencies-value">
          <h3>mid {ukgbp.mid9}</h3>
          <p>{ukgbp.time9}</p>
        </div>
      </div>
      <div className="currencies-single-item" data-aos="fade-up">
        <div className="currencies-flag">
          <img src={ukgbp.flag} alt="" />
        </div>
        <div className="currencies-name">
          <h3>{ukgbp.code}</h3>
          <p>{ukgbp.currency}</p>
        </div>
        <div className="currencies-value">
          <h3>mid {ukgbp.mid10}</h3>
          <p>{ukgbp.time10}</p>
        </div>
      </div>

      <div className="placeholder"></div>
    </div>
  );
};

export default Stats;
