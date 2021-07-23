import React from 'react'

// STYLES
import "./styles/exchange.scss"

// IMAGES
import exchangelogo from "./assets/images/exchange-logo.svg"
import verticalline from "./assets/images/vertical-line.svg"
import arrow from "./assets/images/arrow-repeat.svg";
import arrowclockwise from "./assets/images/arrow-clockwise.svg";
const Exchange = () => {

    return (
        <div className="exchange-container">
            <div className="exchange-logo"><img src={exchangelogo} alt="Exchange between currencies" /><p>Wymień waluty</p></div>
            <div className="exchange-grid">

                <div className="exchange-grid-left">
                    <label>Posiadam
                    </label>
                    <select>
                        <option>NOK</option>
                        <option>GBP</option>
                        <option>CZK</option>
                    </select>
                    <label>Podaj ilość
                    </label>
                    <input type="number" />
                </div>
                <img src={verticalline} alt="" />
                <div className="exchange-grid-right">
                <label>Wymieniam na
                    </label>
                    <select>
                        <option>PLN</option>
                        <option>GBP</option>
                        <option>CZK</option>
                    </select>
                    <label>Otrzymasz
                    </label>
                    <input type="number" disabled={true}/>
                </div>
            </div>
            <div className="button-container">
        <button className="btn-add-country">
          <img src={arrow} alt="" />
          <span>zamień</span>
        </button><button className="btn-add-country">
          <img src={arrowclockwise} alt="" />
          <span>reset</span>
        </button>
      </div>
            <div className="placeholder"></div>
        </div>
    )
}
export default Exchange;

