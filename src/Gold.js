import React, { useEffect, useState } from "react";
import axios from "axios";
// STYLES
import "./styles/gold.scss";
// IMAGES
import gold from "./assets/images/diamond.svg";
import goldbars from "./assets/images/goldbars.svg";

const Gold = () => {
    const [goldToday, setGoldToday] = useState({price: "", time: ""})
    const [gold28, setGold28] = useState({price: "", time: ""})
    const [gold27, setGold27] = useState({price: "", time: ""})
    const [gold26, setGold26] = useState({price: "", time: ""})
    const [gold25, setGold25] = useState({price: "", time: ""})
    const [gold24, setGold24] = useState({price: "", time: ""})
    const [gold23, setGold23] = useState({price: "", time: ""})
    const [gold22, setGold22] = useState({price: "", time: ""})
    const [gold21, setGold21] = useState({price: "", time: ""})
    const [gold20, setGold20] = useState({price: "", time: ""})
    const [gold19, setGold19] = useState({price: "", time: ""})
    const [gold18, setGold18] = useState({price: "", time: ""})
    const [gold17, setGold17] = useState({price: "", time: ""})
    const [gold16, setGold16] = useState({price: "", time: ""})
    const [gold15, setGold15] = useState({price: "", time: ""})
    const [gold14, setGold14] = useState({price: "", time: ""})
    const [gold13, setGold13] = useState({price: "", time: ""})
    const [gold12, setGold12] = useState({price: "", time: ""})
    const [gold11, setGold11] = useState({price: "", time: ""})
    const [gold10, setGold10] = useState({price: "", time: ""})
    const [gold9, setGold9] = useState({price: "", time: ""})
    const [gold8, setGold8] = useState({price: "", time: ""})
    const [gold7, setGold7] = useState({price: "", time: ""})
    const [gold6, setGold6] = useState({price: "", time: ""})
    const [gold5, setGold5] = useState({price: "", time: ""})
    const [gold4, setGold4] = useState({price: "", time: ""})
    const [gold3, setGold3] = useState({price: "", time: ""})
    const [gold2, setGold2] = useState({price: "", time: ""})
    const [gold1, setGold1] = useState({price: "", time: ""})
    const [gold0, setGold0] = useState({price: "", time: ""})
  useEffect(() => {
    const fetchData = async () => {
      const goldData = await axios(
        'http://api.nbp.pl/api/cenyzlota/last/30/?format=json'
      );
        setGoldToday({price: goldData.data[29].cena, time: goldData.data[29].data})
        setGold28({price: goldData.data[28].cena, time: goldData.data[28].data})
        setGold27({price: goldData.data[27].cena, time: goldData.data[27].data})
        setGold26({price: goldData.data[26].cena, time: goldData.data[26].data})
        setGold25({price: goldData.data[25].cena, time: goldData.data[25].data})
        setGold24({price: goldData.data[24].cena, time: goldData.data[24].data})
        setGold23({price: goldData.data[23].cena, time: goldData.data[23].data})
        setGold22({price: goldData.data[22].cena, time: goldData.data[22].data})
        setGold21({price: goldData.data[21].cena, time: goldData.data[21].data})
        setGold20({price: goldData.data[20].cena, time: goldData.data[20].data})
        setGold19({price: goldData.data[19].cena, time: goldData.data[19].data})
        setGold18({price: goldData.data[18].cena, time: goldData.data[18].data})
        setGold17({price: goldData.data[17].cena, time: goldData.data[17].data})
        setGold16({price: goldData.data[16].cena, time: goldData.data[16].data})
        setGold15({price: goldData.data[15].cena, time: goldData.data[15].data})
        setGold14({price: goldData.data[14].cena, time: goldData.data[14].data})
        setGold13({price: goldData.data[13].cena, time: goldData.data[13].data})
        setGold12({price: goldData.data[12].cena, time: goldData.data[12].data})
        setGold11({price: goldData.data[11].cena, time: goldData.data[11].data})
        setGold10({price: goldData.data[10].cena, time: goldData.data[10].data})
        setGold9({price: goldData.data[9].cena, time: goldData.data[9].data})
        setGold8({price: goldData.data[8].cena, time: goldData.data[8].data})
        setGold7({price: goldData.data[7].cena, time: goldData.data[7].data})
        setGold6({price: goldData.data[6].cena, time: goldData.data[6].data})
        setGold5({price: goldData.data[5].cena, time: goldData.data[5].data})
        setGold4({price: goldData.data[4].cena, time: goldData.data[4].data})
        setGold3({price: goldData.data[3].cena, time: goldData.data[3].data})
        setGold2({price: goldData.data[2].cena, time: goldData.data[2].data})
        setGold1({price: goldData.data[1].cena, time: goldData.data[1].data})
        setGold0({price: goldData.data[0].cena, time: goldData.data[0].data})
        console.log(goldData)
    };
    fetchData();
  }, []);
  return (
    <div className="gold-container">
      <div className="gold-logo">
        <img src={gold} alt="Złoto" />
        <p>
          Ceny złota <span>(ostatnie 30 dni)</span>
        </p>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {goldToday.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{goldToday.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold28.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold28.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold27.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold27.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold26.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold26.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold25.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold25.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold24.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold24.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold23.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold23.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold22.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold22.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold21.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold21.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold20.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold20.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold19.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold19.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold18.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold18.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold17.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold17.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold16.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold16.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold15.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold15.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold14.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold14.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold13.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold13.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold12.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold12.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold11.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold11.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold10.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold10.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold9.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold9.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold8.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold8.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold7.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold7.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold6.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold6.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold5.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold5.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold4.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold4.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold3.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold3.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold2.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold2.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold1.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold1.time}</h3>
        </div>
      </div>
      <div className="gold-item">
        <div className="gold-flag">
          <img src={goldbars} alt="" />
        </div>
        <div className="gold-value">
          <h3>
            {gold0.price}<span>pln</span>
          </h3>
        </div>
        <div className="gold-date">
          <h3>{gold0.time}</h3>
        </div>
      </div>
      <div className="placeholder"></div>
    </div>
  );
};

export default Gold;
