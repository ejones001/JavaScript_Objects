// Constructor function for Book objects
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Method to display book information
Book.prototype.displayInfo = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
};

// Array to store book objects
let library = [];

// Function to add a new book to the library
function addBook(title, author, pages) {
    let newBook = new Book(title, author, pages);
    library.push(newBook);
}

// Function to search for books by title
function searchByTitle(title) {
    return library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}

// Function to search for books by author
function searchByAuthor(author) {
    return library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
}

// Function to filter out books with more than 100 pages
function filterBooksByPages() {
    return library.filter(book => book.pages <= 100);
}

// Function to map book information to a formatted string
function mapBookInfo() {
    return library.map(book => `Title: ${book.title}, Author: ${book.author}`);
}
