
const LoginStatus =(state = "",action)=>{
    
    switch(action.type){
        case 'sucessfull':
            return action.payload
        case 'logout':
            return ''
        default:
            return state
    }
}

export default LoginStatus