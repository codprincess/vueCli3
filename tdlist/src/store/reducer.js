//初始化数据
const defaultState = {
    inputValue:'do something',
    list:[
        'eating',
        'coding'
    ]
}
export default (state=defaultState,action)=>{
    console.log('store接收action传给reducer',state,action)
    // if(action.type === 'changInput'){
    //     let newState = JSON.parse(JSON.stringify(state))
    //     newState.inputValue = action.value
    //     return newState
    // }
    switch(action.type){
        case 'changInput':
           { 
               let newState = JSON.parse(JSON.stringify(state))
                newState.inputValue = action.value
                return newState
            }
        case 'addItem':
            {
                let newState = JSON.parse(JSON.stringify(state))
                newState.list.push(newState.inputValue)
                newState.inputValue = ''
                return newState
            }
            
        default:
            return state
    }
   
}