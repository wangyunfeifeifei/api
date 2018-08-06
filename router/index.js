const Router = require('koa-router')

const API = require('./api/api')

const router = new Router()

router.use('/api', API.routes(), API.allowedMethods())

router.use('*', async (ctx) => {
    ctx.body = '<h1>404</h1>'
})

module.exports = router
