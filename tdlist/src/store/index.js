/**
 * create by <714195347@qq.com> 小公主
 */
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
//官网写法
// const store = createStore(
//     reducer,
//     applyMiddleware(thunk)
// ) // 创建数据存储仓库

//如果想两个同时使用，需要使用增强函数。使用增加函数前需要先引入compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))
//const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(reducer,enhancer)
export default store
