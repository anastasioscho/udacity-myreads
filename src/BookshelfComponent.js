import React, {Component} from 'react'
import BookComponent from './BookComponent'
import PropTypes from 'prop-types'

class BookshelfComponent extends Component {
    render() {
        const {shelfTitle, shelfBooks, onShelfChange} = this.props

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

BookshelfComponent.propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    shelfBooks: PropTypes.arrayOf(PropTypes.object).isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default BookshelfComponent