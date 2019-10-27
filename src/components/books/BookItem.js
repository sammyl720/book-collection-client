import React, { useContext, useState } from 'react'
import bookContext from '../../context/bookContext/bookContext'
import { Icon, GridRow, GridColumn, Button } from 'semantic-ui-react'
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
    <GridRow>
      <GridColumn width={1} />
      <GridColumn width={4}>
        <h3>{title}</h3>
      </GridColumn>
      <GridColumn width={1} />
      <GridColumn width={4}>
        <p>{author}</p>
      </GridColumn>
      <GridColumn width={2} />
      <GridColumn width={3}>
        <Button className='edit-btn' onClick={() => hadndleEditBook(id)}>
          <Icon name='edit' />
        </Button>
        <Button className='delete-btn' onClick={() => hadndleDeleteBook(id)}>
          <Icon name='delete' />
        </Button>
      </GridColumn>
    </GridRow>
  )
}

export default BookItem
