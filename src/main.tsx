import { RouterProvider } from "react-router-dom";
import { router }  from "./routes/index";
import ReactDOM from 'react-dom/client'
import React from 'react'

//styles import
import './static/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>}/>
  </React.StrictMode>,
)
