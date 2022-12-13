import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewJokeForm from '../../components/NewJoke/NewJoke';
import NavBar from '../../components/NavBar/NavBar';
import JokesList from '../../components/JokesList/JokesList';
import './App.css';
import { useState, useEffect } from 'react';
import * as jokesAPI from '../../utilities/jokes-api'

export default function App() {
  const [user, setUser] = useState(getUser());
  const [jokeItems, setJokeItems] = useState([])
  const [change, setChange] = useState(false)

    useEffect(function() {
        async function getItems() {
            const Items = await jokesAPI.showJokes() 
            setJokeItems(Items)
        }
        getItems()
    }, [change] )
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/newjoke' element={<NewJokeForm user={user} />} />
            <Route path='/' element={<JokesList user={user} jokeItems={jokeItems} setJokeItems={setJokeItems} change={change} setChange={setChange} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}