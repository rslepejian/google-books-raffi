import React, { useState, useEffect } from "react";
import SavedCard from "../components/SavedCard";
import API from "../utils/API";
// import Result from "../components/Result";

function Saved() {
  const [books, setBooks] = useState([]);


  function saveBook() {
    API.getBooksLocal().then((books) => {
      setBooks(books.data)
    })
      .catch(err => console.log(err));
  };
// set the state to save book
// save book loads all the book in saved db
  useEffect(() => {
    saveBook()
  
  },[] )
// console.log (books)
// add function delete books
  function deleteBook(id) {
    // call api delete book function 
    API.deleteBook(id)
    .then((res) => saveBook()) 
    
    .catch(err => console.log(err))
  };
  return (
    
    <div>

      {books.map((book, index) => {
        return (<SavedCard
          key={index}
          title={book.title}
          image={book.image}
          author={book.author}
          synopsis={book.synopsis}
          link={book.link}
          // insert onclick function to pass as prop
          onClick={()=> deleteBook(book._id)}
         
        />
        )
      })}

    </div>
  );
}

export default Saved;