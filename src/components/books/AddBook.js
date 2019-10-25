import React from 'react'
import bookContext from '../../context/bookContext/bookContext'
const AddBook = () => {
  const [data, setData] = React.useState({
    title: '',
    author: ''
  })
  const { handleBookAdd } = React.useContext(bookContext)
  const handleSubmit = async e => {
    e.preventDefault()
    if (data.title === '' || data.author === '') {
      alert('Please fill out all fields')
    } else {
      // send data
      handleBookAdd(data)
      setData({
        title: '',
        author: ''
      })
    }
  }
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            value={data.title}
            id='title'
            onChange={handleChange}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='author'>Author</label>
          <input
            type='text'
            name='author'
            id='author'
            value={data.author}
            onChange={handleChange}
          />
        </div>
        <input type='submit' value='Add' />
      </form>
    </div>
  )
}

export default AddBook
