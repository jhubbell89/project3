import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewJokeForm from '../../components/NewJoke/NewJoke';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import JokesList from '../../components/Jokes/Jokes';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/newjoke" element={<NewJokeForm />} />
            <Route path='/' element={<JokesList />} />
          </Routes>
        
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}