import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchComponent from './SearchComponent'
import {Route} from 'react-router-dom'
import BookcaseComponent from './BookcaseComponent';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books})
    })
  }

  onShelfChange = (movedBook) => {
    const books = this.state.books.filter((book) => {
      return book.id !== movedBook.id
    })
    
    if (movedBook.shelf !== 'none') {
      books.push(movedBook)
    }

    this.setState({books})
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookcaseComponent
            books = {this.state.books}
            onShelfChange = {this.onShelfChange}
          />
        )}/>

        <Route path='/search' render={() => (
          <SearchComponent
            books = {this.state.books}
            onShelfChange = {this.onShelfChange}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
