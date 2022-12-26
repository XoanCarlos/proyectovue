<template>
  <div id ='tabla-clientes'>
    <table class='table'>
      <thead>
      <tr>
        <th>NOMBRE</th>
        <th>APELLIDOS</th>
        <th>Email</th>
      </tr>
      </thead>
      <tbody>
       <tr v-for="cliente in clientes" :key="cliente.id">
          <td>{{ cliente.nombre }}</td>
          <td>{{ cliente.apellido }}</td>
          <td>{{ cliente.email}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'tabla-clientes',
  props: {
    clientes: Array,
    },
  }

</script>

