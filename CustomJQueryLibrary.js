function $(selector) {
  const elements = document.querySelectorAll(selector);

  const self = {
    elements: elements,

      // Function to add or retrieve HTML content
    html: (content) => {
      if (content !== undefined) {
        for (const element of elements) {
          element.innerHTML = content;
        }
        return self;
      }
      return elements[0].innerHTML;
    },

    // Function to bind an event listener
    on: (event, callback) => {
      for (const element of elements) {
        element.addEventListener(event, callback);
      }
      return self;
    },

    // Function to hide elements
    hide: () => {
      for (const element of elements) {
        element.style.display = "none";
      }
      return self;
    },

    // Function to show elements
    show: () => {
      for (const element of elements) {
        element.style.display = "";
      }
      return self;
    },

    // Function to toggle visibility
    toggle: () => {
      for (const element of elements) {
        if (element.style.display === "none") {
          element.style.display = "";
        } else {
          element.style.display = "none";
        }
      }
      return self;
    },

    // Function to set or get attributes
    attr: (name, value) => {
      if (value === undefined) {
        return elements[0].getAttribute(name);
      } else {
        for (const element of elements) {
          element.setAttribute(name, value);
        }
        return self;
      }
    },

    // Function to add or remove classes
    addClass: (className) => {
      for (const element of elements) {
        element.classList.add(className);
      }
      return self;
    },

    removeClass: (className) => {
      for (const element of elements) {
        element.classList.remove(className);
      }
      return self;
    },

    // Function to perform AJAX requests (example)
    ajax: (options) => {
      // Implement AJAX functionality here
      return self;
    },
  };

  return self;
}

// Example library calls
$("h1").attr("class", "new-class");

console.log($("h1").attr("class"));

$("h2").hide().show().toggle();

$("h3").on("click", function () {
  alert("I was clicked");
});

// Adding a class to all div elements with class 'box'
$(".box").addClass("highlight");

// Removing a class from all elements with class 'text'
$(".text").removeClass("highlight");
