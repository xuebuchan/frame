import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		route:null,
		count:5,
		price:20,
		todos:[
			 { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
		]
  },
  mutations: {
		 increment (state,n) {
			 console.log(state,n,"12")
      // 变更状态
			if(n){
				state.count=n;
			}else{
				state.count++
			}
      
    }
  },
  actions: {

  },
	//Getter 接受 state 作为其第一个参数
	getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
		 getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
  }
})
