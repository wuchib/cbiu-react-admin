import Layout from '../layout/Layout.jsx'
import LoginRegister from '../views/login/Login.jsx'
import { Navigate } from 'react-router-dom';

const router = [
    {
        path: "/",
        element: <Navigate to="/login" replace />,
    },
    {
        path: "/login",
        element: <LoginRegister />,
    },
    {
        path: "/layout",
        element: <Layout />,
        children: [
            
        ]
    },
]

export default router
