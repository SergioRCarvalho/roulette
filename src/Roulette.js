import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import logo from './logo-1.png';

const Roulette = ({ data }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [rouletteData, setRouletteData] = useState(data);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  useEffect(() => {
    const addShortString = data.map((item) => {
      return {
        completeOption: item.text,
        option:
          item.text.length >= 30
            ? item.text.substring(0, 30).trimEnd() + "..."
            : item.text
      };
    });
    setRouletteData(addShortString);
  }, [data]);

  return (
    <>
      <div align="center" className="roulette-container">
        <Wheel
          mustStartSpinning={mustSpin}
          spinDuration={[0.2]}
          prizeNumber={prizeNumber}
          data={rouletteData}
          outerBorderColor={["#ccc"]}
          outerBorderWidth={[5]}
          innerBorderColor={["#f2f2f2"]}
          radiusLineColor={["tranparent"]}
          radiusLineWidth={[1]}
          textColors={["#f5f5f5"]}
          textDistance={55}
          fontSize={[20]}
          backgroundColors={[
            "#662d91",
            "#838bc5",
            "#37ab9b",
            "#315e85",
            "#662d91",
            "#838bc5",
            "#37ab9b",
            "#315e85",
          ]}
          onStopSpinning={() => {
            setMustSpin(false);
            console.log("hello");
          }}
        />
        <button className="button roulette-button" onClick={handleSpinClick}>
        <img src={logo} className="logocol" alt="Logo" />
        </button>
      </div>
      <br />
    </>
  );
};

export default Roulette;
