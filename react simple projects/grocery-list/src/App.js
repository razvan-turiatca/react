import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ on: false, msg: '', type: '' })

  const alertSetting = (on, msg, type) => {
    setAlert({ on, msg, type })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (!name) {
      alertSetting(true, 'please enter value', 'danger')
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            item.name = name
          }
          return item
        }),
      )
      setName('')
      setEditID(null)
      setIsEditing(false)
      alertSetting(true, 'value changed', 'success')
    } else {
      setList([...list, { id: new Date().getTime().toString(), name: name }])
      setName('')
      alertSetting(true, 'item added to the list', 'success')
    }
  }

  const deleteItem = (id) => {
    let newList = list.filter((item) => id != item.id)
    setList(newList)
    alertSetting(true, 'item removed', 'danger')
  }

  const editItem = (id) => {
    setIsEditing(true)
    setName(list.find((item) => item.id == id).name)
    setEditID(id)
    // alertSetting(true, 'item edited', 'success')
  }

  return (
    <section className="section-center">
      {alert.on && (
        <Alert alert={alert} alertSetting={alertSetting} list={list} />
      )}
      <form className="grocery-form" onSubmit={submitHandler}>
        <h3>grocery list</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="eggs"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              // console.log(name)
            }}
          />
          <button className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <div className="grocery-list">
          <List list={list} deleteItem={deleteItem} editItem={editItem} />
          <button
            type="button"
            className="clear-btn"
            onClick={() => {
              setList([])
              alertSetting(true, 'items removed', 'danger')
            }}
          >
            clear items
          </button>
        </div>
      </div>
    </section>
  )
}

export default App
