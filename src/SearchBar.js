import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import BookDetail from './BookDetail';

class SearchBar extends React.Component {

  state = {
    books: []
  }

  searchQuery(query) {
    BooksAPI.search(query,20).then((books) => {
        this.setState({ books })
      })
  }

  render() {

    let books = this.state.books || [];
    console.log(this.state);

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


export default SearchBar;
