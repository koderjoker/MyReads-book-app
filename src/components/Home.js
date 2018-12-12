// Make react usable
import React from 'react';

// Import Shelf components
import Shelf from './Shelf'

// Component Home
class Home extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {/*List 3 shelves*/}
            <Shelf/>
            <Shelf/>
            <Shelf/>
          </div>
        </div>

        <div className="open-search">
          <button>Add a book</button>
        </div>

      </div>
    );
  }
}

// named export
export default Home;
