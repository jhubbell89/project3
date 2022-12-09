import './JokeItem.css'


import { deleteJoke, editJoke } from '../../utilities/jokes-api'

export default function JokeItem({item}) {
    
    async function handleEdit(evt) {
        console.log('clicked');
        console.log(item._id);
        evt.preventDefault()
        await fetch(`/api/jokes/${item._id}/edit`, {method:'GET'})
    }


    async function handleDelete(evt) {
        // evt.preventDefault()
        console.log(item._id)
        await fetch(`/api/jokes/${item._id}`, {method:"DELETE"})
        window.location.reload()  
   }

    return (
        <div className='jokecard'>
            <div className='joke'>
            <div>{item.joke}</div>
            <div>Safe for work: {item.nsfw}</div>
            </div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}