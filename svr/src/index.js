const koa = require('./koa')
const slack = require('./slack')

if (process.env.SERVICE_KEY) {
  if (process.env.PORT) {
    koa()
  }

  if (process.env.SLACK_TOKEN) {
    slack()
  }
}
