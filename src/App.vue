<template>
  <div id="app">
    <b-navbar  type="dark" variant="dark" class="navbar sticky-top flex-md-nowrap p-0">
      <b-navbar-brand v-b-toggle.sidebar-right style="background-color:#343a40 !important; border-color: #343a40 !important">Teambuilder Pokemon</b-navbar-brand>
    </b-navbar>
    <b-sidebar id="sidebar-right" title="Teambuilder Pokemon" left shadow>
       <TemplateList />
    </b-sidebar>
    <div class="container-fluid">
      <div class="row">
        <main role="main" class="ml-sm-auto col-lg-12 pt-3 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/css/dashboard.css'
import TemplateList from './components/templateList.vue'

export default {
  name: 'App',
  components: {
    TemplateList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
