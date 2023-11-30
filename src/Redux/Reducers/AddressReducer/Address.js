const Initiak = []

const Address =(state=[],action)=>{
    switch(action.type){
        case 'InitialAddrees':
            return [...action.payload]
        default:
            return state
    }
}
export default Address