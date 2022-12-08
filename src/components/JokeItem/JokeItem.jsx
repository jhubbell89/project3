import './JokeItem.css'
import editJoke from '../EditJoke/EditJoke'

export default function JokeItem({jokeItem}) {
    return (
        <div>
            <h3>{jokeItem.joke}</h3>

        </div>
    )
}