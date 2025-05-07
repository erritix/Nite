import React from 'react'
import {createRoot} from 'react-dom/client'
import './styles/style.scss'
import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)

library.add(fas)
