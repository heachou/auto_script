const axios = require('axios')
const fs = require('fs')
const path = require('path')
const cookie = fs.readFileSync(path.resolve(__dirname, './cookie.conf'), 'utf8')

const url = 'https://api.juejin.cn/growth_api/v1/check_in'

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
      },
      (err) => {
        console.log(err)
      }
    )
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
