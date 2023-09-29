// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

// Create a function expression called clearInput to clear the input box.
const clearInput = function () {
  guestInput.value = "";
};

// Create a function expression called addToList to add a guest to the list.
const addToList = function (guest) {
  // Create a new list element.
  const listItem = document.createElement("li");

  // Set the text of the listItem to the value of the guest variable.
  listItem.innerText = guest;

  // Append the listItem to the guestList to display it.
  guestList.appendChild(listItem);

  // Call updateGuestCount to update the guest count.
  updateGuestCount();
};

// Create a function expression called updateGuestCount to update the number attending.
const updateGuestCount = function () {
  // Select all list elements inside the unordered list with class "guest-list."
  const guests = document.querySelectorAll(".guest-list li");

  // Update the innerText of guestCount with the length of guests.
  guestCount.innerText = guests.length;

  // Check if the number of guests is equal to 8.
  if (guests.length === 8) {
    // Add the "hide" class to hide the input and button, and remove it from the guestFull message.
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  } else {
    // Remove the "hide" class if it's not equal to 8.
    addGuestButton.classList.remove("hide");
    guestInput.classList.remove("hide");
    guestInputLabel.classList.remove("hide");
    guestFull.classList.add("hide");
  }
};

// Add an event listener for the addGuestButton variable to listen for a click event.
addGuestButton.addEventListener("click", function () {
  // Capture the value entered in the guestInput input field.
  const guest = guestInput.value;

  // Check if the guest variable is not equal to an empty string.
  if (guest !== "") {
    // Call the addToList function and pass the guest as an argument.
    addToList(guest);

    // Clear the input field using the clearInput function.
    clearInput();
  }
});
