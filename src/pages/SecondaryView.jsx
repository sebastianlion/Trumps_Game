import React, { useState, useMemo } from "react";

import "../assets/styles/SecondaryView.css";

import hearts from "../assets/images/ace-of-hearts3.png";
import clubs from "../assets/images/ace-of-clubs2.png";
import diamonds from "../assets/images/ace-of-diamonds2.png";
import spades from "../assets/images/ace-of-spades2.png";
import noTrumps from "../assets/images/noTrumps.jpg";

export const SecondaryView = ({ data }) => {
  const fillArray = (length) => {
    return Array.from({ length }, (_, k) => k + 1);
  };

  const [namesOfPlayers, setNamesOfPlayers] = useState(
    fillArray(data.numberOfPlayers)
  );

  const roundsToPlay = fillArray(data.roundsToPlay);

  const suits = {
    1: "Hearts",
    2: "Clubs",
    3: "Diamonds",
    4: "Spades",
    5: "No Trumps",
  };

  const suitsImages = {
    1: hearts,
    2: clubs,
    3: diamonds,
    4: spades,
    5: noTrumps,
  };

  const calculateRoundValue = (round) => {
    const counter = round > 7 ? 1 : -8;
    return Math.abs(((round - 1) % 7) + 1 + counter);
  };

  const calculatePlayerIndex = (round) => {
    return (round - 1) % namesOfPlayers.length;
  };

  const calculateSuitIndex = (round) => {
    return ((round - 1) % 5) + 1;
  };

  return (
    <div>
      <table
        className="game-table"
        style={{ backgroundImage: `url(${hearts})` }}
      >
        <thead>
          <tr>
            <th className="game-table__header">Round</th>
            <th className="game-table__header">Cards</th>
            <th className="game-table__header">Dealer</th>
            <th className="game-table__header">Suit</th>
            {namesOfPlayers.map((name) => (
              <th className="game-table__header">{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {roundsToPlay.map((round) => {
            const roundValue = calculateRoundValue(round);
            const playerIndex = calculatePlayerIndex(round);
            const suitIndex = calculateSuitIndex(round);
            return (
              <tr key={round}>
                <td className="game-table__cell">
                  <span className="game-table__span">{round}</span>
                </td>
                <td className="game-table__cell">
                  <span className="game-table__span">{roundValue}</span>
                </td>
                <td className="game-table__cell">
                  <span className="game-table__span">
                    {namesOfPlayers[playerIndex]}
                  </span>
                </td>
                <td className="game-table__cell">
                  <span className="game-table__span">
                    {suits[suitIndex]}{" "}
                    <img
                      className="game-table__icon"
                      src={suitsImages[suitIndex]}
                      alt={suits[suitIndex]}
                    />
                  </span>
                </td>
                {namesOfPlayers.map((player) => (
                  <td key={player} className="game-table__cell">
                    <table>
                      <tbody>
                        <tr>
                          <td className="game-table__cell">
                            <span>{player}</span>
                          </td>
                          <td className="game-table__cell">
                            <span>{player}</span>
                          </td>
                          <td className="game-table__cell">
                            <span>{player}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SecondaryView;
