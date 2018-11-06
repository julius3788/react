export const changePageTitle = (newPageTitle) => {
    return {
        type: 'PAGE_TITLE_CHANGE',
        payload:{
            newPageTitle: newPageTitle
        }
    }
}

export const changeCopyRightYear = (newCopyRightYear) => {
    return {
        type: 'PAGE_FOOTER_CHANGE',
        payload:{
            newCopyRightYear: newCopyRightYear
        }
    }
}
