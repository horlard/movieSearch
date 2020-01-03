
const initialValue={
    result:[]
}

export default (state=initialValue,action)=> {
    switch(action.type) {
        case 'INDIVIDUAL_SEARCH':
            return {...state,result:action.payload}
        default:
            return state;
    }
}