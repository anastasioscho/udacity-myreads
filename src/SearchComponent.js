import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookComponent from './BookComponent'
import PropTypes from 'prop-types'

class SearchComponent extends Component {
    state = {
        foundBooks: []
    }

    handleChange = (event) => {
        BooksAPI.search(event.target.value).then((foundBooks) => {
            if (foundBooks.length > 0) {
                this.setState({foundBooks: this.updateBooks(foundBooks)})
            } else {
                this.setState({foundBooks: []})
            }
        }).catch(() => {
            this.setState({foundBooks: []})
        })
    }

    updateBooks(booksToUpdate) {
        const updatedBooks = booksToUpdate.map((bookToUpdate) => {
            bookToUpdate.shelf = 'none'

            const book = this.props.books.find((book) => {
                return book.id === bookToUpdate.id
            })

            if (book) {
                bookToUpdate.shelf = book.shelf
            }

            return bookToUpdate
        })

        return updatedBooks
    }

    render() {
        const {onShelfChange} = this.props
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close-search' to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" placeholder="Search by title or author" onChange={(event) => this.handleChange(event)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.foundBooks.map((book) => {
                            return (
                                <li key={book.id}>
                                    <BookComponent
                                        book={book}
                                        onShelfChange={onShelfChange}
                                    />
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

SearchComponent.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default SearchComponent