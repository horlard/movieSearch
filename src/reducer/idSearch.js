export default (state=[],action)=> {
    switch(action.type) {
        case 'INDIVIDUAL_SEARCH':
            return [...state,action.payload]
        default:
            return state;
    }
}