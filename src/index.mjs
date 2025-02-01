// Step 1: Add an event listener for the "Submit" button
// - Listen for a 'click' event on the button with the id "submitButton"
// - Prevent the default action of the button (e.g., form submission) using event.preventDefault()

document
  .getElementById("submitButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() !== "") {
      const newElement = document.createElement("p");
      newElement.textContent = `${userInput}`;

      document.getElementById("output").appendChild(newElement);

      document.getElementById("userInput").value = "";
    } else {
      alert("Please enter some text!");
    }
  });

// Step 2: Capture User Input
// - Retrieve the value entered by the user in the text input with the id "userInput"
// - Store the input value for further use (to display it on the page or process it)

// Step 3: Display User Input in the DOM
// - If the input is not empty, create a new <p> element
// - Set the text content of the newly created <p> element to show the captured user input
// - Append the new <p> element to the container with the id "output" to display it on the page

// Step 4: Clear the Input Field
// - After the input is displayed, clear the text input field (set its value to an empty string)
// - This ensures the input field is ready for the next entry

// Step 5: Optional (Bonus): Add Input Validation
// - Before processing the input, check if the text field is empty
// - If the input is empty, display an alert asking the user to enter some text
// - If the input is not empty, continue with displaying the text and clearing the field
