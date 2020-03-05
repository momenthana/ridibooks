<template>
  <v-app-bar
    app
    color="#1F8CE6"
    dark
    shrink-on-scroll
    prominent
    fade-img-on-scroll
    scroll-target="#scrolling-techniques"
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>RIDIBOOKS</v-toolbar-title>

    <template v-slot:extension>
      <v-tabs
        align-with-title
        color="white"
      >
        <v-tab>EVENT</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>
