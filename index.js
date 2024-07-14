function fetchBooks() {
  console.log("fetchBooks called"); // Debugging log
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => {
      console.log("Response received from API"); // Debugging log
      return resp.json();
    })
    .then((json) => {
      console.log("JSON parsed:", json); // Debugging log
      renderBooks(json);
      processBooksData(json);
    })
    .catch((error) => console.error("Error fetching books:", error));
}

function renderBooks(books) {
  console.log("renderBooks called with books:", books); // Debugging log
  var booksList = document.getElementById('books');
  if (!booksList) {
    console.error("Element with ID 'books' not found");
    return;
  }

  books.forEach(function (book) {
    var listItem = document.createElement('li');
    listItem.textContent = book.name;
    booksList.appendChild(listItem);
  });
}

function processBooksData(books) {
  // 1. Find the 5th book in the series
  const fifthBook = books[4];
  console.log("5th Book in the series:", fifthBook.name);

  // 2. Find the 1031st character in the series
  fetch("https://anapioficeandfire.com/api/characters/1031")
    .then((resp) => resp.json())
    .then((character) => {
      console.log("1031st Character in the series:", character.name);
    });

  // 3. Calculate the total number of pages of all the books
  const totalPages = books.reduce((sum, book) => sum + book.numberOfPages, 0);
  console.log("Total number of pages in all books:", totalPages);
}

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded and parsed"); // Debugging log
  fetchBooks();
});

