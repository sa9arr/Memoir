import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({ note }) => {
  return (
    <div>
      <div className= "font-mono ">
        <Link to = {`/note/${note.id}`}>
      <h3> {note.body} </h3>
      </Link>
      </div>
    </div>
  )
}

export default ListItem