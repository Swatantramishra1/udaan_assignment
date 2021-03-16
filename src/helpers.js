export const getDeck = () => {
    let suitsName = [  "clubs", "spades","hearts", "diams" ];
  let ranksCard = [ "J", "Q", "K",2, 3, 4, 5, 6, "A", 7, 8, 9, 10 ];

  let fullDeck = [];
    for( var i = 0; i < suitsName.length; i++ ) {
      for( var j = 0; j < ranksCard.length; j++ ) {
        var card = {};
        card.suit = suitsName[i];
        card.rank = ranksCard[j];
        
        fullDeck.push(card);
      }
    }
    

    return fullDeck;

}