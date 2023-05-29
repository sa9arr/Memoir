import React, {useState, useEffect, useCallback} from 'react'

const NotesListPage = () => {

    let [notes, setNotes] = useState([])

    useEffect(() => {
     getNotes()
    }, [])

    let getNotes = async () => {
       let response = await fetch('http://localhost:8000/api/notes/')
        let data = await response.json()
        console.log('DATA:', data)
        setNotes(data)
    }
    

  return (
    <div>Notes</div>
  )
}

export default NotesListPage