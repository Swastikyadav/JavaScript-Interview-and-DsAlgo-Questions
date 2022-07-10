/*
  Create a custom Events library class.
*/

class Events {
  constructor() {
    this.events = {};
  }

  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated with a given eventName.
  trigger(eventName) {
    if (this.eventName) {
      this.events[eventName].forEach(cb => {
        cb();
      });
    }
  }

  // Remove all event handlers associated with the given eventName.
  off(eventName) {
    this.events[eventName] = [];
  }
}