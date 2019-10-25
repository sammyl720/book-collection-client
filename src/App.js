import React from 'react'
import './App.css'
import Books from './components/books/Books'
import AddBook from './components/books/AddBook'
import BookState from './context/bookContext/BookState'
function App() {
  return (
    <div className='App'>
      <BookState>
        <AddBook />
        <Books />
      </BookState>
    </div>
  )
}

export default App
