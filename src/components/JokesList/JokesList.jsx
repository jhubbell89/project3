import './JokesList.css'
import JokeItem from '../JokeItem/JokeItem'
import { useState, useEffect } from 'react';
import * as jokesAPI from '../../utilities/jokes-api'

export default function JokesList({user, jokeItems, setJokeItems, change, setChange}) {
    useEffect(function() {
        async function getItems() {
            const Items = await jokesAPI.showJokes() 
            setJokeItems(Items)
        }
        getItems()
    }, [change] )
    
    const items = jokeItems.map(item =>
        <JokeItem 
        key={item._id}
        item={item}
        userId={user._id}
        change={change} setChange={setChange}
        />
    )

    return(
        <main className='jokeslist'>
            {items}
        </main>

    )
}


