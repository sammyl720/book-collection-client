import React, { useReducer } from 'react'
import BookContext from './bookContext'
import { useQuery } from '@apollo/react-hooks'
import { getAllBooks } from '../../src/graphqlClient/operations'
import bookReducer from './bookReducer'
const BookState = props => {
  const { data, loading, error } = useQuery(getAllBooks)
  const initailState = {
    books: data.books,
    loading: loading,
    error: error
  }
  const [state, dispach] = useReducer(bookReducer, initailState)
  return (
    <BookContext.Provider
      value={{
        books: state.books
      }}
    >
      {props.children}
    </BookContext.Provider>
  )
}

export default BookState
