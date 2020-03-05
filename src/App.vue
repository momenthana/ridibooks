<template>
  <v-app>
    <v-app-bar
      absolute
      color="#1F8BE4"
      dark
      shrink-on-scroll
      prominent
      fade-img-on-scroll
      scroll-target="#scrolling-techniques"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>RIDIBOOKS</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>EVENT</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <Main/>
  </v-app>
</template>

<script>
import Main from './components/Main'

export default {
  name: 'App',

  components: {
    Main
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
