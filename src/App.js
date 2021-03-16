import React from "react";
import './App.css';
import {getDeck} from "./helpers";

const App = () => {
  const [cardsToDraw, setCardsToDraw] = React.useState([]);
  const [deck, setDeck] = React.useState(getDeck());

  const[noOfCard, setNoOfCard] = React.useState(5);


  const drawCard = () => {
    const currentDeck = [...deck];
    if(currentDeck.length === 0) {
      alert("Deck is empty!");
      return;
    }

    if( deck.length > noOfCard ) {

      const randIndex = Math.floor( Math.random() * (deck.length-noOfCard) );
      const slicedCards = currentDeck.splice( randIndex, noOfCard );
      setDeck([...currentDeck]);
      setCardsToDraw([...cardsToDraw,...slicedCards]);
    } else {
      setCardsToDraw([...cardsToDraw,...deck]);
      setDeck([])
    }
  }


console.log({cardsToDraw, deck})

  return(
    <div className="content">
    <button onClick={drawCard}>Draw cards</button>
      <div className="cardsWrapper">
        {
          cardsToDraw.map(card => (
            <div className={`card ${card.suit === 'hearts' || card.suit === 'diams' ? 'red' : ''}`} key={`${card.rank}-${card.suit}`}>
              <div className="rank">{card.rank}</div>
              <div className={`suit ${card.suit}`}></div>
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default App;
