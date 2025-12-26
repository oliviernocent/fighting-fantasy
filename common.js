// Disable zoom on double tap
document.addEventListener(
  "dblclick",
  function (event) {
    event.preventDefault();
  },
  { passive: false }
);

let diceFace = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

function rollDice(n) {
  let faces = []
  for (let i = 0; i < n; i++)
    faces.push(Math.floor(Math.random() * 6) + 1);
  return faces
}

let appData, currentBook;

function loadFromLocalStorage() {
  if (!localStorage.getItem('ffappdata'))
    localStorage.setItem('ffappdata', `{"bookList": [], "currentBookIndex": 0}`);
  appData = JSON.parse(localStorage.getItem('ffappdata'));
  currentBook = appData.bookList[appData.currentBookIndex];
}

function saveToLocalStorage() {
  localStorage.setItem("ffappdata", JSON.stringify(appData));
}

loadFromLocalStorage();