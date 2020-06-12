const axios = require('axios')
const fs = require('fs')

const load = () => {
  try {
    return JSON.parse(fs.readFileSync('src/data.json').toString())
  } catch {
    return {}
  }
}

const save = (info) => {
  fs.writeFileSync('src/data.json', JSON.stringify(info))
}

const request = {
  live: async () => {
    const data = load()
    let info
    const date = new Date()
    date.setMinutes(date.getMinutes() - 40)
    const baseDate = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}`
    const baseTime = `${('0' + date.getHours()).slice(-2)}00`
    if (data.live && data.live[0].baseTime === baseTime && data.live[0].baseDate === baseDate) {
      return data.live
    }
    await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtNcst?serviceKey=${process.env.SERVICE_KEY}&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&nx=61&ny=125`)
      .then(function (res) {
        info = res.data.response.body.items.item
      })
    data.live = info
    save(data)
    return info
  },
  stack: async () => {
    const info = 0
    return info
  },
  forecast: async () => {
    const info = 0
    return info
  }
}

module.exports = request
