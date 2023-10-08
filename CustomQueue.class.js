// Queue Example with Class -- FIFO ( First inFirst Out )
class CustomQueue {
    constructor() {
        // Initialize an empty queue as an array
        this.queue = [];
    }

    // Method to enqueue (add) elements to the back of the queue
    enqueue(item) {
        this.queue.push(item);
    }

    // Method to dequeue (remove) elements from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.queue.shift();
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }

    // Method to get the current size of the queue
    size() {
        return this.queue.length;
    }
}

// Create an instance of the Queue class
const myQueue = new CustomQueue();

// Enqueue elements
myQueue.enqueue("Item 1");
myQueue.enqueue("Item 2");
myQueue.enqueue("Item 3");

// Dequeue elements
const removedItem = myQueue.dequeue();
console.log("Removed Item:", removedItem);

// Check queue size
const queueSize = myQueue.size();
console.log("Queue Size:", queueSize);
