import './JokesList.css'
import JokeItem from '../JokeItem/JokeItem'
import { useState, useEffect } from 'react';
import * as jokesAPI from '../../utilities/jokes-api'

export default function JokesList({jokes}) {
    const [jokeItems, setJokeItems] = useState([])

    useEffect(function() {
        async function getItems() {
            const Items = await jokesAPI.showJokes() 
            setJokeItems(Items)
        }
        getItems()
    }, [] )
    
    const items = jokeItems.map(item =>
        <JokeItem 
        key={item._id}
        item={item}
        />
    )

    return(
        <main className='jokeslist'>
            {items}
        </main>

    )
}


