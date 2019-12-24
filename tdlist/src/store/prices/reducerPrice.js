/**
 * create by <714195347@qq.com> 小公主
 */
const initState = {
    salary: 10000
}

const reducerPrice = (state = initState,action)=>{
    console.log(state, action)
    switch(action.type){
        case 'upPrice':
           // return ;
            return Object.assign({}, state, {
                salary: state.salary += 1000
            });
        case 'lowPrice':
            //return state.salary -= 1000;
            return Object.assign({}, state, {
                salary: state.salary -= 1000
            });
        default:
            return state
    }
}

export default reducerPrice
