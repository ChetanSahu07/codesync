import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import GeneratedLink from './components/GeneratedLink.jsx'
import UserForm from './components/UserForm.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import UserProfile from './components/UserProfile.jsx'


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      children : [
        {
          path:"",
          element : <UserForm/>
          
        },
        {
          path:"/user/:slug",
          element : <GeneratedLink/>
        },
        {
          path: "/:slug",
          element : <UserProfile />
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <StrictMode>
    <RouterProvider router= {router} /> 
  </StrictMode>
  </Provider>
)
