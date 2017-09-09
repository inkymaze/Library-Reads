import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import BookDetail from './BookDetail';

class SearchBar extends React.Component {

  state = {

    books: []
  }

  // componentDidMount() {
  //   BooksAPI.getAll().then((books) => {
  //     this.setState({ books })
  //   })
  // }
  searchQuery(query) {
    BooksAPI.search(query,20).then((books) => {
        this.setState({ books })
      })
  }

  render() {
    const { books, query } = this.state;
    console.log(this.state);
    // let showingBooks;
    // if (query) {
    //   const match = new RegExp(escapeRegExp(query), 'i')
    //   showingBooks = books.filter((book) => match.test(book.title))
    // } else {
    //   showingBooks = books;
    // }
    // console.log();
    // console.log('ShowingBOoks', showingBooks);
    // console.log(this.props);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text"
                   placeholder="Search by title or author"
                   onChange={(query) => {this.searchQuery(query)}}/>

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
