const Koa = require('koa');
const chalk = require('chalk');
const bodyParser = require('koa-bodyparser');

const config = require('./config/index');
const router = require('./router/index');

const app = new Koa();

app.use(bodyParser())

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', '*');
    ctx.set('Access-Control-Allow-Methods', '*');
    ctx.set('Content-Type', 'application/json');
    await next();
})

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(config.PORT, config.HOST, () => {
    console.log(`server is start at ${chalk.green(`http://${config.HOST}:${config.PORT}`)}`)
})