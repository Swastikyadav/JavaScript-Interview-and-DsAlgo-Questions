/*
  - Debouncing is a technique to rate limit / reduce the number of requests to the server.
  - For example, when user types in an input, instead of sending request for every character typed, we send request only when user stops typing for a time period.
  - And if user starts typing again before given time period, we cancel the ongoing request and start new request.
*/

function debounce(callback, delay) {
  let timerID;

  return function(...args) {
    clearTimeout(timerID);

    timerID = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  }
}