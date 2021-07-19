import React, { useEffect, useState } from "react";
import axios from "axios";
// STYLES
import "./styles/home.scss";
// IMAGES
import calc from "./assets/images/calc.svg";
import line from "./assets/images/line.svg";
import poland from "./assets/flags/poland.svg";
import uk from "./assets/flags/uk.svg";
import eu from "./assets/flags/eu.svg";
import usa from "./assets/flags/usa.svg";
import norway from "./assets/flags/norway.svg";
const Home = () => {
  const [ukgbp, setUkgbp] = useState({ currency: "", code: "", mid: "" });
  const [euro, setEuro] = useState({ currency: "", code: "", mid: "" });
  const [usd, setUsd] = useState({ currency: "", code: "", mid: "" });
  const [nok, setNok] = useState({ currency: "", code: "", mid: "" });

  
  useEffect(() => {
    const fetchData = async () => {
      const currencyData = await axios(
        `http://api.nbp.pl/api/exchangerates/tables/a/`
      );
    //   setExchange({ ipaddress: address.data.query, isp: address.data.isp, org: address.data.org, as: address.data.as, region: address.data.regionName, timezone: address.data.timezone})
      setUkgbp({ currency: currencyData.data[0].rates[10].currency, code: currencyData.data[0].rates[10].code, mid: currencyData.data[0].rates[10].mid})
      setEuro({ currency: currencyData.data[0].rates[7].currency, code: currencyData.data[0].rates[7].code, mid: currencyData.data[0].rates[7].mid})
      setUsd({ currency: currencyData.data[0].rates[1].currency, code: currencyData.data[0].rates[1].code, mid: currencyData.data[0].rates[1].mid})
      setNok({ currency: currencyData.data[0].rates[16].currency, code: currencyData.data[0].rates[16].code, mid: currencyData.data[0].rates[16].mid})
      
    };
    fetchData();
   
  }, []);
  
 
    return(<div className="container">
    <div className="currency-item">
      <div className="currency-flag">
        <img src={poland} alt="poland" />
      </div>
      <div className="currency-name">
        <h3>PLN</h3>
        <p>polski złoty</p>
      </div>
      <div className="currency-number">
        <p>9687</p>
      </div>
      <img src={line} alt="" />
      <div className="currency-calc">
        <img src={calc} alt="" />
      </div>
    </div>
    <div className="currencies-single-item">
        <div className="currencies-flag"><img src={uk} alt="" /></div>
        <div className="currencies-name">
        <h3>{ukgbp.code}</h3>
        <p>{ukgbp.currency}</p>
      </div>
      <div className="currencies-value">
        <h3>{ukgbp.mid}</h3>
        <p>1 PLN = {(1 / ukgbp.mid).toFixed(4)} {ukgbp.code}</p>
      </div>
    </div>
    <div className="currencies-single-item">
        <div className="currencies-flag"><img src={eu} alt="" /></div>
        <div className="currencies-name">
        <h3>{euro.code}</h3>
        <p>{euro.currency}</p>
      </div>
      <div className="currencies-value">
        <h3>{euro.mid}</h3>
        <p>1 PLN = {(1 / euro.mid).toFixed(4)} {euro.code}</p>
      </div>
    </div>
    <div className="currencies-single-item">
        <div className="currencies-flag"><img src={norway} alt="" /></div>
        <div className="currencies-name">
        <h3>{nok.code}</h3>
        <p>{nok.currency}</p>
      </div>
      <div className="currencies-value">
        <h3>{nok.mid}</h3>
        <p>1 PLN = {(1 / nok.mid).toFixed(4)} {nok.code}</p>
      </div>
    </div>
    <div className="currencies-single-item">
        <div className="currencies-flag"><img src={usa} alt="" /></div>
        <div className="currencies-name">
        <h3>{usd.code}</h3>
        <p>{usd.currency}</p>
      </div>
      <div className="currencies-value">
        <h3>{usd.mid}</h3>
        <p>1 PLN = {(1 / usd.mid).toFixed(4)} {usd.code}</p>
      </div>
    </div>
  </div>)
}

export default Home;
