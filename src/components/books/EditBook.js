import React, { useState, useContext } from 'react'
import BookContext from '../../context/bookContext/bookContext'
import {
  Icon,
  GridRow,
  GridColumn,
  Button,
  Form,
  Input
} from 'semantic-ui-react'

const EditBook = ({ title, author, id, setToggle }) => {
  const { handleBookUpdate } = useContext(BookContext)
  const [data, setData] = useState({
    title,
    author
  })
  // console.log(data)
  const handleSubmit = e => {
    e.preventDefault()
    // console.log(data)
    handleBookUpdate(id, data)
    setToggle(false)
  }
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  return (
    <GridRow as='form' onSubmit={handleSubmit}>
      <GridColumn width={1} />
      <GridColumn width={4}>
        <Input
          type='text'
          value={data.title}
          name='title'
          onChange={e => handleChange(e)}
        />
      </GridColumn>
      <GridColumn width={1} />
      <GridColumn width={4}>
        <Input
          type='text'
          value={data.author}
          name='author'
          onChange={e => handleChange(e)}
        />
      </GridColumn>
      <GridColumn width={2} />
      <GridColumn width={3}>
        <Button icon labelPosition='right' className='edit-btn' type='submit'>
          Save
          <Icon name='save' />
        </Button>
      </GridColumn>
    </GridRow>
  )
}

export default EditBook
