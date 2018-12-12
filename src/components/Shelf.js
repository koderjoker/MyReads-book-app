import React from 'react';

// Import Book components
import Book from './Book'

// Component Shelf
class Shelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {/*List 3 shelves*/}
            <Book />
            <Book />
            <Book />
          </ol>
        </div>
      </div>
    );
  }
}

// named export
export default Shelf;
