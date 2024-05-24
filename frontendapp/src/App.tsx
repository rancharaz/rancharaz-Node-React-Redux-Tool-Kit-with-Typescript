import React, { useCallback, useEffect,  } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GamePages from './features/games/GamesPage';
import { getGames } from './features/games/gameSlice';
import { useAppDispatch } from './store/store';
import ResponsiveAppBar from './components/UI/Navbar';
import SingleGamePage from './features/games/SingleGamePage';

function App() {

  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getGames())
  }, [dispatch])


  useEffect(() => {
    initApp()
  }, [])
  return (
   <BrowserRouter>
   <ResponsiveAppBar />
    <Routes>
      <Route path="" element={<GamePages />} />
      <Route path="/game/:id" element={<SingleGamePage />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
