<template>
  <v-navigation-drawer
    v-model="$store.state.drawer"
    temporary
    app
  >
    <template>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-sheet class="pa-5">
              <v-switch
                v-model="$store.state.notification"
                inset
                color="#1F8CE6"
                label="알림 수신"
              ></v-switch>
            </v-sheet>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
    <template v-slot:append>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-btn tile outlined color="#1F8CE6" href="https://github.com/momenthana" target="_blank">
              <v-icon left>mdi-heart</v-icon> GitHub
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            Copyright 2020 MomentHana. All rights reserved.
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>
