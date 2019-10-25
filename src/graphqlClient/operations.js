import { gql } from 'apollo-boost'

const getAllBooks = gql`
  {
    books {
      title
      author
      id
    }
  }
`

const addABook = gql`
  mutation($data: CreateBookInput!) {
    addBook(data: $data) {
      id
      title
      author
    }
  }
`

const deleteBookById = gql`
  mutation($id: ID!) {
    deleteBook(id: $id) {
      title
      author
      id
    }
  }
`
export { getAllBooks, addABook, deleteBookById }
