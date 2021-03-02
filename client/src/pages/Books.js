// ok, this is where all the shenanigans happen
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SearchForm from '../components/SearchForm';
import Result from '../components/ResultCard';


function Books() {
  // ?set state 
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState({});
  // console.log (books)
  // useEffect(()=>{
  //   loadBooks();
  // },[search])

  // // fucntion loadBooks this will load all the book instead of just the one that is searched 
  // const loadBooks = ()=> {
  //   API.getBooks().then((books) => {
  //     setBooks(books)
  //     // console.log(users)
  //   })
  //     .catch(err => console.log(err));
  // }
  // this will incorperate the name of the search 
  function loadBooks(event) {
    event.preventDefault();
    // console.log("loadedbooks")
    var searchName = event.target.value;
    if (searchName === "") {
      setBooks([]);
    }

    API.getBookList().then(() => {
      API.getBooks(searchName).then((books) => {
        setBooks(books)
      });
    })
      .catch(err => console.log(err));
  }

  function saveBooks(bookData) {
    console.log(bookData);
    API.saveBook({
      title: bookData.title,
      author: bookData.author,
      synopsis: bookData.synopsis,
      image: bookData.image,
      link: bookData.link
    })
      .catch(err => console.log(err))
  }

  // // function search 
  // const updateSearch =e =>{
  //   setSearch(e.target.value)
  // }
  // const getSearch =e => {
  //   console.log("banana")
  //   e.preventDefault();
  //   loadBooks();
  // }
  return (
    <div>
      <SearchForm loadBooks={loadBooks} />

      {books.map((book, index) => {
        return (<Result
          key={index}
          title={book.title}
          image={book.image}
          author={book.author}
          synopsis={book.synopsis}
          link={book.link}
          saveBooks={saveBooks}
        />

        )
      })}

    </div>
  );
}

export default Books;

