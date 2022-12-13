import { Link } from 'react-router-dom'
import './JokeItem.css'
import { useState } from 'react'
import { deleteJoke, editJoke } from '../../utilities/jokes-api'
import EditJokeForm from '../EditJoke/EditJoke';

export default function JokeItem({item, userId, change, setChange}) {
    const [editForm, setEditForm] = useState({
        joke: item.joke,
        nsfw: item.nsfw,
        user: userId
      })
    const [editing, setEditing] = useState(false)
    async function handleEdit(evt) {
        console.log('clicked');
        setEditing(!editing)
}

    async function handleDelete(evt) {
        await fetch(`/api/jokes/${item._id}`, {method:"DELETE"})
        window.location.reload()  
   }

    return (
        <>
        <div className='jokecard'>
            <div className='joke'>
            <div>{item.joke}</div>
            <div>Safe for work: {item.nsfw}</div>
            </div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
        {editing? <EditJokeForm editForm={editForm} setEditForm={setEditForm} item={item} change={change} setChange={setChange} editing={editing} setEditing={setEditing} /> : ''}
        </>
    )
}