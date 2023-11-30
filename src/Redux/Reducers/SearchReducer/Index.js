import Index from "../../../CartPage/Index"

const Search1 = []
const Index = (state=Search1,action) =>{
    switch(action.type){
        case "add":
            return [...state,action.payload]
        case "subb":
            return state.filter((z)=>z.id!==action.payload.id)
        default :
            return state
    }
}
export default Index;