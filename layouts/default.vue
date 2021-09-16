<template>
  <div id="app">
    <v-app>
      <v-main>
        <TopNav></TopNav>
        <Nuxt />
        <Footer></Footer>
    
        
      </v-main>
    </v-app>
  </div>
</template>

<script>
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'




 export default {
  name: 'App',
  components: {
    TopNav,
    Footer
   
  
  }
}
</script>
