import React, { useContext, useEffect } from 'react'
import BookContext from '../../context/bookContext/bookContext'
import Loading from '../layout/Loading'
import { GridRow, GridColumn, Grid } from 'semantic-ui-react'
import BookItem from './BookItem'
const Books = () => {
  const bookContext = useContext(BookContext)
  const { loading, error, books } = bookContext
  useEffect(() => {
    if (books.length > 0) {
      console.log(loading)
    }
  }, [books, loading])
  if (loading) return <Loading />
  if (error) return <p>Error :(</p>
  return (
    <Grid divided>
      <GridRow>
        <GridColumn width={1} />
        <GridColumn width={4}>
          <h3>Title</h3>
        </GridColumn>
        <GridColumn width={1} />
        <GridColumn width={4}>
          <h3>Author</h3>
        </GridColumn>
        <GridColumn width={2} />
        <GridColumn width={3}>
          <h3>Options</h3>
        </GridColumn>
      </GridRow>
      {books.length > 0 ? (
        books.map(book => {
          return (
            <BookItem book={book} className='book-list-item' key={book.id} />
          )
        })
      ) : (
        <h3>Please add a Book</h3>
      )}
    </Grid>
  )
}

export default Books
