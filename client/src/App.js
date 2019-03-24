import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
// import BookList from './components/BookList';
import AuthorList from './components/AuthorList';
import AddBook from './components/AddBook';
import BookList from './components/BookList';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Mohit's Reading List</h1>
          <BookList/>
          <br/>
          <h1>Favorite Authors List</h1>
          <AuthorList/>
          <AddBook/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
