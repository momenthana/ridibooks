const req = require('./request')
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = await req()
})

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  console.log(new Date() - start + 'ms')
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(process.env.PORT, () => {
  console.log(`heurm server is listening to port ${process.env.PORT}`)
})
