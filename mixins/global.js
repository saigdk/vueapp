export default {
  computed: {
    sheetHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '300px'
        case 'sm': return '400px'
        case 'md': return '500px'
        case 'lg': return '550px'
        case 'xl': return '600px'
      }
      return '300px'
    }
  }
}