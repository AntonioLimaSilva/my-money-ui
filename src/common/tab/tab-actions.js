export const selectTab = (tabId) => ({
    type: 'TAB_SELECTED',
    payload: tabId
})

export const showTabs = (...tabIds) => {
    const tabsToShow = {}
    tabIds.forEach(t => tabsToShow[t] = true)
    return {
        type: 'TAB_VISIBLED',
        payload: tabsToShow
    }
}