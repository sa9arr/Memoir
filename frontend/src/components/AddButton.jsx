import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function AddButton() {
  return (
    <div > 
        <Link to = "/note/new">
        <FontAwesomeIcon className= "floating-button"  icon={faPlus} />
        </Link>

    </div>
  )
}

export default AddButton