const req = require('./request')
const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  ctx.body = await req()
  const start = new Date()
  await next()
  console.log(new Date() - start + 'ms')
})

app.listen(process.env.PORT, () => {
  console.log(`heurm server is listening to port ${process.env.PORT}`)
})
