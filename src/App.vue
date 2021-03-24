<template>
  <div id="app">
    <div class="pageContainer">
      <Sidebar></Sidebar>
      <div class="pageContent">
        <Header></Header>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar'
  import Header from './components/Header'
  export default {
    name: 'app',
    components: {
      Sidebar, Header
    }
  }
</script>
