import layoutCss from './layout.module.scss'
import avatarUrl from '../assets/avatar.jpg';
import logoUrl from '../assets/logo.webp'
import Menu from './menu/Menu';
import { useState } from 'react';
const initialMenu = [
    {
        key: 'overview', // 路径（唯一索引）
        label: '概览',  // 文本
        icon: 'i-ri:apps-line', // 图标 
        children: [ //子菜单
            {
                key: 'analyze',
                label: '分析页',
                icon: 'i-ri:bar-chart-box-ai-line',
                children: [],
                expanded: false,
                checked: false,
            },
            {
                key: 'work',
                label: '工作台',
                icon: 'i-ri:code-box-line',
                children: [],
                expanded: false,
                checked: false,
            }
        ],

        // UI状态值
        expanded: false, // 是否已展开
        checked: false, // 是否选中（激活，处于当前页面）
    },
    {
        key: 'demo', // 路径（唯一索引）
        label: '演示',  // 文本
        icon: 'i-ri:box-3-line', // 图标 
        children: [ //子菜单
            {
                key: 'table',
                label: '表格',
                icon: 'i-ri:table-line',
                children: [],
                expanded: false,
                checked: false,
            },
            {
                key: 'form',
                label: '表单',
                icon: 'i-ri:file-list-2-line',
                children: [],
                expanded: false,
                checked: false,
            }
        ],

        // UI状态值
        expanded: false, // 是否已展开
        checked: false, // 是否选中（激活，处于当前页面）
    },
    {
        key: 'about', // 路径（唯一索引）
        label: '关于',  // 文本
        icon: 'i-ri:error-warning-line', // 图标 
        children: [],

        // UI状态值
        expanded: false, // 是否已展开
        checked: false, // 是否选中（激活，处于当前页面）
    }
]
function Layout() {
    const defaultMenuIndex = '' // 默认激活项
    const [menuData, setMenuData] = useState(initialMenu)
    return (
        <>
            <div className={layoutCss.layout}>
                <aside>
                    <div className="flex-row-start-center pl-12 pr-12 h-[49px] w-full">
                        <div className="w-[32px] h-[32px] mr-8">
                            <img className="w-full h-full object-contain" src={logoUrl} />
                        </div>
                        <h1 className="fs-18 fw-600 text-ellipsis">Cbiu Admin Custom</h1>
                    </div>
                    {/* 菜单 */}
                    <Menu data={menuData} setData={setMenuData} index={defaultMenuIndex}></Menu>
                </aside>
                <main>
                    {/* 头部 */}
                    <header className="flex-row-between-center">
                        {/* 左边部分 */}
                        <section className="flex-row-start-center">
                            <div className="icon-button mr-4">
                                <span className="i-ri:menu-fold-3-line"></span>
                            </div>
                            <div className="icon-button mr-4">
                                <span className="i-ri:reset-right-line"></span>
                            </div>
                        </section>
                        {/* 右边部分 */}
                        <section className="flex-row-start-center">
                            <div className="icon-button mr-4">
                                <span className="i-ri:settings-4-line"></span>
                            </div>
                            <div className="icon-button mr-4">
                                <span className="i-ri:moon-fill"></span>
                            </div>
                            <div className="icon-button mr-4">
                                <span className="i-ri:translate-2"></span>
                            </div>
                            <div className="icon-button mr-4">
                                <span className="i-ri:fullscreen-line"></span>
                            </div>
                            <div className="icon-button mr-4">
                                <span className="i-ri:notification-2-line"></span>
                            </div>
                            {/* 头像 */}
                            <div className="h-[44px] w-[44px] ml-4 mr-8 p-6 circle-radius flex-row-center-center transition-colors hover:bg-[#f4f4f5] cursor-pointer position-relative">
                                <img className="w-full h-full circle-radius" src={avatarUrl}></img>
                                <div className="position-absolute h-[12px] w-[12px] circle-radius bottom-3 right-3 p-2 bg-[#ffffff]">
                                    <div className="w-full h-full bg-[#79ce8e] circle-radius"></div>
                                </div>
                            </div>
                        </section>
                    </header>
                    {/* tab页签 */}
                    <section className={`${layoutCss['tab-wrap']}`}>

                    </section>
                </main>
            </div>
        </>
    )
}

export default Layout