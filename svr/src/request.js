const axios = require('axios')

const request = async () => {
  let info
  let date = new Date()
  const time = `${('0' + date.getHours()).slice(-2)}${('0' + date.getMinutes()).slice(-2)}`
  date = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}`
  await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtNcst?serviceKey=${process.env.KEY}&dataType=JSON&base_date=${date}&base_time=${time}&nx=61&ny=125`)
    .then(function (res) {
      info = res.data.response.body.items
    })
  return info
}

module.exports = request
