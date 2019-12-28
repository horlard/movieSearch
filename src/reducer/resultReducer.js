
const initialValues={
    result:[]
}



export default (state=initialValues,action)=> {
    switch(action.type) {
        case 'DEFAULT_SEARCH' :
            return {...state,result:action.payload}
        case 'MAIN_SEARCH':
            return {...state,result:action.payload}
        default:
            return state
    }
}