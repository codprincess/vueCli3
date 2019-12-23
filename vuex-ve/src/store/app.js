import { INCREMENT,DESCREMENT} from './mutation-type'
const app = {
    //状态
    state: {
        count: 0
    },
    // store 中定义“getter”（可以认为是 store 的计算属性）。
    //就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，
    //且只有当它的依赖值发生了改变才会被重新计算。
    getters: {
        myCount(state) {
            return `count is ${state.count}`
        }
    },

    //同步事件
    mutations: {
        //增加
        [INCREMENT](state,n) {
            state.count += n;
        },

        //减少
        [DESCREMENT](state,n) {
            state.count -= n
        }
    },

    actions: {
        //写异步逻辑和复杂的逻辑
        async myIncrement(context, obj) {
            context.commit('INCREMENT', 2);
            const product = [1, 2, 3]
            return product
        },
        myDescrement(context) {
            context.commit('DESCREMENT', 1)
        }
    }
}

export default app