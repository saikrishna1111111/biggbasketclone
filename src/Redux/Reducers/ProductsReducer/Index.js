import Fruits from '../../../Data/ProductsData/FruitsData.json'
import Snacks from '../../../Data/ProductsData/SnacksData.json'
import Bevegers from '../../../Data/ProductsData/BevegersData.json'
import Vegetables from '../../../Data/ProductsData/VegetablesData.json'
let sai=[]

const Index=(state=sai,action)=>{
    switch(action.type){
        case "vegetables":
            return Vegetables
        case "snacks":
            return Snacks
        case "fruits":
            return Fruits
        case "brevegers":
            return Bevegers
        default:
            return state
    }
}
export default Index;