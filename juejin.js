const axios = require('axios')

const cookie = process.env.JUEJIN_COOKIE

const PUSH_KEY = process.env.PUSH_KEY

const url = 'https://api.juejin.cn/growth_api/v1/check_in'


// 签到
async function autoSign() {
  return axios
    .post(url,{},
      {
        headers: {
          cookie,
        },
      }
    )
    .then(
      (res) => {
        return res.data
      },
      (err) => {
        console.log(err)
        return err
      }
    ).then(res => {
    })
}

// 抽奖
function autoDraw() {
  return axios
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
        return res.data
      },
      (err) => {
        console.log(err)
      }
    )
}

module.exports = {
  autoSign,
  autoDraw
}
