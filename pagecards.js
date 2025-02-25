const takeBook = document.getElementById("take-the-book");
const giveBook = document.getElementById("give-the-book-back");

const nameBook = document.getElementById("book-name");
const nameFirst = document.getElementById("name-first");
const nameLast = document.getElementById("name-last");
const dateOfReturn = document.getElementById("date-of-giving");

takeBook.addEventListener("click", () => {
  if (nameBook.value == "" || nameFirst.value == "" || nameLast.value == "") {
    alert("Couldn`t take the book. Try again");
  } else {
    alert("The book has been successfully taken");
  }
});
giveBook.addEventListener("click", () => {
  if (dateOfReturn.value == "") {
    alert("Couldn`t return the book. Try again");
  } else {
    alert("The book has been successfully returned");
  }
});
