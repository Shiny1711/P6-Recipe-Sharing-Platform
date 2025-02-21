import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MyRecipes from './pages/MyRecipes';
import AllRecipes from './pages/AllRecipes';
import Login from './pages/Login';
import AddRecipe from './pages/AddRecipe';

const App = () => {
    const [userSession, setUserSession] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).name : null);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUserSession(null);
    };

    return (
        <Router>
            <Navbar userSession={userSession} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/my-recipes" element={<MyRecipes />} />
                <Route path="/all-recipes" element={<AllRecipes />} />
                <Route path="/login" element={<Login setUserSession={setUserSession} />} />
                <Route path="/add-recipe" element={<AddRecipe />} />
                {/* <Route path="/recipe/:id" element={<RecipeDetails />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
