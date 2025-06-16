
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Tabs from './Tabs.jsx';
import { useEffect } from 'react';
import useTabsStore from '../store/index.js';
import { useMatches } from 'react-router-dom';

import Card from './Card.jsx'; // Assuming you have a Card component

function Layout() {
    const tabsStore = useTabsStore();
    const navigate = useNavigate()
    const location = useLocation();
    const defaultSelectedKey = location.pathname.split('/')[1] || 'board'; // 获取当前路由的第一个部分作为默认选中项
    const items = [
        {
            key: 'board',
            label: '主页面板',
            icon: <MailOutlined />,
        },
        {
            key: 'user',
            label: '用户管理',
            icon: <AppstoreOutlined />,
        },
        {
            key: '1',
            label: '模块1',
            icon: <AppstoreOutlined />,
        },
        {
            key: '2',
            label: '模块2',
            icon: <AppstoreOutlined />,
        },
        {
            key: '3',
            label: '模块3',
            icon: <AppstoreOutlined />,
        },
        {
            key: '4',
            label: '模块4',
            icon: <AppstoreOutlined />,
        },
        {
            key: '5',
            label: '模块5',
            icon: <AppstoreOutlined />,
        }
    ];

    // 只在首次挂载时执行。添加初识路由对应的页签
    useEffect(() => {
        const defaultRoute = items.find(item => item.key === defaultSelectedKey);
        tabsStore.updateTabList({ value: defaultRoute.key, label: defaultRoute.label }); // 初始化页签
    }, []);
    function toPage({  key }) {
        const clickedItem = items.find(item => item.key === key);
        if (clickedItem) {
            navigate(`/${key}`); // 跳转  
            tabsStore.updateTabList({ value: key, label: clickedItem.label }) // 添加页签
        }
    }

    return (
        <>
            <div className="">
                <header className="h-[56px] bg-[#1890ff] flex items-center px-4">
                    <h1 className="text-2xl font-bold">后台管理系统</h1>
                </header>
                <div className="h-[calc(var(--vh,1vh)*100-56px)] bg-red-200 flex">
                    <div className="w-[200px] bg-[#f0f2f5]">
                        <Menu
                            onClick={toPage}
                            style={{ width: '100%' }}
                            defaultSelectedKeys={[defaultSelectedKey]}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            items={items}
                        />
                    </div>
                    <div className='w-[calc(100vw-200px)] flex-1 p-4'>
                        {/* <RouteListener /> */}
                        <Tabs />
                        <Card />
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;