// Make react usable
import React from 'react';

// Import Shelf components
import Shelf from './Shelf'

// Use API
import * as BooksAPI from '../BooksAPI'

// Import react-router-dom
import { Link } from 'react-router-dom'

// Component Home
class Home extends React.Component {

  // Invoked before component is mounted
  constructor(props) {
    super(props);
    // Object to store list of books
    this.state = { bookDisplay: [] }
  }

  // Invoked after a component is mounted
  componentDidMount() {
    // Call API for book listing
    BooksAPI.getAll().then(response => {
      // Re render when component changes
      this.setState({ bookDisplay: response });
    })
  }

  // Change book shelf
  changeShelf = (shiftedBook, newShelf) => {
    // Call API for book and its new shelf
    BooksAPI.update(shiftedBook, newShelf).then(response => {
      // Assign its new shelf to it
      shiftedBook.shelf = newShelf;
      // Save new state
      let newBookDisplay = this.state.bookDisplay
      // Set new state
      this.setState({ bookDisplay: newBookDisplay })
    })
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {/*Filter book for each shelf based on shelf and send to shelf component*/}
            <Shelf heading="Currently reading" books={ this.state.bookDisplay.filter(book => book.shelf === "currentlyReading") } changeShelf={this.changeShelf}/>
            <Shelf heading="Want to read" books={ this.state.bookDisplay.filter(book => book.shelf === "wantToRead") } changeShelf={this.changeShelf}/>
            <Shelf heading="Read" books={ this.state.bookDisplay.filter(book => book.shelf === "read") } changeShelf={this.changeShelf}/>
          </div>
        </div>

        {/*Link to Search.js*/}
        <Link to="/search">
        <div className="open-search">
          <button>Add a book</button>
        </div>
        </Link>

      </div>
    );
  }
}

// named export
export default Home;
