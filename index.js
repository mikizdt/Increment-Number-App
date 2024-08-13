// Start the counter at 0;
let count = 0;
// Target and change the content to display the number
let h1 = document.querySelector("h1");

h1.textContent = count;

// Functionality for the buttons
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

increaseBtn.onclick = function () {
  count++;
  h1.textContent = count;
};

decreaseBtn.onclick = function () {
  count--;
  // Cannot decrease lower then 0
  if (count < 0) {
    count = 0;
  }

  h1.textContent = count;
};

resetBtn.onclick = function () {
  h1.textContent = count = 0;
};
