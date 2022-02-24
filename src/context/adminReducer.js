const adminReducer=(state, action) => {
    switch(action.type){
       case 'POST_PRODUCT':
           return {
               ...state,
               payload: action.payload
           }
       default:
           return state
    }
}

export default adminReducer