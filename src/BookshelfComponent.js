import React, {Component} from 'react'
import BookComponent from './BookComponent'

class BookshelfComponent extends Component {
    render() {
        const {shelfTitle, shelfBooks} = this.props

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {shelfBooks.map(shelfBook => {
                        return (
                            <li key={shelfBook.id}>
                                <BookComponent
                                    book={shelfBook}
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

export default BookshelfComponent