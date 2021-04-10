function randomCard() {
  let chooseCard = Math.floor(Math.random() * Math.floor(8));
  switch (chooseCard) {
    case 0:
      cardName = "Ace of Wands";
      song = "Breakaway";
      artist = "Kelly Clarkson";
      songLocation = "/songs/breakaway.mp3";
      break;
    case 1:
      cardName = "Queen of Wands";
      song = "Firework";
      artist = "Katy Perry";
      songLocation = "/songs/firework.mp3";
      break;
    case 2:
      cardName = "King of Wands";
      song = "Bet on It";
      artist = "Zac Efron in High School Musical 2";
      songLocation = "/songs/bet.mp3";
      break;
    case 3:
      cardName = "Ace of Cups";
      song = "Start of Something New";
      artist = "Zac Efron and Vanessa Hudgens in High School Musical";
      songLocation = "/songs/start.mp3";
      break;
    case 4:
      cardName = "Two of Cups";
      song = "Breaking Free";
      artist = "Zac Efron and Vanessa Hudgens in High School Musical";
      songLocation = "/songs/breaking.mp3";
      break;
    case 5:
      cardName = "Six of Cups";
      song = "This is Me";
      artist = "Demi Lovato and Joe Jonas in Camp Rock";
      songLocation = "/songs/thisisme.mp3";
      break;
    case 6:
      cardName = "Seven of Cups";
      song = "Call Me Maybe";
      artist = "Carly Rae Jepsen";
      songLocation = "/songs/call.mp3";
      break;
    case 7:
      cardName = "Six of Swords";
      song = "Since You've Been Gone";
      artist = "Kelly Clarkson";
      songLocation = "/songs/since.mp3";
      break;
      
document.getElementById("output").innerHTML = '<p> Your card is the ' + cardName + '. The song that embodies this card, in my opinion, is ' + song + ' by ' + artist +
  '. You can listen to it below.</p> <br> <audio controls> <source src="'+ songLocation + '" type="audio/mp3"> Your browser does not support the audio element.</audio>';
