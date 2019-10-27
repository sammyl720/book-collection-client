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
const updateBookById = gql`
  mutation($id: ID!, $data: EditBookInput!) {
    updateBook(id: $id, data: $data) {
      author
      title
      id
    }
  }
`
export { getAllBooks, addABook, deleteBookById, updateBookById }
