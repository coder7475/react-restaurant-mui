import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Homepage from '../pages/Homepage';
import Menu from '../pages/Menu';
import OurShop from '../pages/OurShop';

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
      }
    ]
  }
]);

