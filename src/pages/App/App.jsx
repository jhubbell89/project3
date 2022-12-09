import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewJokeForm from '../../components/NewJoke/NewJoke';
import NavBar from '../../components/NavBar/NavBar';
import JokesList from '../../components/JokesList/JokesList';
import './App.css';


export default function App() {
  const [user, setUser] = useState(getUser());
  


  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/newjoke' element={<NewJokeForm />} />
            <Route path='/' element={<JokesList />} />
            {/* <Route path='' */}
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}