const Router = require('koa-router')

const music = new Router()
const musicService = require('../../service/music')
music.get('/getRecommend', async (ctx) => {
  await musicService.getRecommend(ctx)
})

music.get('/getSingerList', async (ctx) => {
  await musicService.getSingerList(ctx)
})

music.get('/getDiscList', async (ctx) => {
  await musicService.getDiscList(ctx)
})

music.get('/getSingerDetail', async (ctx) => {
  await musicService.getSingerDetail(ctx)
})

music.get('/getSongLyric', async (ctx) => {
  await musicService.getLyric(ctx)
})

music.get('/getDiscDetail', async (ctx) => {
  await musicService.getDiscDetail(ctx)
})

music.get('/getTopList', async (ctx) => {
  await musicService.getTopList(ctx)
})

music.get('/getTopListDetail', async (ctx) => {
  await musicService.getTopListDetail(ctx)
})

music.get('/getAlbumlib', async (ctx) => {
  await musicService.getAlbumlib(ctx)
})

music.get('/getAlbumInfo', async (ctx) => {
  await musicService.getAlbumInfo(ctx)
})

music.post('/getPUrl', async (ctx) => {
  await musicService.getPUrl(ctx)
})

music.get('/getSearchResult', async (ctx) => {
  await musicService.getSearchResult(ctx)
})

music.get('/getHotKey', async (ctx) => {
  await musicService.getHotKey(ctx)
})

module.exports = music
