import React from 'react'

export const SecondaryView = ({data}) => {
  return (
    <div>
      <h2>numberOfPlayers: {data.numberOfPlayers}</h2>
      <h2>orderOfPlay: {data.orderOfPlay}</h2>
      <h2>roundsToPlay: {data.roundsToPlay}</h2>
    </div>
  )
}

export default SecondaryView;