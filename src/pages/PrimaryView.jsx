import React, { useState } from "react";

import "../assets/styles/PrimaryView.css";

import hearts from "../assets/images/ace-of-hearts3.png";
import clubs from "../assets/images/ace-of-clubs2.png";
import diamonds from "../assets/images/ace-of-diamonds2.png";
import spades from "../assets/images/ace-of-spades2.png";
import noTrumps from "../assets/images/noTrumps.jpg";
import Settings from "../components/Settings";

export const PrimaryView = ({ setData }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <h1>Trumps Game</h1>

      <div className="created-by__container">
        <h2>
          Developed by <br />
          Sebastianlion12
        </h2>

        <h2>
          Graphic Design by <br />
          Kathecat
        </h2>
      </div>

      <div className="card-container">
        <img
          className="card-container__image"
          src={hearts}
          alt="Ace of hearts"
        />
        <img className="card-container__image" src={clubs} alt="Ace of clubs" />
        <img
          className="card-container__image"
          src={diamonds}
          alt="Ace of diamonds"
        />
        <img
          className="card-container__image"
          src={spades}
          alt="Ace of spades"
        />
        <img className="card-container__image" src={noTrumps} alt="No Trumps" />
      </div>

      {isPlaying ? (
        <Settings setData={setData} setIsPlaying={setIsPlaying} />
      ) : (
        <div className="button-container">
          <button
            className="button-container__button button-container__button--play"
            onClick={() => setIsPlaying(true)}
          >
            Play
          </button>
          <button className="button-container__button button-container__button--tutorial">
            Tutorial
          </button>
        </div>
      )}
    </div>
  );
};

export default PrimaryView;
