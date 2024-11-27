import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './Components/coffeeCard/CoffeeCard';

const App = () => {
    const coffeeData = useLoaderData()
    // console.log(coffeeData);
    
    return (
        <div className='max-w-[1300px] mx-auto bg-base-100 py-10'>
            <div className='text-center'>
                <p>--- Sip & Savor ---</p>
                <h3 className='text-4xl font-semibold font-rancho text-[#331A15]'>Our Popular Products</h3>
            </div>
            <div>
                <CoffeeCard coffeeData={coffeeData}></CoffeeCard>
            </div>
        </div>
    );
};

export default App;