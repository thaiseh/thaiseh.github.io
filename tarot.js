function randomCard() {
  let chooseCard = Math.floor(Math.random() * Math.floor(8));
  switch (chooseCard) {
    case 0:
      cardName = "Ace of Wands";
      song = "Breakaway";
      artist = "Kelly Clarkson";
      songLocation = "songs/Breakaway - Kelly Clarkson (Lyrics).mp3";
      imageLocation = "images/ace of wands.jpg";
      break;
    case 1:
      cardName = "Queen of Wands";
      song = "Firework";
      artist = "Katy Perry";
      songLocation = "songs/Katy Perry - Firework (Lyrics).mp3";
      imageLocation = "images/queen of wands.jpg";
      break;
    case 2:
      cardName = "King of Wands";
      song = "Bet on It";
      artist = "Zac Efron in High School Musical 2";
      songLocation = "songs/Zac Efron - Bet On It [Full Lyrics].mp3";
      imageLocation = "images/king of wands.jpg";
      break;
    case 3:
      cardName = "Ace of Cups";
      song = "Start of Something New";
      artist = "Zac Efron and Vanessa Hudgens in High School Musical";
      songLocation = "songs/high school musical-start of something new lyrics.mp3";
      imageLocation = "images/ace of cups.jpg";
      break;
    case 4:
      cardName = "Two of Cups";
      song = "Breaking Free";
      artist = "Zac Efron and Vanessa Hudgens in High School Musical";
      songLocation = "songs/Breaking Free - High School Musical - Lyrics.mp3";
      imageLocation = "images/two of cups.jpg";
      break;
    case 5:
      cardName = "Six of Cups";
      song = "This is Me";
      artist = "Demi Lovato and Joe Jonas in Camp Rock";
      songLocation = "songs/Camp Rock - This is me with lyrics.mp3";
      imageLocation = "images/six of cups.jpg";
      break;
    case 6:
      cardName = "Seven of Cups";
      song = "Call Me Maybe";
      artist = "Carly Rae Jepsen";
      songLocation = "songs/Call Me Maybe by Carly Rae Jepsen Lyrics.mp3";
      imageLocation = "images/seven of cups.jpg";
      break;
    case 7:
      cardName = "Six of Swords";
      song = "Since You've Been Gone";
      artist = "Kelly Clarkson";
      songLocation = "songs/Kelly Clarkson - Since U Been Gone (VIDEO).mp3";
      imageLocation = "images/six of swords.jpg";
      break;
  }
      
document.getElementById("output").innerHTML = '<p> Your card is the ' + cardName + '. The song that embodies this card, in my opinion, is ' + song + ' by ' + artist +
  '. You can listen to it below.</p> <br> <img src="' + imageLocation + '" class="tarot-imgs" width=400 height=600><br> <audio controls> <source src="'+ songLocation + '" type="audio/mp3"> Your browser does not support the audio element.</audio>';
}
