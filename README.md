# DOM 2 - Handling User Input and Updating the DOM Lab 2

## Objective:
In this lab, you will learn how to handle user input and dynamically update the DOM based on user interactions. By the end of this lab, you will be able to manipulate the DOM with form inputs and other user-triggered events, enhancing the user experience of your web page.

## Steps to Complete the Lab:

### Step 1: Setup Your Project
1. Inspect the `src` folder to locate the `index.mjs` file, where you'll implement the tasks for this lab.
2. Make sure the HTML file contains the following elements for this lab:
   - A text input (`<input type="text" id="userInput" />`)
   - A button (`<button id="submitButton">Submit</button>`)
   - A div or container (`<div id="output"></div>`) to display the input value.

### Step 2: Capture User Input
- In the `index.mjs` file, write a function that captures the text input entered by the user when the "Submit" button is clicked.

Guidelines:
- Get the value from the `<input>` element with the `id="userInput"`.
- Write a function that listens for the "click" event on the "Submit" button.
- Use `event.preventDefault()` to prevent the default button behavior if necessary.

### Step 3: Display User Input in the DOM
- Once the input value is captured, create a new element (`<p>`) and display the input value inside it.
- Append this new element to the `#output` container.

Guidelines:
- Create a new `<p>` element using `document.createElement('p')`.
- Set the text content of this new element to the value entered by the user.
- Append the newly created element to the `#output` container in the DOM.

### Step 4: Clear the Input Field
- After the input is submitted, clear the input field (`<input>`) so the user can enter new data.
- Use the `.value` property of the input element to set its value to an empty string.

### Step 5: Optional (Bonus): Add Validation for Empty Input
- Check if the user entered any text before submitting.
- If the input field is empty, show an alert notifying the user to enter some text before submitting.

### Example:
Below is an example to guide you through this lab. The code uses the steps mentioned above:

```javascript
// Step 2: Capture User Input when the "Submit" button is clicked
document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form behavior

    // Get the value from the input field
    const userInput = document.getElementById('userInput').value;

    // Step 3: Display User Input
    if (userInput.trim() !== '') {
        // Create a new <p> element
        const newElement = document.createElement('p');
        newElement.textContent = `You entered: ${userInput}`;

        // Append the new element to the output container
        document.getElementById('output').appendChild(newElement);

        // Step 4: Clear the input field
        document.getElementById('userInput').value = '';
    } else {
        alert('Please enter some text!');
    }
});
```


## Questions to Answer

1. **How does the `event.preventDefault()` method help in handling form submissions in this lab?**
   - Describe how preventing the default action of the submit button affects the flow of the program.

2. **What is the purpose of the `.value` property in capturing the input from the user?**
   - Explain how the `.value` property is used in this lab to retrieve the text entered in the input field.

3. **What would happen if you did not clear the input field after submitting the input?**
   - Discuss the impact of not resetting the input field after submitting the form, especially in terms of user experience.

4. **Why is it important to validate that the user input is not empty before submitting the form?**
   - Explain the reason for adding the validation step and the potential consequences of allowing empty input to be processed.

5. **In what situations could you modify the DOM using other methods like `innerHTML` or `setAttribute()` instead of `createElement()`?**
   - Discuss scenarios where other DOM manipulation methods like `innerHTML` or `setAttribute()` might be more useful than `createElement()` in dynamically updating content.



## Conclusion

Congratulations! You’ve learned how to:

- Capture user input from a text field.
- Dynamically update the DOM with the captured input.
- Clear the input field after submission.
- Optionally validate the user input to ensure it’s not empty.

Feel free to extend this lab by experimenting with other types of user inputs (such as checkboxes or dropdown menus) and displaying more dynamic content in the DOM.

## Next Steps
- Explore additional DOM manipulation methods like `innerHTML`, `setAttribute()`, and `classList` for more interactive content.
- Experiment with handling multiple input fields at once or adding styling dynamically to elements.