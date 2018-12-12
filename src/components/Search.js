// Make react usable
import React from 'react';

// Use API
import * as BooksAPI from '../BooksAPI'

// Import Book components
import Book from './Book'

// Component Search
class Search extends React.Component {

    // Invoked before component is mounted
    constructor(props) {
      super(props);
      this.state = { bookDisplay: [], searchResults: [], query: '' }
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

    // Check query and display search results
    searchBook(newQuery) {
      this.setState({ query: newQuery });
      // No search results if empty string or undefined or null
      if(this.state.query === '' || this.state.query === undefined || this.state.query === null) {
        return this.setState({ searchResults: [] });
      }
      BooksAPI.search(this.state.query).then(response => {
        // If response has properties error and items clear search results
        if(response.error && response.items) {
          return this.setState({ searchResults: [] });
        }
        // Else return response
        else {
          return this.setState({ searchResults: response });
        }
      });
    }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search">Close</button>
          <div className="search-books-input-wrapper">
          {/* The BooksAPI.search method searches by title or author. Every search is limited by search terms. */}
          {/* Set value as this.state.query. Call searchBook when query changed */}
          <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.searchBook(event.target.value)} />
          </div>
        </div>
        <div className="search-books-bookMatches">
          <ol className="books-grid">
          { /* Send book and key as props to the Book component (As mentioned use key for list items and give unique identify) */}
          { this.state.searchResults.map((book) => <Book changeShelf={this.changeShelf} book={book} key={book.id} />) }
          </ol>
        </div>
      </div>
    );
  }
}

// named export
export default Search;
