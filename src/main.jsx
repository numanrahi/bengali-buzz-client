import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Blog from './layout/Blog/Blog.jsx';
import error404 from './assets/404.jpg'
import Banner from './components/Banner/Banner.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Banner></Banner>
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      },
      {
        path: '*',
        element: <div>
        <div className='text-center display-1'><img src={error404} alt="" /></div>
        <div className='display-1 text-center mt-5'>OPPS! PAGE NOT FOUND <hr></hr></div>
        </div>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
