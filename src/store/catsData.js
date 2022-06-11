const catsData = (state=[], action)=>{
    switch(action.type){
        case 'data':
            return [...state, action.payload.data]
            default:
                return state
    }
}
export default catsData