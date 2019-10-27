import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import './App.css'
import Books from './components/books/Books'
import AddBook from './components/books/AddBook'
import BookState from './context/bookContext/BookState'
function App() {
  return (
    <Container>
      <BookState>
        <Grid centered divided>
          <AddBook />

          <Books />
        </Grid>
      </BookState>
    </Container>
  )
}

export default App
