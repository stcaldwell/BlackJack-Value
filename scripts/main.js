/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue(hand) {
  let worth = 0;
  let ace = 0;
  for (i = 0; i < hand.length; i++) {
    if (hand[i] == "K" || hand[i] == "Q" || hand[i] === "J") {
      worth += 10;
    } else if(hand[i] === "A") {
      worth += 11;
      ace++;
    } else {
      worth += parseInt(hand[i]);
    }
  }
  while(ace) {
    if(worth > 21) {
      worth -= 10;
    }
    ace--;
  }
  console.log(worth);
  return worth;

}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
