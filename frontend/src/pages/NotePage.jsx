import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import AddButton from '../components/AddButton';

const NotePage = ({ history }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [id]);

  const getNote = async () => {
    try {
    if (id === 'new') return
      const response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/`);
      const data = await response.json();
      setNote(data);
    } catch (error) {
      console.log('Error:', error);
    }
  };


  const createNote = async () => {
    try {
      await fetch(`http://127.0.0.1:8000/api/notes/create/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const updateNote = async () => {
    try {
      await fetch(`http://127.0.0.1:8000/api/notes/${id}/update/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleChange = (event) => {
    setNote({ ...note, body: event.target.value });
  };

  const handleSubmit = () => {
    if (id !== 'new' && !note.body){
      deleteNote()
    }
    else if (id !== 'new'){
    updateNote();
    }
    else if (id === 'new' && note!= null){
      createNote()

    }
    navigate('/');
  };


let deleteNote = async () =>{
  fetch(`http://127.0.0.1:8000/api/notes/${id}/delete/`,{
   
  method: 'DELETE',
  headers:{
  'Content-Type': 'application/json'
  }
})
navigate('/')

}

  return (
    <div className="note">
      <div className="">
        <div className="back-icon">
        <FontAwesomeIcon icon={faArrowLeft} onClick={handleSubmit} />
        </div>

        <div className="buttons-d">

        {id !=='new' ? (
          <button onClick={deleteNote}>Delete</button>

        ) : (
          <button onClick = {handleSubmit} >Done</button>
        )}
       </div> 
      </div>
      <div>

      <textarea value={note?.body} onChange={handleChange}></textarea>
     
      </div>
     

    </div>
  );
};

export default NotePage;
