import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
<<<<<<< HEAD
import GlobalStyle from './styles/GlobalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <App />
=======
import './index.css'
// import { Provider } from 'react-redux'
// import { store } from './store.js'

createRoot(document.getElementById('root')).render(
  // insert redux providers
  <StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
>>>>>>> 174b3a3de5ee87376ddccd0f20d476076a1cec1b
  </StrictMode>,
)
