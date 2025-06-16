// store.js
import { create } from 'zustand';

const useTabsStore = create((set, get) => ({
    curTabValue: '',
    tabList: [],
    
    
    updateTabList: (tab) => {
        const stateGet = get(); 
        const targetVal = stateGet.tabList.find(item => item.value === tab.value);
        set({ tabList: !targetVal ? [...stateGet.tabList, tab] : stateGet.tabList })
    },

    removeTab: (value) => {
        const stateGet = get(); 
        const newTabList = stateGet.tabList.filter(item => item.value !== value);
        set({ tabList: newTabList });
    },

    chooseTab: (value) => {
        set({ curTabValue: value })
    },
}));

export default useTabsStore;