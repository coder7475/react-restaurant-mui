import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Homepage from '../pages/Homepage';
import Menu from '../pages/Menu';
import OurShop from '../pages/OurShop';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

export const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "menu",
        element: <Menu/>
      },
      {
        path: "shop",
        element: <OurShop/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "signup",
        element: <SignUp/>
      }
    ]
  }
]);

