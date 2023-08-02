import React from 'react'
import ReactDOM from 'react-dom/client'
import Componente1 from './Components/Componente1'
import Componente2 from './Components/Componente2'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Componente1 />
    <Componente2/>
  </React.StrictMode>,
)
