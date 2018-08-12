const Router = require('koa-router')

const music = new Router()
const musicController = require('../../controller/music')
music.get('/getRecommend', async (ctx) => {
  await musicController.getRecommend(ctx)
})

music.get('/getSingerList', async (ctx) => {
  await musicController.getSingerList(ctx)
})

music.get('/getDiscList', async (ctx) => {
  await musicController.getDiscList(ctx)
})

music.get('/getSingerDetail', async (ctx) => {
  await musicController.getSingerDetail(ctx)
})

music.get('/getSongLyric', async (ctx) => {
  await musicController.getLyric(ctx)
})

music.get('/getDiscDetail', async (ctx) => {
  await musicController.getDiscDetail(ctx)
})

music.get('/getTopList', async (ctx) => {
  await musicController.getTopList(ctx)
})

music.get('/getTopListDetail', async (ctx) => {
  await musicController.getTopListDetail(ctx)
})

music.get('/getAlbumlib', async (ctx) => {
  await musicController.getAlbumlib(ctx)
})

music.get('/getAlbumInfo', async (ctx) => {
  await musicController.getAlbumInfo(ctx)
})

music.post('/getPUrl', async (ctx) => {
  await musicController.getPUrl(ctx)
})

module.exports = music
