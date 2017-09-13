import React from 'react';
import { Link } from 'react-router-dom';
import BookDetail from './BookDetail';
import PropTypes from 'prop-types';

class BooksIndex extends React.Component {
  render() {
    let books = this.props.books || [];
    let currentlyReading = books.filter(book => (book.shelf === 'currentlyReading'));
    let wantToRead = books.filter(book => (book.shelf === 'wantToRead'));
    let read = books.filter(book => (book.shelf === 'read'));

    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>My Library</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {currentlyReading.map((book) => (
                        <li key={book.id}>
                          <BookDetail book={book} onSelectionChange={this.props.onShelfChange}/>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {wantToRead.map((book) => (
                          <li key={book.id}>
                            <BookDetail book={book} onSelectionChange={this.props.onShelfChange}/>
                          </li>
                        ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {read.map((book) => (
                        <li key={book.id}>
                          <BookDetail book={book} onSelectionChange={this.props.onShelfChange}/>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>

      </div>
    );
  }
}

BooksIndex.propTypes = {
  books: PropTypes.array,
};


export default BooksIndex;
