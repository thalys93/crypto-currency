import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/global/fonts.css'
import './assets/global/styles.css'
import './assets/global/tailwind.css'
import Routes from './utils/Routes.tsx'
import 'react-toastify/dist/ReactToastify.css'

import { WindowSizeProvider } from './utils/context/Responsive_Context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WindowSizeProvider>
      <Routes />
    </WindowSizeProvider>
  </React.StrictMode>,
)
