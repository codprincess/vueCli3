/**
 * create by <714195347@qq.com> 小公主
 */
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
//初始化数据
const defaultState = {
    inputValue: 'do something',
    list: []
}
export default (state = defaultState, action) => {
    // console.log('store接收action传给reducer',state,action)
    // if(action.type === 'changInput'){
    //     let newState = JSON.parse(JSON.stringify(state))
    //     newState.inputValue = action.value
    //     return newState
    // }
    switch (action.type) {
        case CHANGE_INPUT:
            {
                let newState = JSON.parse(JSON.stringify(state))
                newState.inputValue = action.value
                return newState
            }
        case ADD_ITEM:
            {
                let newState = JSON.parse(JSON.stringify(state))
                newState.list.push(newState.inputValue)
                newState.inputValue = ''
                return newState
            }

        case DELETE_ITEM:
            {
                let newState = JSON.parse(JSON.stringify(state))
                newState.list.splice(action.index, 1)//删除数组中对应的值
                return newState
            }

        case GET_LIST:
            {
                let newState = JSON.parse(JSON.stringify(state))
                newState.list = action.data.data.list
                return newState
            }
        default:
            return state
    }

}