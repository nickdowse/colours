// classic waiting for the document to be ready function
$(document).ready(function() {

  // Set color on page load if color already in URL
  if (window.location.hash.length > 0) {
    setBackgroundColor(window.location.hash)
  }

  // When someone presses a key and lets go...
  $(document).on("keyup", function(e) {
    if(e.keyCode == 32) { // if the key is a spacebar
      var newBackgroundColor = getBackgroundColor(); // call 'getBackgroundColor()' to get the new background color and store it in a variable
      setBackgroundColor(newBackgroundColor); // call 'setBackgroundColor' function with new background color variable
    }
  });

  function setBackgroundColor(color) {
    $('body').css("background-color", color) // update background-color
    $('body .center-color p').text(color) // update text of color hex
    window.location.hash = color // update hash
  }

  function getBackgroundColor(color) {
    var result = "#"; // put hash at start of hex value
    var i = 0; // Set up loop iterator
    while (i < 6) { // hex values have six numbers (#123456)
      result = result + items[Math.floor(Math.random() * items.length)]; // in each iteration of the loop, add a character/number to the hex value
      i = i + 1; // increment i so that we don't have an infinite loop
    }
    return result; // return our result
  }

  // set up our array with all the possible values in a hex color values
  var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F'];

  setBackgroundColor(getBackgroundColor()); // update background color when user lands on page
});
