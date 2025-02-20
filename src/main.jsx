import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import List from './apps/EXList'

createRoot(document.getElementById('root')).render(
    <List></List>
)
