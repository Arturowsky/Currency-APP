import React, { useEffect, useState } from 'react'
import AOS from 'aos';
// STYLES
import "./styles/exchange.scss"

// IMAGES
import exchangelogo from "./assets/images/exchange-logo.svg"
import verticalline from "./assets/images/vertical-line.svg"
import arrow from "./assets/images/arrow-repeat.svg";
import arrowclockwise from "./assets/images/arrow-clockwise.svg";
const Exchange = () => {
    // INPUTS
    const [initialnumber, setInitialnumber] = useState(1)
    const [recievenumber, setRecievenumber] = useState(3423)
    // SELECT
    const [have, setHave] = useState("nok")
    const [wants, setWants] = useState("gbp")
    // BUTTONS
    const [reset, setReset] = useState()
    const [swap, setSwap] = useState();
    useEffect(() => {
        AOS.init()
    })
    return (
        <div className="exchange-container">
            <div className="exchange-logo" data-aos="fade-up"><img src={exchangelogo} alt="Exchange between currencies" /><p>Wymień waluty</p></div>
            <div className="exchange-grid">

                <div className="exchange-grid-left" data-aos="fade-up" data-aos-duration="500">
                    <label>Posiadam
                    </label>
                    <select>
                        <option>NOK</option>
                        <option>GBP</option>
                        <option>CZK</option>
                    </select>
                    <label>Podaj ilość
                    </label>
                    <input type="number" value={initialnumber}/>
                </div>
                <img src={verticalline} alt="" />
                <div className="exchange-grid-right" data-aos="fade-up" data-aos-duration="1000">
                <label>Wymieniam na
                    </label>
                    <select>
                        <option>PLN</option>
                        <option>GBP</option>
                        <option>CZK</option>
                    </select>
                    <label>Otrzymasz
                    </label>
                    <input type="number" disabled={true} value={recievenumber}/>
                </div>
            </div>
            <div className="button-container-2" >
        <button className="btn-add-country"   data-aos="fade-up" data-aos-duration="200">
          <img src={arrow} alt="" />
          <span>zamień</span>
        </button><button className="btn-add-country"  data-aos="fade-up" data-aos-duration="300">
          <img src={arrowclockwise} alt="" />
          <span>reset</span>
        </button>
      </div>
            <div className="placeholder"></div>
        </div>
    )
}
export default Exchange;

