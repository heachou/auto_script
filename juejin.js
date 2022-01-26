const axios = require('axios')
const fs = require('fs')
const path = require('path')
const cookie = fs.readFileSync(path.resolve(__dirname, './cookie.conf'), 'utf8')

const url = 'https://api.juejin.cn/growth_api/v1/check_in'

const fangtangUrl = `https://sctapi.ftqq.com/SCT115237TL3pTqV2pON6gjzhEmOZfKC6F.send`

// 签到
function autoSign() {
  axios
    .post(
      url,
      {},
      {
        headers: {
          cookie,
        },
      }
    )
    .then(
      (res) => {
        const { err_no } = res.data
        if (err_no === 0) {
          autoDraw()
        }
        console.log(res.data)
        return res.data
      },
      (err) => {
        console.log(err)
        return err
      }
    ).then(res => {
      axios.post(`${fangtangUrl}?title=${encodeURI("掘金签到：" + JSON.stringify(res.data ? res.data : res))}&desp=${encodeURI(JSON.stringify(res))}`)
    })
}

// 抽奖
function autoDraw() {
  axios
    .post(
      `https://api.juejin.cn/growth_api/v1/lottery/draw`,
      {},
      {
        headers: {
          cookie,
        },
      }
    )
    .then(
      (res) => {
        console.log(res.data)
      },
      (err) => {
        console.log(err)
      }
    )
}

autoSign()
