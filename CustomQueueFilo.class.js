// Define a FILOQueue class
class FILOQueue {
    constructor() {
        // Initialize an empty queue as an array
        this.queue = [];
    }

    // Method to enqueue (add) elements to the back of the queue
    enqueue(item) {
        this.queue.push(item);
    }

    // Method to dequeue (remove) elements from the back of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.queue.pop();
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

// Create an instance of the FILOQueue class
const filoQueue = new FILOQueue();

// Enqueue elements
filoQueue.enqueue("Task 1");
filoQueue.enqueue("Task 2");
filoQueue.enqueue("Task 3");

// Dequeue elements (follows FILO order)
const completedTask1 = filoQueue.dequeue();
console.log("Completed Task 1:", completedTask1);

const completedTask2 = filoQueue.dequeue();
console.log("Completed Task 2:", completedTask2);

// Check queue size
const queueSize = filoQueue.size();
console.log("Queue Size:", queueSize);
