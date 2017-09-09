import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BooksIndex from './BooksIndex';
import SearchBar from './SearchBar';
import { Route } from 'react-router-dom';


class App extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
  })
}


handleSelectionChange = (book, shelf) => {
  BooksAPI.update(book,shelf)
  book.shelf = shelf
  let books = this.state.books.filter(books => books.id !== book.id)
  books.push(book)
  this.setState({ books })
  // this.setState({ [book.shelf] : shelf });
}

  render () {
    // console.log(this.state.books[0]);
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
            <BooksIndex books={this.state.books} onShelfChange={this.handleSelectionChange}/>
          )} />
        <Route path='/search' render={() => (
            <SearchBar onSelectionChange={this.handleSelectionChange}/>
          )}/>
      </div>
    );
  }
}


export default App;
