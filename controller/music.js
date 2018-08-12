const {
  commonParams
} = require('./config')
const request = require('superagent')
const async = require('async')
const {promisify} = require('util')

class MusicController {
  constructor() {}
  // 获取推荐页面信息
  async getRecommend(ctx) {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    const data = Object.assign({}, commonParams, {
      platform: 'h5',
      uin: 981525928,
      needNewCode: 1
    })
    ctx.body = await request.get(url)
      .query(data)
      .then(res => {
        return res.text
      })
  }
  //获取歌单列表
  async getDiscList(ctx) {
    const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
    const data = Object.assign({}, commonParams, {
      g_tk: 756018626,
      platform: 'yqq',
      hostUin: 0,
      sin: 0,
      ein: 29,
      sortId: 5,
      picmid: 1,
      needNewCode: 0,
      loginUin: 981525928,
      categoryId: 10000000,
      rnd: Math.random(),
      format: 'json'
    })
    ctx.body = await request.get(url)
      .query(data)
      .set({
        referer: 'https://y.qq.com/portal/playlist.html'
      })
      .set('host', 'c.y.qq.com')
      .then(res => {
        return res
      })
  }
  // 获取歌单详情
  async getDiscDetail(ctx) {
    const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
    const data = Object.assign({}, commonParams, {
      disstid: ctx.query.disstid,
      type: 1,
      json: 1,
      urf8: 1,
      onlysong: 0,
      format: 'json',
      g_tk: 668456545,
      loginUin: 981525928,
      hostUin: 0,
      platform: 'yqq',
      needNewCode: 0
    })
    ctx.body = await request.get(url)
      .query(data)
      .set('referer', 'https://y.qq.com/n/yqq/playsquare/3269852386.html')
      .then(res => {
        return res.text
      })
  }
  // 获取歌手列表
  async getSingerList(ctx) {
    const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
    const data = Object.assign({}, commonParams, {
      channel: 'singer',
      page: 'list',
      key: 'all_all_all',
      g_tk: 1748439263,
      pagesize: 100,
      pagenum: 1,
      loginUin: 981525928,
      hostUin: 0,
      platform: 'yqq',
      needNewCode: 0
    })
    ctx.body = await request.get(url)
      .query(data)
      .then(res => {
        return res.text
      })

  }
  // 获取歌手详情
  async getSingerDetail(ctx) {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
    const data = Object.assign({}, commonParams, {
      g_tk: 1145974907,
      loginUin: 981525928,
      hostUin: 0,
      platform: 'yqq',
      needNewCode: 0,
      singermid: ctx.query.mid,
      order: 'listen',
      begin: 0,
      num: 100,
      songstatus: 1
    })
    ctx.body = await request.get(url)
      .query(data)
      .then(res => {
        return res.text
      })
  }
  // 获取歌词信息
  async getLyric(ctx) {
    const url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'
    const data = Object.assign({}, commonParams, {
      platform: 'yqq',
      needNewCode: 0,
      songmid: ctx.query.mid,
      pcachetime: +new Date(),
      hostUin: 0,
      format: 'json'
    })
    ctx.body = await request(url)
      .query(data)
      .set({
        referer: 'https://y.qq.com/portal/player.html'
      })
      .then(res => {
        if (typeof res.text === 'string') {
          let reg = /^\w+\(({[^()]+})\)$/
          let data = reg.exec(res.text)[1] || ''
          return data
        }
        return res.text
      })
  }
  // 获取排行
  async getTopList(ctx) {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
    const data = Object.assign({}, commonParams, {
      g_tk: 5381,
      uin: 0,
      format: 'json',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      _: 1533213793328
    })
    ctx.body = await request.get(url)
      .query(data)
      .set('referer', 'https://y.qq.com/m/index.html')
      .set('host', 'c.y.qq.com')
      .buffer(true)
      .then(res => {
        return res.text
      })
  }
  // 获取榜单详情
  async getTopListDetail(ctx) {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
    const data = Object.assign({}, commonParams, {
      g_tk: 5381,
      uin: 0,
      format: 'json',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      tpl: 3,
      page: 'detail',
      type: 'top',
      topid: ctx.query.topid,
      _: 1533709115469
    })
    ctx.body = await request.get(url)
      .query(data)
      .then(res => {
        return res.text
      })
  }
  // 获取专辑列表
  async getAlbumlib(ctx) {
    const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
    const data = Object.assign({}, commonParams, {
      gtk: 668456545,
      hostUin: 0,
      loginUin: 981525928,
      format: 'jsonp',
      notice: 0,
      platform: 'yqq',
      needNewCode: 0,
      data: '{"albumlib":{"method":"get_album_by_tags","param":{"area":7,"company":-1,"genre":-1,"type":-1,"year":-1,"sort":2,"get_tags":1,"sin":0,"num":100,"click_albumid":0},"module":"music.web_album_library"}}'
    })
    ctx.body = await request.get(url)
      .query(data)
      .then(res => {
        return res.text
      })
  }
  // 获取专辑信息
  async getAlbumInfo(ctx) {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg'
    const data = Object.assign({}, commonParams, {
      albummid: ctx.query.mid,
      g_tk: 668456545,
      loginUin: 981525928,
      hostUin: 0,
      format: 'json',
      notice: 0,
      platform: 'yqq',
      needNewCode: 0
    })
    ctx.body = await request.get(url)
      .query(data)
      .then(res => {
        return res.text
      })
  }
  // 获取vkey
  async getPUrl(ctx) {
    const url = `https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg`
    
    const {body} = ctx.request

    const data = Object.assign({}, commonParams, {
      g_tk: 668456545,
      jsonpCallback: 'MusicJsonCallback28582493156592403',
      hostUin: 0,
      format: 'json',
      notice: 0,
      platform: 'yqq',
      needNewCode: 0,
      cid: 205361747,
      callback: 'MusicJsonCallback28582493156592403',
      uin: 981525928,
      songmid: '',
      filename: '',
      guid: body.uid
    })

    let mapLimit = promisify(async.mapLimit)

    // 用async库并发获取vkey
    ctx.body = await mapLimit(body.mids, 5, function (mid, callback) {
      data.songmid = mid
      data.filename = `C400${mid}.m4a`
      request.get(url)
      .set({
        referer: 'https://y.qq.com/',
        origin: 'https://y.qq.com'
      })
      .query(data)
      .buffer(true)
      .then(res => {
        callback(null, res.body)
      })
    }).then(result => {
      let reg = /^\w+\(({[^()]+})\)$/
      let retArray = result.map(item => {
        return reg.exec(item.toString()) ? JSON.parse(reg.exec(item.toString())[1]) : {}
      })
      let urls = []
      retArray.forEach((item, index) => {
        urls.push(`http://dl.stream.qqmusic.qq.com/${item.data.items[0].filename}?vkey=${item.data.items[0].vkey}&guid=${body.uid}&uin=981525928&fromtag=66`)
      })
      return urls
    })
  }
}

module.exports = new MusicController()