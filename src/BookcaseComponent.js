import React, {Component} from 'react'
import BookshelfComponent from './BookshelfComponent'
import {Link} from 'react-router-dom'

class BookcaseComponent extends Component {
    filterBooks(shelf) {
        return this.props.books.filter(book => book.shelf === shelf)
    }

    render() {
        const {onShelfChange} = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookshelfComponent
                            shelfTitle='Currently Reading'
                            shelfBooks={this.filterBooks('currentlyReading')}
                            onShelfChange={onShelfChange}
                        />
                        <BookshelfComponent
                            shelfTitle='Want to Read'
                            shelfBooks={this.filterBooks('wantToRead')}
                            onShelfChange={onShelfChange}
                        />
                        <BookshelfComponent
                            shelfTitle='Read'
                            shelfBooks={this.filterBooks('read')}
                            onShelfChange={onShelfChange}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BookcaseComponent