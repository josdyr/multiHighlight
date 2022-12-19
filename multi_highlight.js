function extractText() {
  // Get all the page's elements
  var elements = document.body.getElementsByTagName("article");
  elements = elements[0].getElementsByTagName("*");

  // Initialize the text variable
  var text = [];

  // Loop through all the elements
  for (var i = 0; i < elements.length; i++) {
    // If the element is a heading or a paragraph, add its text to the text variable
    if (elements[i].tagName === "H1" || elements[i].tagName === "H2" || elements[i].tagName === "H3" || elements[i].tagName === "P") {
      text.push(elements[i].textContent + "<br><br>");
    }
  }

  // Return the extracted text
  document.body.innerHTML = text.join(" ");
  return text;
}

function highlightkeywords() {
  // Get the keywords to search for
  var keywords = prompt("Enter the keywords you want to highlight (comma separated):");

  // Split the text into an array of words
  var allKeywords = keywords.split(",");

  // Get all the text on the page
  var text = document.body.innerHTML;

  // Split the text into an array of words
  var words = text.split(" ");

  var colors = ["red", "green", "blue"]

  // Loop through all the words
  for (var i = 0; i < words.length; i++) {
    // Check if the current word is the keywords
    if (allKeywords.includes(words[i])) {
      //get current color
      var color = colors[allKeywords.indexOf(words[i])]
      // If it is, wrap it in a span element with a red background color
      words[i] = "<span style='background-color:" + color + "'>" + words[i] + "</span>";
    }
  }

  // Join the words back into a single string
  text = words.join(" ");

  // Replace the text on the page with the highlighted version
  document.body.innerHTML = text;
}

extractText()
highlightkeywords()
