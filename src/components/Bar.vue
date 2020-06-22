<template>
  <v-app-bar
    app
    color="#1F8CE6"
    dark
    prominent
    style="-webkit-app-region: drag"
  >
    <v-app-bar-nav-icon @click="$store.state.drawer = true"></v-app-bar-nav-icon>

    <v-toolbar-title>RIDIBOOKS</v-toolbar-title>

    <template v-slot:extension>
      <v-tabs
        align-with-title
        color="white"
        v-model="$store.state.tab"
      >
        <v-tab>눈비오는날 포인트</v-tab>
        <v-tab>받는 방법</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>
