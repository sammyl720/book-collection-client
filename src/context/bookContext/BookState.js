import React, { useReducer } from 'react'
import BookContext from './bookContext'
import { useQuery, useMutation } from '@apollo/react-hooks'
import {
  getAllBooks,
  addABook,
  deleteBookById
} from '../../graphqlClient/operations'
import bookReducer from './bookReducer'
const BookState = props => {
  // get all books from backend
  const { data, loading, error } = useQuery(getAllBooks)
  // add a book to back end
  const [addBook] = useMutation(addABook)
  const [deleteABook] = useMutation(deleteBookById)
  const initailState = {
    books: [],
    loading,
    error
  }

  const [state, dispatch] = useReducer(bookReducer, initailState)
  React.useEffect(() => {
    if (error) {
      dispatch({ type: 'SET_ERROR', payload: error })
    }
    if (loading) {
      dispatch({ type: 'SET_LOADING' })
    }
    if (data) {
      dispatch({ type: 'SET_DATA', payload: data })
    }
  }, [error, loading, data])
  const handleBookAdd = async data => {
    try {
      const response = await addBook({ variables: { data } })
      dispatch({ type: 'ADD_BOOK', payload: response.data.addBook })
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error })
    }
  }
  const handleBookDelete = async id => {
    try {
      const response = await deleteABook({ variables: { id } })
      // console.log(response)
      dispatch({ type: 'DELETE_BOOK', payload: response.data.deleteBook.id })
    } catch (error) {
      console.log(error)
      dispatch({ type: 'SET_ERROR', payload: error })
    }
  }
  return (
    <BookContext.Provider
      value={{
        books: state.books,
        loading: state.loading || false,
        error: state.error || null,
        handleBookAdd,
        handleBookDelete
      }}
    >
      {props.children}
    </BookContext.Provider>
  )
}

export default BookState
