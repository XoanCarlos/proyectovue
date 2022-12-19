<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>CLIENTES</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <TablaClientes />
      </div>
    </div>
  </div>
</template>

<script>
import TablaClientes from "@/components/TablaClientes.vue";
  export default {
    name: 'app',
    components:{
      TablaClientes,
    },
  }
</script>

<style>
button{
  background: #008953;
  border: 1px solid #008953;
}
</style>
