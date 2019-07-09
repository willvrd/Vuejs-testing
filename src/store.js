import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vehiculos:[
      {marca:'Fiat',cant:0},
      {marca:'Ford',cant:0},
      {marca:'Mazda',cant:0}
    ]
  },
  mutations: {
    aumentar(state,index){
      state.vehiculos[index].cant++;
    },
    restart(state){
      state.vehiculos.forEach(item => {
        item.cant = 0;
      })
    }
  },
  actions: {

  }
})
