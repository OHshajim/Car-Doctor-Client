import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Checkout from '../Pages/Checkout';
import Bookings from '../Pages/Bookings';
import PrivetRoute from '../Provider/PrivetRoute';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signUp",
                element: <SignUp/>,
            },
            {
                path: "/bookings",
                element: <PrivetRoute><Bookings/></PrivetRoute>,
            },
            {
                path: "/checkout/:id",
                element: <PrivetRoute><Checkout/></PrivetRoute>,
                loader:({params})=>fetch(`https://car-doctor-server-seven-ochre.vercel.app/services/${params.id}`)
            },
        ]
    },
]);


export default Routes;