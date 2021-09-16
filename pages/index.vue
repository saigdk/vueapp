<template>
  <div>
    <Header></Header>
    <Features></Features>
    <Hero></Hero>
  </div>
</template>

<script>
import Header from '../components/home/Header'
import Features from '../components/home/Features'
import Hero from '../components/home/Hero'

export default {
  name: 'App',
  components: {
    Header,
    Features,
    Hero
  },
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>
