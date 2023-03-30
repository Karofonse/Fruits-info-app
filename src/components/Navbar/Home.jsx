import React from 'react';
import MyImage from './fruta.jpg'

const Homepage = () => (
<div
    className="relative flex flex-col justify-center items-center h-screen"
    style={{ backgroundImage: `url(${MyImage})`, opacity: 0.8 }}
    >
        <div className="bg-green-500 text-white text-center p-10">
            <h1 className="text-4xl font-bold mb-4">Encuentra toda la información sobre tus frutas favoritas</h1>
            <p className="text-lg md:text-2xl">Bienvenido a AppFruit, tu guía de frutas en línea. Aquí encontrarás toda la información que necesitas sobre tus frutas favoritas, desde su valor nutricional hasta su origen y temporada.</p>
        </div>
    </div>
);

export default Homepage;