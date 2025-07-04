function Menu({ data, setData, level = 0 }) {
    function chooseMenuItem(item) {
        if (item.children.length > 0) {
            setData(prev => updateMenu(prev, item.key, 'expanded'))
        } else {
            setData(prev => updateMenu(prev, item.key, 'checked'))
        }
    }
    // 递归更新菜单
    function updateMenu(list, key, type) {
        let hasChecked = false

        const updated = list.map(item => {
            const isTarget = item.key === key
            let updatedChildren = updateMenu(item.children || [], key, type)

            const childHasChecked = updatedChildren.some(child => child.checked || child._hasChecked)

            const checked = type === 'checked'
                ? isTarget ? true : false
                : item.checked

            const expanded = type === 'expanded'
                ? isTarget ? !item.expanded : item.expanded
                : type === 'checked' && (isTarget || childHasChecked)
                    ? true
                    : item.expanded

            if (isTarget || childHasChecked) hasChecked = true

            return {
                ...item,
                checked,
                expanded,
                children: updatedChildren,
                _hasChecked: isTarget || childHasChecked
            }
        })

        // 清除中间字段
        return updated.map(({ _hasChecked, ...rest }) => rest)
    }
    const paddingLeft = 16 + level * 16

    return (
        <ul>
            {data.map(menuItem => {
                const { key, label, icon, children, expanded, checked } = menuItem
                let active = ''
                if (children.length > 0) {
                    active = (expanded ? 'color-[#006be6]' : 'color-[#323639]') + ' hover:bg-[#f4f4f5]'
                } else {
                    active = checked ? 'bg-[#e0e9fa] color-[#006be6]' : 'hover:bg-[#f4f4f5] color-[#323639]'
                }
                return (
                    <li key={key} className={'w-full mt-2' + (level === 0 ? ' pl-8 pr-8' : '')}>
                        <div
                            className={`h-[42px] w-full flex-row-between-center rounded-[6px]  transition-colors cursor-pointer pr-8 ${active} group`}
                            style={{ paddingLeft }}
                            onClick={() => chooseMenuItem(menuItem)}
                        >
                            <div className="flex-row-start-center">
                                <div className={`${icon} mr-8 transition-transform duration-200 ease-in-out group-hover:scale-115`}></div>
                                <div className="fs-14">{label}</div>
                            </div>
                            {children.length > 0 && (
                                <div
                                    className={
                                        expanded
                                            ? 'i-ri:arrow-drop-up-line'
                                            : 'i-ri:arrow-drop-down-line'
                                    }
                                ></div>
                            )}
                        </div>
                        <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden`}
                            style={{
                                maxHeight: expanded ? `${children.length * 44}px` : '0px',
                                opacity: expanded ? 1 : 0
                            }}
                        >
                            <Menu data={children} setData={setData} level={level + 1} />
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}


export default Menu
