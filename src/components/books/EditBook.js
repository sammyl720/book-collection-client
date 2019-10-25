import React, { useState } from 'react'

const EditBook = ({ title, author, id, setToggle }) => {
  const [data, setData] = useState({
    title,
    author,
    id
  })
  console.log(data)
  const handleSubmit = e => {
    e.preventDefault()
    console.log(data)
    setToggle(false)
  }
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  return (
    <form className='book-list-item'>
      <h3>
        <input
          type='text'
          value={data.title}
          name='title'
          onChange={e => handleChange(e)}
        />
      </h3>
      <p>
        <input
          type='text'
          value={data.author}
          name='author'
          onChange={e => handleChange(e)}
        />
        <input type='hidden' name='id' value={id} />
      </p>
      <button className='edit-btn' type='submit'>
        Save
      </button>
    </form>
  )
}

export default EditBook
