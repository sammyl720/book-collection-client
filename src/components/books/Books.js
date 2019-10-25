import React, { useContext, useEffect } from 'react'
import BookContext from '../../context/bookContext/bookContext'
import BookItem from './BookItem'
const Books = () => {
  const bookContext = useContext(BookContext)
  const { loading, error, books } = bookContext
  useEffect(() => {
    if (books.length > 0) {
      console.log(loading)
    }
  }, [books, loading])
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return (
    <div className='book-list'>
      {books.length > 0 ? (
        books.map(book => {
          return (
            <BookItem book={book} className='book-list-item' key={book.id} />
          )
        })
      ) : (
        <h3>Please add a Book</h3>
      )}
    </div>
  )
}

export default Books
