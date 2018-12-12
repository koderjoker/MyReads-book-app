// Make react usable
import React from 'react';

// Component Book
class Book extends React.Component {

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${ this.props.book.imageLinks.thumbnail }")`}}></div>
            <div className="book-shelf-changer">
              {/*Shelf value sent as book prop for shelf status. If value is changed call changeShelf and send book and new select menu value as params*/}
              <select value={ this.props.book.shelf } onChange={(event) => {this.props.changeShelf(this.props.book, event.target.value);}}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{ this.props.book.title }</div>
          <div className="book-authors">{ this.props.book.authors }</div>
        </div>
      </li>
    );
  }
}

// named export
export default Book;
