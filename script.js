document.getElementById("open").addEventListener("click", function () {
  // Listen for a click event on an element with the ID "open"

  // Toggle the "open" class on an element with the ID "cart"
  document.getElementById("cart").classList.toggle("open");

  // Get the element with the ID "container"
  var x = document.getElementById("container");
  x.classList.toggle("back"); // Cover the entire element with the background image
});
