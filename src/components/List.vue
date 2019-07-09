<template>
    <div>
        <ul class="list-group">
            <li v-for="(item,index) of  orderArray" :key="item.id" @click="aumentar(index)"
            class="list-group-item d-flex justify-content-between align-items-center">
                 {{index}} - {{item.marca}}
                <span class="badge badge-primary badge-pill">{{item.cant}}</span>
            </li>
        </ul>
        <button @click="restart"
        class="btn btn-danger btn-block">Restaurar</button>
    </div>
</template>

<script>

import {mapState,mapMutations} from 'vuex';

export default {
  name: 'List',
  computed: {

      ...mapState([
        'vehiculos'
      ]),

      orderArray(){
          return this.vehiculos.sort( (a,b) => b.cant - a.cant)
      }
  },
  methods: {
      ...mapMutations([
          'aumentar',
          'restart'
      ])
  },
}
</script>