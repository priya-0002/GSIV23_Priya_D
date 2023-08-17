import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<MovieList/>} />
        <Route path="/movie/:id" element={<MovieDetails/>} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
