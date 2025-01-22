import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { EmBreve } from './pages/EmBreve/EmBreve.jsx'
import { Home } from './pages/home/Home.jsx'
import { PersonagemDetalhes } from './pages/personagemDetalhes/PersonagemDetalhes.jsx'
import './styles/global.scss'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/personagem/:id', element: <PersonagemDetalhes /> },
  { path: '/emBreve', element: <EmBreve /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
