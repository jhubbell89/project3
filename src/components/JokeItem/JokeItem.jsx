import './JokeItem.css'
import editJoke from '../EditJoke/EditJoke'

export default function JokeItem({item}) {
    return (
        <div className='jokecard`'>
            <div>{item.joke}</div>
            <div>{item.nsfw}</div>
        </div>
    )
}