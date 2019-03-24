import { gql } from 'apollo-boost';

// template string inside backtick ``
const getBooksQuery = gql`
	{
		books {
	  		id
	  		name
	  		genre
	  		author{
	  			name
	  		}
		}
  	}
`

const getAuthorsQuery = gql`
	{
		authors{
			id
			name
			age
			books{
				id
				name
				genre
			}
		}
	}
`

const addBookMutation = gql`
	mutation($name: String!, $genre: String!, $authorId: ID!) {
		addBook(name: $name, genre: $genre, authorId: $authorId) {
			id
			name
		}
	}
`

const getBookQuery = gql`
	query($id: ID){
		book(id: $id){
			id
			name
			genre
			author{
				id
				name
				age
				books{
					name
					id
				}
			}
		}
	}
`

export { getBooksQuery, getAuthorsQuery, addBookMutation, getBookQuery };
