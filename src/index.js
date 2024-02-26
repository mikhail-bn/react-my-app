import React from "react"
import { createRoot } from 'react-dom/client';
import'bootstrap/dist/css/bootstrap.css'
import Counter from "./components/counter";


function App() {
    return (
        <Counter  />
    )
}

createRoot(document.getElementById('root')).render(<App />)
