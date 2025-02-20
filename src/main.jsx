import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
// import 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calculator />
  </StrictMode>,
)
