import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { AddUser } from './pages/add-user.tsx'
import { Layout } from './pages/layout.tsx'
import { UserList } from './pages/user-list.tsx'
import { EditUser } from './pages/edit-user.tsx'


const router = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    children: [
      {path:"", element:<UserList/>},
      {path:"add", element:<AddUser/>},
      {path:"user/:id", element:<EditUser/>}
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
