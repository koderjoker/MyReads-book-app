import React from 'react'
import './App.css'

// Import react-router-dom
import { Route } from 'react-router-dom'

// Import the home component
import Home from './components/Home';

// Import the search component
import Search from './components/Search';

// Component BooksApp
class BooksApp extends React.Component {
  render() {
    return (
      //Use 'exact' path for exactly same url
      <div>
        <Route exact path="/" component={ Home } />
        <Route exact path="/search" component={ Search } />
      </div>
    );
  }
}

// named export
export default BooksApp
