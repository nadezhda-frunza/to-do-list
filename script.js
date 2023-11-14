// Need to click button "add"
//After input value new field with value appears - ok
// if field is empty nothing happens or write error - ok
// click on the item when it is done

//create delete button = ok
// delete button should be created for each task separately and deletes one task
//move checkbox to the beginning of the field

//test input
// testValues();

function testValues() {
  for (let i = 0; i < 10; i++) {
    addItem(`test-item ${i}`);
  }
}

const addButton = document.getElementById("btn");

addButton.addEventListener("click", function () {
  const inputValue = document.getElementById("myText").value;
  addItem(inputValue);
});

function addItem(text) {
  const item = document.createElement("div");
  item.className = "list-item";

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.textContent = "DELETE";

  //making delete button delete separate item
  deleteButton.addEventListener("click", function (event) {
    event.stopPropagation();
    item.remove();
  });

  //creating new list item + checkbox + delete button
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");

  const newParagraph = document.createElement("p");
  newParagraph.textContent = text;
  newParagraph.classList.add("added-paragraph");

  item.appendChild(checkbox);
  item.appendChild(newParagraph);
  item.appendChild(deleteButton);

  document.getElementById("output").appendChild(item);
  document.getElementById("myText").value = "";
}

//If nothing is written in the field
const errorMessage = document.getElementById("error-message");

if (inputValue.trim() === "") {
  errorMessage.style.display = "block";
  deleteButton.style.display = "none";
  checkbox.style.display = "none";
} else {
  errorMessage.style.display = "none";
}

//when the task is done
deleteButton.addEventListener("click", function () {
  newParagraph.classList.toggle("crossed-out");
  newParagraph.remove();
  deleteButton.style.display = "none";

  setTimeout(function () {
    newParagraph.remove();
  }, 0);
});
