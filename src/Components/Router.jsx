import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from './Main/MainLayout';
import AddCoffee from './AddCoffee/AddCoffee';
import UpdatCoffee from './UpdatCoffee/UpdatCoffee';
import Error from './Error/Error';
import App from '../App';


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [

            {
                path: '/',
                element: <App></App>,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: 'addCoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: 'updatCoffee/:_id',
                element: <UpdatCoffee></UpdatCoffee>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params._id}`)
            },
        ]
    },

    
    {

    }
]);

export default Router;