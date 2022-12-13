import { useState } from 'react'
import { updateJoke } from '../../utilities/jokes-api';
import sendRequest from '../../utilities/send-request'

export default function EditJokeForm({editForm, setEditForm, item, change, setChange, editing, setEditing}) {
    
    const handleSubmit = async (evt) => {
      evt.preventDefault();
      setChange(!change)
      setEditing(!editing)
      await sendRequest(`/api/jokes/${item._id}`, 'PUT', editForm)
    }
  
    const handleChange = (evt) => {
      evt.preventDefault();
      setEditForm({ 
        ...editForm,
        [evt.target.name]: evt.target.value,
      });

    }
 
      return (
        <div>
            <div className='line'>
            <form autoComplete='off' onSubmit={handleSubmit} >
            <label>Joke</label>
            <input type='text' name='joke' value={editForm.joke} onChange={handleChange} required />
            <br />
            <label>Appropriate?</label>
            <input type='text' name='nsfw' value={editForm.nsfw} onChange={handleChange} required />
            <br></br>
            <button className='newjokesubmitbtn' type='submit' >Submit</button>
            </form>
            </div>
        </div>
      )
}
  
  