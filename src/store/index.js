import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  actions: {  // 通过 context 上下文 分发mutations
    increment:(context,count) =>context.commit("increment",count),
    decrement:(context,count) =>context.commit("decrement",count)
  },
  mutations: {
    increment: (state,count) => state.count=state.count+count,
    decrement: (state,count) => state.count=state.count-count
  }
});
