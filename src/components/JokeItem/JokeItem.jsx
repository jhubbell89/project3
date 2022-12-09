import { Link } from 'react-router-dom'
import './JokeItem.css'


import { deleteJoke, editJoke } from '../../utilities/jokes-api'

export default function JokeItem({item}) {
    
    async function handleEdit(evt) {
        console.log('clicked');
        evt.preventDefault()
        await fetch(`/api/jokes/${item._id}/edit`, {method:'GET'})
}

    async function handleDelete(evt) {
        await fetch(`/api/jokes/${item._id}`, {method:"DELETE"})
        window.location.reload()  
   }

    return (
        <div className='jokecard'>
            <div className='joke'>
            <div>{item.joke}</div>
            <div>Safe for work: {item.nsfw}</div>
            </div>
            <Link className='editbtn' to={`/${item._id}/edit`}>Edit</Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}