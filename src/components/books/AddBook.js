import React from 'react'
import { Icon, Button, Input, GridRow, GridColumn } from 'semantic-ui-react'
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
    <GridRow as='form' onSubmit={handleSubmit}>
      <GridColumn width={4}>
        <Input
          label='Title'
          type='text'
          name='title'
          value={data.title}
          id='title'
          onChange={handleChange}
        />
      </GridColumn>
      <GridColumn width={4}>
        <Input
          label='author'
          type='text'
          name='author'
          id='author'
          value={data.author}
          onChange={handleChange}
        />
      </GridColumn>
      <GridColumn width={4}>
        <Button icon labelPosition='right' type='submit'>
          Add
          <Icon name='add' />
        </Button>
      </GridColumn>
    </GridRow>
  )
}

export default AddBook
