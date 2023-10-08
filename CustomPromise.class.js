class CustomPromise {
  constructor(executor) {
    this.status             = "pending";
    this.value              = undefined;
    this.reason             = undefined;
    this.onResolveCallbacks = [];
    this.onRejectCallbacks  = [];

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value  = value;
        this.onResolveCallbacks.forEach((callback) => callback(value));
      }
    };

    const reject = (reason) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.reason = reason;
        this.onRejectCallbacks.forEach((callback) => callback(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new CustomPromise((resolve, reject) => {
      if (this.status === "fulfilled") {
        try {
          const result = onFulfilled(this.value);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }

      if (this.status === "rejected") {
        if (typeof onRejected === "function") {
          try {
            const result = onRejected(this.reason);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        } else {
          reject(this.reason);
        }
      }

      if (this.status === "pending") {
        if (typeof onFulfilled === "function") {
          this.onResolveCallbacks.push((value) => {
            try {
              const result = onFulfilled(value);
              resolve(result);
            } catch (error) {
              reject(error);
            }
          });
        }

        if (typeof onRejected === "function") {
          this.onRejectCallbacks.push((reason) => {
            try {
              const result = onRejected(reason);
              resolve(result);
            } catch (error) {
              reject(error);
            }
          });
        }
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  static resolve(value) {
    return new CustomPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    return new CustomPromise((_, reject) => reject(reason));
  }

  static all(promises) {
    return new CustomPromise((resolve, reject) => {
      const results = [];
      let resolvedCount = 0;

      for (let i = 0; i < promises.length; i++) {
        promises[i]
          .then((value) => {
            results[i] = value;
            resolvedCount++;

            if (resolvedCount === promises.length) {
              resolve(results);
            }
          })
          .catch(reject);
      }
    });
  }

  static race(promises) {
    return new CustomPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(resolve).catch(reject);
      }
    });
  }
}

// Example usage:

const promise = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 1000);
});

promise
  .then((result) => {
    console.log(result); // Output: Promise resolved!
    return "New Value";
  })
  .then((newValue) => {
    console.log(newValue); // Output: New Value
    throw new Error("Custom Error");
  })
  .catch((error) => {
    console.error(error); // Output: Error: Custom Error
  });

/*

Output 

promise resolved!
New Value
Error: Custom Error

*/
