
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Index from '../App';
import Home from '../pages/Home';
import Coins from '../pages/Coins';
import About_Us from '../pages/About_Us';
import Coin from '../pages/Coin';
import Wallet from '../pages/Wallet';
import { useEffect } from 'react';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
        children: [
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/coins',
                element: <Coins />,                
            },
            {
                path: '/coins/:id',
                element: <Coin />
            },
            {
                path: '/about-us',
                element: <About_Us />
            },
            {
                path: '/wallet',
                element: <Wallet />
            }
        ]
    },
])

function Routes() {

    useEffect(() => {
        const checkRoute = () => {
            if (window.location.pathname === '/') {
                window.location.href = '/home';
            }
        };
        checkRoute();
    }, []);

    return (
        <RouterProvider router={router} />
    )
}

export default Routes;

