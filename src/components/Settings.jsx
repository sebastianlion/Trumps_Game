import React, { useRef } from "react";

import "../assets/styles/Settings.css";

export const Settings = ({ setData, setIsPlaying }) => {
  //   const numberOfPlayersRef = useRef(null);
  //   const orderOfPlayRef = useRef(null);
  //   const roundsToPlayRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const numberOfPlayers = parseInt(document.getElementById("number-of-players").value, 10);
    const orderOfPlay = e.target.elements["radio-buttons-order"].value;
    const roundsToPlay = parseInt(e.target.elements["radio-buttons-rounds"].value, 10);

    const formData = {
      //   numberOfPlayersRef: parseInt(numberOfPlayersRef.current.value),
      //   orderOfPlayRef: orderOfPlayRef.current.value,
      //   roundsToPlayRef: parseInt(roundsToPlayRef.current.value),
      numberOfPlayers,
      orderOfPlay,
      roundsToPlay,
    };

    console.log("This is the data: ", formData);
    setData(formData);
  }

  return (
    <form className="setting-form" onSubmit={handleSubmit}>
      <label>
        Number of players
        <input
          //   ref={numberOfPlayersRef}
          id="number-of-players"
          type="number"
          className="form__input"
          placeholder="2-7"
          min="2"
          max="7"
          required
        />
      </label>

      <span>Order of play</span>
      <label>
        Left: British
        <input
          //   ref={orderOfPlayRef}
          type="radio"
          name="radio-buttons-order"
          value="left"
          defaultChecked
        />
      </label>
      <label>
        Right: American
        <input
          //   ref={orderOfPlayRef}
          type="radio"
          name="radio-buttons-order"
          value="right"
        />
      </label>

      <span>Rounds to play</span>

      <label>
        Complete game: 13
        <input
          //   ref={roundsToPlayRef}
          type="radio"
          name="radio-buttons-rounds"
          value={13}
          defaultChecked
        />
      </label>
      <label>
        Half game: 7
        <input
          //   ref={roundsToPlayRef}
          type="radio"
          name="radio-buttons-rounds"
          value={7}
        />
      </label>

      <div className="setting-button-container">
        <button type="submit">Start</button>
        <button type="button" onClick={() => {setIsPlaying(false)}}>Cancel</button>
      </div>
    </form>
  );
};

export default Settings;
