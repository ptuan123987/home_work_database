<template>
  <div class="">
    <CreateForm/>
    <UsersList/>
  </div>
</template>

<script>
import UsersList from './components/UsersList.vue'
import CreateForm from './components/CreateForm.vue'
export default {
  name: 'App',
  components: {
    UsersList,
    CreateForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import'~bootstrap/dist/css/bootstrap.css'
</style>
