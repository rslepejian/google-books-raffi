import React from "react";


function SearchForm (props) {
  // console.log(props)
  return (
    <div clasName= "container">
      <form >
        <div className= "col-md-5">
        <label className="form-label">Look for your book</label>
        <input for="inputPassword6" onChange={(event) => {
        event.preventDefault();
        // console.log("banana")
        props.loadBooks(event)
      }
      } placeholder='Search for a book title!' type="text" className="form-control" id="exampleInput" aria-describedby="" />

        </div>
      </form>
    </div>
  )
}
export default SearchForm;

