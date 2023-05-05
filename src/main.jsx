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
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import ChefData from './layout/ChefData/ChefData.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './layout/PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Banner></Banner>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/chef-recipes/:ID',
        element: <PrivateRoute><ChefData></ChefData></PrivateRoute>,
        loader: ({params})=> fetch('https://assignment-10-server-numanrahi.vercel.app/chef')
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
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </React.StrictMode>,
)
