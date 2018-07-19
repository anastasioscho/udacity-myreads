import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookshelfComponent from './BookshelfComponent'
import SearchComponent from './SearchComponent'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books})
    })
  }

  filterBooks(shelf) {
    return this.state.books.filter(book => book.shelf === shelf)
  }

  onShelfChange = (bookChanges) => {
    const books = this.state.books.filter((book) => {
      for (const shelf in bookChanges) {
        if (bookChanges.hasOwnProperty(shelf) && bookChanges[shelf].includes(book.id)) {
          book.shelf = shelf
          return book
        }
      }
      return false
    })

    this.setState({books})
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchComponent />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookshelfComponent shelfTitle='Currently Reading' shelfBooks={this.filterBooks('currentlyReading')} onShelfChange={this.onShelfChange}/>
                <BookshelfComponent shelfTitle='Want to Read' shelfBooks={this.filterBooks('wantToRead')} onShelfChange={this.onShelfChange}/>
                <BookshelfComponent shelfTitle='Read' shelfBooks={this.filterBooks('read')} onShelfChange={this.onShelfChange}/>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
