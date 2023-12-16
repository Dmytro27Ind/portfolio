import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App'
import store from './store'
import './index.css'


const router = createBrowserRouter([
    {
        path: "/portfolio/",
        element: <App />,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
)
