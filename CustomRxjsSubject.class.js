class CustomSubject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  next(data) {
    this.observers.forEach((observer) => {
      observer.next(data);
    });
  }

  error(error) {
    this.observers.forEach((observer) => {
      observer.error(error);
    });
  }

  complete() {
    this.observers.forEach((observer) => {
      observer.complete();
    });
  }
}

class CustomObserver {
  constructor(name) {
    this.name = name;
  }

  next(data) {
    console.log(`${this.name} received data: ${data}`);
  }

  error(error) {
    console.log(`${this.name} received error: ${error}`);
  }

  complete() {
    console.log(`${this.name} received complete signal`);
  }
}

// Creating a custom subject instance
const myCustomSubject = new CustomSubject();

// Creating custom observer instances
const observer1 = new CustomObserver("Observer 1");
const observer2 = new CustomObserver("Observer 2");
const observer3 = new CustomObserver("Observer 3");

// Subscribing observers to the custom subject
myCustomSubject.subscribe(observer1);
myCustomSubject.subscribe(observer2);
myCustomSubject.subscribe(observer3);

// Emitting data, error, and complete signals
myCustomSubject.next("Hello, Observers!");
myCustomSubject.error("An error occurred!");
myCustomSubject.complete();
