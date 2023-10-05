import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Career from './pages/Career/Career';
import NewsDetails from './pages/NewsDetails/NewsDetails';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './privateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/news.json')
      },
      {
        path: "/news/:id",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/career",
        element: <Career></Career>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
