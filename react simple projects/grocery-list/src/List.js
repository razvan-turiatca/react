import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ list, deleteItem, editItem }) => {
  return (
    <>
      {list.map((item) => {
        // console.log(list)

        return (
          <article key={item.id} className="grocery-item">
            <p>{item.name}</p>

            <div>
              <button className="edit-btn" onClick={() => editItem(item.id)}>
                <FaEdit />
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteItem(item.id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
