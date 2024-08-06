import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import Player from './pages/Player';
import Player1 from './pages/Player1';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/Player', element: <Player /> },
{ path: '/Player1', element: <Player1 /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}