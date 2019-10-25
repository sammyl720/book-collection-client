import React, { useContext, useState } from 'react'
import bookContext from '../../context/bookContext/bookContext'
import EditBook from './EditBook'
const BookItem = ({ book: { title, author, id } }) => {
  const [toggle, setToggle] = useState(false)
  const { handleBookDelete } = useContext(bookContext)
  const hadndleDeleteBook = id => {
    console.log(`delete book ${id}`)
    handleBookDelete(id)
  }
  const hadndleEditBook = id => {
    // TODO handle edit
    setToggle(true)
    console.log(id)
  }
  return toggle ? (
    <EditBook setToggle={setToggle} title={title} author={author} id={id} />
  ) : (
    <div className='book-list-item'>
      <h3>{title}</h3>
      <p>{author}</p>
      <button className='edit-btn' onClick={() => hadndleEditBook(id)}>
        Edit
      </button>
      <button className='delete-btn' onClick={() => hadndleDeleteBook(id)}>
        X
      </button>
    </div>
  )
}

export default BookItem
