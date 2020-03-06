const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const req = require('./request')

const koa = new Koa()
const router = new Router()

const koajs = () => {
  router.get('/live', async (ctx, next) => {
    ctx.body = await req.live()
  })

  router.get('/stack', async (ctx, next) => {
    ctx.body = await req.stack()
  })

  router.get('/forecast', async (ctx, next) => {
    ctx.body = await req.forecast()
  })

  koa.use(cors())

  koa.use(async (ctx, next) => {
    const start = new Date()
    await next()
    console.log(new Date() - start + 'ms')
  })

  koa.use(router.routes()).use(router.allowedMethods())

  koa.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`)
  })
}

module.exports = koajs
