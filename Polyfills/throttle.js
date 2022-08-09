/*
  ## Throttling
  
  - Similar technique to debouncing only difference being that request is sent every given number of seconds regardless of wheater user has stopped the action or not.
  - With every request we cancel the previous request timer.
*/

function throttle(callback, delay) {
  let timerID;
  let lastTimeCalled = 0;

  return function throttled(...args) {
    const currentTime = Date.now();
    const timeSinceLastCalled = currentTime - lastTimeCalled;
    const delayRemaining = delay - timeSinceLastCalled;

    if (delayRemaining <= 0) {
      lastTimeCalled = Date.now();
      callback.apply(this, args);
    } else {
      clearTimeout(timerID);

      timerID = setTimeout(() => {
        lastTimeCalled = Date.now();
        callback.apply(this, args);
      }, delayRemaining);
    }
  }
}