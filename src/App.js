import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BooksApp from './BooksApp';
import SearchBar from './SearchBar';
import { Route } from 'react-router-dom';


class App extends React.Component {


  render () {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
            <BooksApp />
          )} />
        <Route path='/search' render={() => (
            <SearchBar />
          )}/>
      </div>
    );
  }
}


export default App;
