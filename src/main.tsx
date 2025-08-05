import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from '@src/routes.jsx';
import React from 'react';
import Home from './pages/Home';


// import React = require('react');
// imort React from 'react';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <Home></Home>
)
