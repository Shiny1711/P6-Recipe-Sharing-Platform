import React, { useState } from 'react';
import './AddRecipe.css';

const AddRecipe = () => {
    const [recipe, setRecipe] = useState({
        title: '',
        time: '',
        ingredients: '',
        instructions: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        setRecipe((prev) => ({ ...prev, image: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Recipe Submitted:', recipe);
        alert('Recipe added successfully!');
    };

    return (
        <div className="container1">
            <h2>Your Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" name="title" value={recipe.title} onChange={handleChange} required />

                <label>Time</label>
                <input type="text" name="time" value={recipe.time} onChange={handleChange} required />

                <label>Ingredients</label>
                <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} required></textarea>

                <label>Instructions</label>
                <textarea name="instructions" value={recipe.instructions} onChange={handleChange} required></textarea>

                <label>Recipe Image</label>
                <input type="file" onChange={handleImageChange} />

                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
};

export default AddRecipe;
