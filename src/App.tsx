import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import HomePage from './pages/HomePage';
import FavouritesPage from './pages/FavouritesPage';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/favorites' element={<FavouritesPage />} />
		</Routes>
	);
}

export default App;
