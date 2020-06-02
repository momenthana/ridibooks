<template>
  <v-content>
    <v-container>
      <v-card
        class="mx-auto"
        max-width="400"
        elevation="9"
      >
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline">선릉역</v-list-item-title>
            <v-list-item-subtitle>Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          <v-row align="center">
            <v-col class="display-3" cols="6">
              23&deg;C
            </v-col>
            <v-col cols="6">
              <v-icon x-large color="orange">mdi-white-balance-sunny</v-icon>
            </v-col>
          </v-row>
        </v-card-text>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="blue">mdi-weather-windy</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="blue">mdi-water</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>48%</v-list-item-subtitle>
        </v-list-item>

        <v-list class="transparent">
          <v-list-item
            v-for="item in forecast"
            :key="item.day"
          >
            <v-list-item-title>{{ item.day }}</v-list-item-title>

            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-subtitle class="text-right">
              {{ item.temp }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Main',

  data () {
    return {
      live: [],
      forecast: [
        { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
        { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
        { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' }
      ]
    }
  },

  mounted () {
    axios.get('http://localhost/live')
      .then(res => {
        console.log(res.data)
        this.live = res.data
      })
  }
}
</script>
