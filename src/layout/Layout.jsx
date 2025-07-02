import layoutCss from './layout.module.scss'
import avatar from '../assets/avatar.jpg';
function Layout() {
    return (
        <>
            <div className={layoutCss.layout}>
                <aside></aside>
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
                                <img className="w-full h-full circle-radius" src={avatar}></img>
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