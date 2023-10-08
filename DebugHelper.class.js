class DebugUtils {
  // Log a message to the console with a timestamp
  static log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  // Log an error message to the console with a timestamp
  static error(message) {
    const timestamp = new Date().toISOString();
    console.error(`[${timestamp}] ERROR: ${message}`);
  }

  // Log a warning message to the console with a timestamp
  static warn(message) {
    const timestamp = new Date().toISOString();
    console.warn(`[${timestamp}] WARNING: ${message}`);
  }

  // Log an info message to the console with a timestamp
  static info(message) {
    const timestamp = new Date().toISOString();
    console.info(`[${timestamp}] INFO: ${message}`);
  }

  // Log an object to the console with JSON formatting
  static logObject(obj) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Object:`, JSON.stringify(obj, null, 2));
  }

  // Debug function that logs a message if a condition is false
  static assert(condition, message) {
    if (!condition) {
      DebugUtils.error(`Assertion failed: ${message}`);
    }
  }

  // Debug function that logs a message only in development mode
  static debugLog(message) {
    if (process.env.NODE_ENV === 'development') {
      DebugUtils.log(`[DEBUG] ${message}`);
    }
  }
}

// Example usage:
DebugUtils.log('This is a log message.');
DebugUtils.error('This is an error message.');
DebugUtils.warn('This is a warning message.');
DebugUtils.info('This is an info message.');

const sampleObject = { name: 'John', age: 30 };
DebugUtils.logObject(sampleObject);

DebugUtils.assert(sampleObject.age >= 18, 'Age must be 18 or older.');

DebugUtils.debugLog('Debugging message (only in development mode)');
