export default (state, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'SET_DATA':
      return {
        ...state,
        loading: false,
        error: null,
        books: action.payload.books
      }
    case 'ADD_BOOK':
      return {
        ...state,
        loading: false,
        error: null,
        books: [...state.books, action.payload]
      }
    case 'UPDATE_BOOK':
      return {
        ...state,
        loading: false,
        error: null,
        books: state.books.map(book => {
          if (book.id === action.payload.id) {
            return action.payload
          }
          return book
        })
      }
    case 'DELETE_BOOK':
      return {
        ...state,
        loading: false,
        error: null,
        books: state.books.filter(book => {
          return book.id !== action.payload
        })
      }
    default: {
      return state
    }
  }
}
