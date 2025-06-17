import useTabsStore from '../store/index.js';
import { useNavigate, useLocation } from 'react-router-dom';

function Tabs() {
    const tabsStore = useTabsStore();
    const navigate = useNavigate()
    const location = useLocation();

    const { curTabValue, tabList } = tabsStore;
    function chooseTab(item) {
        tabsStore.chooseTab(item.value)
        navigate(`/${item.value}`); // 跳转  
    }

    // 删除页签
    function removeTab(value) {
        if(location.pathname === '/' + value) toNextTab(value)
        tabsStore.removeTab(value);
    }

    // 跳转下一个tab
    function toNextTab(value) {
        const index = tabList.findIndex(item => item.value === value);
        const nextIndex = tabList.length > 1 ? (index === tabList.length - 1 ? index - 1 : index) : 0; // 如果是最后一个tab，切换到前一个tab
        const nextTab = JSON.parse(JSON.stringify(tabList[nextIndex])); // 深拷贝，避免直接修改原数组
        navigate(`/${nextTab.value}`); // 跳转到下一个tab
    }
    return (
        <>
            <div className="h-[40px] w-[100%] items-center mb-2 overflow-x-auto overflow-y-hidden whitespace-nowrap">
                {
                    tabList.map(item => (
                        // 使用unocss来做页签
                        <div
                            key={item.value}
                            // className={'border-rd-md bg-blue-400 mr-2 flex items-center justify-center text-white cursor-pointer text-[14px] inline-flex p-1 pl-2 pr-2' + (location.pathname === `/${item.value}` ? ' bg-blue-500' : '')}
                            className={'textwcb-primary'}
                        >
                            <div className="text-primary-light" onClick={() => { chooseTab(item) }}>{item.label}</div>
                            {tabList.length > 1 ? <span className="ml-1 i-tabler:circle-x" onClick={() => { removeTab(item.value)}}></span> : <></>}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Tabs;