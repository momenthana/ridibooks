const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  ctx.body = 'Hello Koa'
  const start = new Date()
  await next()
  console.log(new Date() - start + 'ms')
})

app.listen(3000, () => {
  console.log('heurm server is listening to port 3000')
})
