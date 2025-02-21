import React from 'react';
import { Link } from 'react-router-dom';
// import foodImage from '../../assets/food.jpg'; // Add a food image in assets folder

const Home = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-text">
                    <h1>Food Recipe</h1>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page 
                        when looking at its layout.
                    </p>
                    <Link to="/add-recipe">
                        <button className="hero-button">Share your recipe</button>
                    </Link>
                </div>
                {/* <img src={foodImage} alt="Delicious food" /> */}
                <img src={require('../assets/food.jpg')} alt="Delicious food" />

            </div>
            {/* <img src="curved.svg" className="curved" alt="Design Curve" /> */}
        </div>
    );
};

export default Home;
