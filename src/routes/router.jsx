import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Homepage from '../pages/Homepage';
import Menu from '../pages/Menu';

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
      }
    ]
  }
]);

