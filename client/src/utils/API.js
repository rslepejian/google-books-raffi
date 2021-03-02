import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {


  getBooksLocal: function() {
    return axios.get("/api/books");
  },

  getBook: function(id) {
    return axios.get("/api/books" + id);
  },

  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },

  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  

  getBooks: function (books) {
    return new Promise((resolve, reject) => {
      const Query = "https://www.googleapis.com/books/v1/volumes?q=" + books;
      console.log(Query)
      axios.get(Query).then((res) => {
        const booksdata = res.data.items;
        const results = booksdata.map((book) => {
          console.log(book)
          if (book.volumeInfo.imageLinks === undefined) {
            return {
              title: book.volumeInfo.title,
              author: book.volumeInfo.author,
              image: "https://via.placeholder.com/130x200.png",
              synopsis: book.volumeInfo.description,
              link: book.volumeInfo.infoLink
            }
          }
          else {
            return {
              title: book.volumeInfo.title,
              author: book.volumeInfo.author,
              image: book.volumeInfo.imageLinks.thumbnail,
              synopsis: book.volumeInfo.description,
              link: book.volumeInfo.infoLink
            };
          }
        });
        resolve(results);
      }).catch((err) => reject(err));
    });
  },
  getBookList: function () {
    return new Promise((resolve) => {
      resolve();
    })
  },
}


// take from activities number 5, change get all books to get all searched book

// import axios from "axios";

// export default {
//   // Gets all search books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };
