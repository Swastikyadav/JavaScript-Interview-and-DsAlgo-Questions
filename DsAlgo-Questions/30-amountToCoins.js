/*
  Given an array of coins and an amount, figure out the coins (array) which will sum equal to coin.

  Ex:
  Amount - 46
  coins - [25, 10, 5, 2, 1]
  output - [25, 10, 10]

  Think like we need to bring the amount to zero, by using the coins - create an array of coins which when used amount will become zero.
*/

// Recursive Solution
function toCoins(amount, coinsArr) {
  if (amount === 0) {
    return [];
  }

  if (amount >= coinsArr[0]) {
    let leftAmount = amount - coinsArr[0];
    return [coinsArr[0], ...toCoins(leftAmount, coinsArr)];
  } else {
    coinsArr.shift();
    return toCoins(amount, coinsArr);
  }
}

console.log(toCoins(46, [25, 10, 5, 2, 1]));
// [25, 10, 10, 1]