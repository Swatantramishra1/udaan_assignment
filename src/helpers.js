export const getDeck = () => {
    let suitsName = [ "hearts", "diams", "clubs", "spades" ];
  let ranksCard = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A" ];

  let fullDeck = [];
    //for each type of suit
    for( var i = 0; i < suitsName.length; i++ ) {
      //and for each rank
      for( var j = 0; j < ranksCard.length; j++ ) {
        
        //make a card
        var card = {};
        card.suit = suitsName[i];
        card.rank = ranksCard[j];
        
        fullDeck.push(card);
      }
    }
    

    return fullDeck;

}