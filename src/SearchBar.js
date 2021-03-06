import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import BookDetail from './BookDetail';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  state = {
    books: [],
  }

  searchQuery(query) {
    BooksAPI.search(query,20).then((books) => {
        this.setState({ books })
      }).catch((error) => {
        // the catch prevents a bad search from error but serves no other purpose
      })
  }

  render() {
    let { books } = this.state;
    books = books.map(x => Object.assign(x, this.props.books.find(y => y.title === x.title)));

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author"
              ref={input => this.textInput = input}
              onChange={() => {this.searchQuery(this.textInput.value)}}/>
          </div>
        </div>

        <div className="search-books-results">
          <h4>{this.state.error}</h4>
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <BookDetail book={book} onSelectionChange={this.props.onSelectionChange}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  books: PropTypes.array,
  onSelectionChange: PropTypes.func
};


export default SearchBar;
