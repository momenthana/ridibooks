<template>
  <v-app>
    <Bar />
    <Nav />
    <About v-if="$store.state.tab" />
    <Main v-else />
  </v-app>
</template>

<script>
import Bar from './components/Bar'
import Nav from './components/Nav'
import Main from './components/Main'
import About from './components/About'

export default {
  name: 'App',

  components: {
    Bar,
    Nav,
    Main,
    About
  },

  mounted () {
    const dark = window.matchMedia('(prefers-color-scheme: dark)')
    this.$vuetify.theme.dark = dark.matches
    dark.addEventListener('change', () => {
      this.$vuetify.theme.dark = dark.matches
    })
  }
}
</script>
