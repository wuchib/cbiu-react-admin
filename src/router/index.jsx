import Layout from '../components/Layout.jsx'
import Board from '../pages/Board/index.jsx'
import User from '../pages/User/index.jsx'
import LoginRegister from '../pages/Login/index.jsx'
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
            {
                index: true,  // 默认路由layout，当访问 "/" 时渲染
                element: <Navigate to="/layout/board" replace />,
            },
            {
                path: "board",
                element: <Board />,
                handle: {
                    title: '主页面板',
                }
            },
            {
                path: "user",
                element: <User />,
            },
            {
                path: "1",
                element: <User />,
            },
            {
                path: "2",
                element: <User />,
            },
            {
                path: "3",
                element: <User />,
            },
            {
                path: "4",
                element: <User />,
            },
            {
                path: "5",
                element: <User />,
            },
        ]
    },
]

export default router
