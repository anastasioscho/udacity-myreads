import React, {Component} from 'react'
import BookComponent from './BookComponent'

class BookshelfComponent extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    <li>
                        <BookComponent />
                    </li>
                    <li>
                        <BookComponent />
                    </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookshelfComponent