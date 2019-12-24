/**
 * create by <714195347@qq.com> 小公主
 */
import { combineReducers } from 'redux'
import reducerTodo from './todoList/reducerTodo'
import counter from './counter/reducerCounter'
import reducerPrice from './prices/reducerPrice'
const reducer = combineReducers({
    reducerTodo,
    counter,
    reducerPrice
})

export default reducer