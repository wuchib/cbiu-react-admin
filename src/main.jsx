import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@unocss/reset/tailwind.css' // 选择你喜欢的重置样式
import 'virtual:uno.css' // Unocss 的核心样式
import './style/index.scss' // 你的全局样式
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import router from './router/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter(router)} />
  </StrictMode>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// )
