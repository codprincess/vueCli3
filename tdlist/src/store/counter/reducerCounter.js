/**
 * create by <714195347@qq.com> 小公主
 */
const defaultState = {
    count:0
}

//在reducer中处理业务逻辑,对比vuex的mutations或者action
export default function counterReducer(state = defaultState,action){
    console.log(state,action)
    switch(action.type){
        case 'increment':return Object.assign({},state,{
            count:state.count + 1
        });
        case 'descrement':return Object.assign({},state,{
            count:state.count -1 
        });
        default:return state;

    }
}