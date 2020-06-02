<template>
  <v-app-bar
    app
    color="#1F8CE6"
    dark
  >
    <v-app-bar-nav-icon @click="$store.state.drawer = true"></v-app-bar-nav-icon>

    <v-toolbar-title>RIDIBOOKS</v-toolbar-title>

    <template v-slot:extension>
      <v-tabs
        align-with-title
        color="white"
      >
        <v-tab>눈비오는날 포인트</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>
