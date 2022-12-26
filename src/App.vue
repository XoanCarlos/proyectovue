<script>
import TablaClientes from "@/components/TablaClientes.vue"
export default {
  name: 'app',
  components:{
    TablaClientes,
  },

  data: function(){
    return{
      clientes: [
        {
          id: 1,
          nombre: 'Lou',
          apellido: 'Reed',
          email: 'lreed@email.com',
        },
        {
          id: 2,
          nombre: 'Patti',
          apellido: 'Smith',
          email: 'psmith@email.com',
        },
        {
          id: 3,
          nombre: 'Janis',
          apellido: 'Joplin',
          email: 'jjoplin@email.com',
        },
      ],
    }
  },
}
</script>

<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>CLIENTES</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <tabla-clientes :clientes="clientes" />
        <!-- <tabla-clientes v-bind:clientes="clientes" /> -->
      </div>
    </div>
  </div>
</template>

