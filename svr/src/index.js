const Koa = require('koa')
const Router = require('koa-router')
const req = require('./request')

const app = new Koa()
const router = new Router()

router.get('/live', async (ctx, next) => {
  ctx.body = await req.live()
})

router.get('/stack', async (ctx, next) => {
  ctx.body = await req.stack()
})

router.get('/forecast', async (ctx, next) => {
  ctx.body = await req.forecast()
})

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  console.log(new Date() - start + 'ms')
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`)
})
