import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class BookComponent extends Component {
    handleChange = (event) => {
        BooksAPI.update({id: this.props.book.id}, event.target.value).then(shelfChanges => {
            this.props.onShelfChange(shelfChanges)
        })
    }

    render() {
        const {book} = this.props

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                    <div className="book-shelf-changer">
                        <select value={this.props.book.shelf} onChange={(event) => this.handleChange(event)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors.join(', ')}</div>
            </div>
        )
    }
}

BookComponent.propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default BookComponent