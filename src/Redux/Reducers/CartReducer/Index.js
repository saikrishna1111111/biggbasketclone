const carts=[]
const Index=(state=carts,action)=>{
    switch(action.type){
        case 'Initial':
            return [...action.payload]
        case 'ADD':
            return [...state,action.payload]
        case 'SUBB':
            return state.filter((z)=>z.id!==action.payload.id)
        case 'ALL_Delete':
            return []
        default:
            return state
    }
}
export default Index;