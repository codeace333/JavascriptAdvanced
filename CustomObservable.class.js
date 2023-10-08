class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  emit(data) {
    this.observers.forEach((observer) => {
      observer.update(data);
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} received data: ${data}`);
  }
}

// Creating an observable instance
const myObservable = new Observable();

// Creating observer instances
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");
const observer3 = new Observer("Observer 3");

// Subscribing observers to the observable
myObservable.subscribe(observer1);
myObservable.subscribe(observer2);

// Notifying observers
myObservable.emit("Hello, observers!");

// Unsubscribing an observer
myObservable.unsubscribe(observer1);

// Notifying remaining observers
myObservable.emit("Observers after unsubscription");

// op
/*
"Observer 1 received data: Hello, observers!"

"Observer 2 received data: Hello, observers!"

"Observer 2 received data: Observers after unsubscription"
*/
