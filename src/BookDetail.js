import React from 'react';


class BookDetail extends React.Component {


  render () {
    let authors = this.props.book.authors || [];
    let shelf = this.props.book.shelf || [];
    // console.log(this.props);
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={this.props.onSelectionChange(this.props.book)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>

        {authors.map((author) => (
            <div className="book-authors" key={author}>{author}</div>
          ))}

      </div>
    );
  }
}


export default BookDetail;
