import React from 'react';
import Search from '../Search/Search.jsx';
import Favorites from '../Favorites/Favorites.jsx';
import './App.css';
function App(props) {
  return (
    <div className ="App">
      <h1>Giphy Search!</h1>
      <Search />
      <p></p>
      <Favorites />
    </div>
  );
}

export default App;
