<template>
  <v-main>
    <v-container>
      <v-card
        class="mx-auto"
        :width="$vuetify.breakpoint.xsOnly ? '100%' : '50%'"
        elevation="9"
      >
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline">선릉역</v-list-item-title>
            <v-list-item-subtitle>{{live.baseDate.slice(0, 4)}}년 {{live.baseDate.slice(4, 6)}}월 {{live.baseDate.slice(-2)}}일 {{live.baseTime.slice(0, 2)}}시 기준</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          <v-row align="center">
            <v-col cols="4">
              <v-icon size="100" color="#1F8CE6">mdi-weather-{{live.PTY === '1' ? 'rainy' : live.PTY === '2' ? 'snowy-rainy' : live.PTY === '3' ? 'snowy' : live.PTY === '4' ? 'pouring' : 'cloudy' }}</v-icon>
            </v-col>
            <v-col class="display-3">
              {{live.T1H}}&deg;C
            </v-col>
          </v-row>
        </v-card-text>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="#1F8CE6">mdi-weather-windy</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{live.WSD}}m/s</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="#1F8CE6">mdi-water</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{live.REH}}%</v-list-item-subtitle>
        </v-list-item>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Main',

  data () {
    return {
      live: {
        baseDate: '',
        baseTime: ''
      }
    }
  },

  async created () {
    await axios.get(process.env.VUE_APP_API_BASE_URL + '/live')
      .then(res => {
        this.live = res.data
      })
  }
}
</script>
