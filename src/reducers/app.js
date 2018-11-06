const initialState = {
    pageTitle: 'Qtemuan Yuk',
    copyRightYear: 2010,
}

const appReducer = (state=initialState  , action) =>{
    switch (action.type){
        case 'PAGE_TITLE_CHANGE':
          return {
              ...state,
              pageTitle:action.payload.newPageTitle
          }

         case 'PAGE_FOOTER_CHANGE':
         return {
            ...state,
            copyRightYear:action.payload.newCopyRightYear
        }
        
      default:
         return state
    }    
}



export default appReducer