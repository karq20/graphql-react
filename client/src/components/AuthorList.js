import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getAuthorsQuery } from '../queries/queries'

class AuthorList extends Component {
  displayAuthors() {
  	var data = this.props.data;
    if(data.loading) {
      return ( <div>Loading authors...</div> );
    } else {
      return data.authors.map(author => {
      	return (
      	  <div key={author.id}>
	        <li>{ author.name } ({ author.age })</li>
	        <ul>{ this.displayBooksOfAuthor(author) }</ul>
	      </div>
      	)
      });
    }
  }
  displayBooksOfAuthor(author) {
  	return author.books.map((book) => {
  	  return (<li key={book.id}>{book.name} ({book.genre})</li>)
  	})
  }
  render() {
    return (
      <div>
        <ul id="author-list">
        	{ this.displayAuthors() }
        </ul>
      </div>
    );
  }
}

export default graphql(getAuthorsQuery)(AuthorList);
