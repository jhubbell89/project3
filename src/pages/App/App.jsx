import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewJokePage from '../NewJokePage/NewJokePage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import JokeApp from '../Jokes/Jokes';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<JokeApp />} />
            <Route path="/jokes/new" element={<NewJokePage />} />
          </Routes>
        
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}