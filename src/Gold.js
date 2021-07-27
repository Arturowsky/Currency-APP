import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// STYLES
import "./styles/gold.scss";
// IMAGES
import gold from "./assets/images/diamond.svg";
import goldbars from "./assets/images/goldbars.svg";

const Gold = () => {
  const [goldToday, setGoldToday] = useState({ price: "", time: "" });
  const [gold28, setGold28] = useState({ price: "", time: "" });
  const [gold27, setGold27] = useState({ price: "", time: "" });
  const [gold26, setGold26] = useState({ price: "", time: "" });
  const [gold25, setGold25] = useState({ price: "", time: "" });
  const [gold24, setGold24] = useState({ price: "", time: "" });
  const [gold23, setGold23] = useState({ price: "", time: "" });
  const [gold22, setGold22] = useState({ price: "", time: "" });
  const [gold21, setGold21] = useState({ price: "", time: "" });
  const [gold20, setGold20] = useState({ price: "", time: "" });
  const [gold19, setGold19] = useState({ price: "", time: "" });
  const [gold18, setGold18] = useState({ price: "", time: "" });
  const [gold17, setGold17] = useState({ price: "", time: "" });
  const [gold16, setGold16] = useState({ price: "", time: "" });
  const [gold15, setGold15] = useState({ price: "", time: "" });
  const [gold14, setGold14] = useState({ price: "", time: "" });
  const [gold13, setGold13] = useState({ price: "", time: "" });
  const [gold12, setGold12] = useState({ price: "", time: "" });
  const [gold11, setGold11] = useState({ price: "", time: "" });
  const [gold10, setGold10] = useState({ price: "", time: "" });
  const [gold9, setGold9] = useState({ price: "", time: "" });
  const [gold8, setGold8] = useState({ price: "", time: "" });
  const [gold7, setGold7] = useState({ price: "", time: "" });
  const [gold6, setGold6] = useState({ price: "", time: "" });
  const [gold5, setGold5] = useState({ price: "", time: "" });
  const [gold4, setGold4] = useState({ price: "", time: "" });
  const [gold3, setGold3] = useState({ price: "", time: "" });
  const [gold2, setGold2] = useState({ price: "", time: "" });
  const [gold1, setGold1] = useState({ price: "", time: "" });
  const [gold0, setGold0] = useState({ price: "", time: "" });
  useEffect(() => {
    AOS.init()
    const fetchData = async () => {
      const goldData = await axios(
        "https://api.nbp.pl/api/cenyzlota/last/30/?format=json"
      );
      setGoldToday({
        price: goldData.data[29].cena,
        time: goldData.data[29].data,
      });
      setGold28({
        price: goldData.data[28].cena,
        time: goldData.data[28].data,
      });
      setGold27({
        price: goldData.data[27].cena,
        time: goldData.data[27].data,
      });
      setGold26({
        price: goldData.data[26].cena,
        time: goldData.data[26].data,
      });
      setGold25({
        price: goldData.data[25].cena,
        time: goldData.data[25].data,
      });
      setGold24({
        price: goldData.data[24].cena,
        time: goldData.data[24].data,
      });
      setGold23({
        price: goldData.data[23].cena,
        time: goldData.data[23].data,
      });
      setGold22({
        price: goldData.data[22].cena,
        time: goldData.data[22].data,
      });
      setGold21({
        price: goldData.data[21].cena,
        time: goldData.data[21].data,
      });
      setGold20({
        price: goldData.data[20].cena,
        time: goldData.data[20].data,
      });
      setGold19({
        price: goldData.data[19].cena,
        time: goldData.data[19].data,
      });
      setGold18({
        price: goldData.data[18].cena,
        time: goldData.data[18].data,
      });
      setGold17({
        price: goldData.data[17].cena,
        time: goldData.data[17].data,
      });
      setGold16({
        price: goldData.data[16].cena,
        time: goldData.data[16].data,
      });
      setGold15({
        price: goldData.data[15].cena,
        time: goldData.data[15].data,
      });
      setGold14({
        price: goldData.data[14].cena,
        time: goldData.data[14].data,
      });
      setGold13({
        price: goldData.data[13].cena,
        time: goldData.data[13].data,
      });
      setGold12({
        price: goldData.data[12].cena,
        time: goldData.data[12].data,
      });
      setGold11({
        price: goldData.data[11].cena,
        time: goldData.data[11].data,
      });
      setGold10({
        price: goldData.data[10].cena,
        time: goldData.data[10].data,
      });
      setGold9({ price: goldData.data[9].cena, time: goldData.data[9].data });
      setGold8({ price: goldData.data[8].cena, time: goldData.data[8].data });
      setGold7({ price: goldData.data[7].cena, time: goldData.data[7].data });
      setGold6({ price: goldData.data[6].cena, time: goldData.data[6].data });
      setGold5({ price: goldData.data[5].cena, time: goldData.data[5].data });
      setGold4({ price: goldData.data[4].cena, time: goldData.data[4].data });
      setGold3({ price: goldData.data[3].cena, time: goldData.data[3].data });
      setGold2({ price: goldData.data[2].cena, time: goldData.data[2].data });
      setGold1({ price: goldData.data[1].cena, time: goldData.data[1].data });
      setGold0({ price: goldData.data[0].cena, time: goldData.data[0].data });
      console.log(goldData);
    };
    fetchData();
  }, []);
  const goldPrice = [
    {
      time: goldToday.time,
      price: goldToday.price,
    },
    {
      time: gold28.time,
      price: gold28.price,
    },
    {
      time: gold27.time,
      price: gold27.price,
    },
    {
      time: gold26.time,
      price: gold26.price,
    },
    {
      time: gold25.time,
      price: gold25.price,
    },
    {
      time: gold24.time,
      price: gold24.price,
    },
    {
      time: gold23.time,
      price: gold23.price,
    },
    {
      time: gold22.time,
      price: gold22.price,
    },
    {
      time: gold21.time,
      price: gold21.price,
    },
    {
      time: gold20.time,
      price: gold20.price,
    },
    {
      time: gold19.time,
      price: gold19.price,
    },
    {
      time: gold18.time,
      price: gold18.price,
    },
    {
      time: gold17.time,
      price: gold17.price,
    },
    {
      time: gold16.time,
      price: gold16.price,
    },
    {
      time: gold15.time,
      price: gold15.price,
    },
    {
      time: gold14.time,
      price: gold14.price,
    },
    {
      time: gold13.time,
      price: gold13.price,
    },
    {
      time: gold12.time,
      price: gold12.price,
    },
    {
      time: gold11.time,
      price: gold11.price,
    },
    {
      time: gold10.time,
      price: gold10.price,
    },
    {
      time: gold9.time,
      price: gold9.price,
    },
    {
      time: gold8.time,
      price: gold8.price,
    },
    {
      time: gold7.time,
      price: gold7.price,
    },
    {
      time: gold6.time,
      price: gold6.price,
    },
    {
      time: gold5.time,
      price: gold5.price,
    },
    {
      time: gold4.time,
      price: gold4.price,
    },
    {
      time: gold3.time,
      price: gold3.price,
    },
    {
      time: gold2.time,
      price: gold2.price,
    },
    {
      time: gold1.time,
      price: gold1.price,
    },
    {
      time: gold0.time,
      price: gold0.price,
    },

  ];
  return (
    <div className="gold-container">
      <div className="gold-logo" data-aos="fade-up">
        <img src={gold} alt="Złoto" />
        <p>
          Ceny złota <span>(ostatnie 30 dni)</span>
        </p>
      </div>
      {goldPrice.map((item, index) => (
        <div className="gold-item" key={index} data-aos="fade-up">
          <div className="gold-flag">
            <img src={goldbars} alt="" />
          </div>
          <div className="gold-value">
            <h3>
              {item.price}
              <span>pln</span>
            </h3>
          </div>
          <div className="gold-date">
            <h3>{item.time}</h3>
          </div>
        </div>
      ))}
      <div className="placeholder"></div>
    </div>
  );
};

export default Gold;
