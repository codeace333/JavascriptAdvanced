// Subject class
class Subject {
  observers = [];
  constructor() {
    this.observers = []; // Array to store observers
  }

  // Method to add observer
  subscribe(observer) {
    this.observers.push(observer);
    return {
      unsubscribe: () => {
        this.observers = this.observers.filter((o) => o !== observer);
      },
    };
  }

  // Method to notify observers
  next(value) {
    this.observers.forEach((observer) => observer.next(value));
  }

  // Method to notify observers of error
  error(error) {
    this.observers.forEach((observer) => observer.error(error));
  }

  // Method to notify observers of completion
  complete() {
    this.observers.forEach((observer) => observer.complete());
  }
}

// Usage
const subject = new Subject();

subject.subscribe({
  next: (value) => console.log(`1st Observer: ${value}`),
  error: (error) => console.error(`1st Observer: ${error}`),
  complete: () => console.log("1st Observer: Complete"),
});

subject.subscribe({
  next: (value) => console.log(`2nd Observer: ${value}`),
  error: (error) => console.error(`2nd Observer: ${error}`),
  complete: () => console.log("2nd Observer: Complete"),
});

subject.next(1);
subject.next(2);
subject.complete();

/**  output
* * 1st Observer: 1
* ! 2nd Observer: 1
* ? 1st Observer: 2"
* Todo 2nd Observer: 2"
* @Parem 1st Observer: Complete"
* 2nd Observer: Complete"

*/
