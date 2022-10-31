import axios from 'axios'

const cookie = process.env.JUEJIN_COOKIE


const url = 'https://api.juejin.cn/growth_api/v1/check_in'


// 签到
export async function autoSign():Promise<any> {
  
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
        console.log('签到',res.data)
        return res.data
      },
      (err) => {
        console.log(err)
        return {"error": '签到失败'}
      }
    )
}

// 抽奖
export function autoDraw():Promise<any> {
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
        console.log('抽奖',res.data)
        return res.data
      },
      (err) => {
        console.log('抽奖',err)
        return {"error": '抽奖失败'}
      }
    )
}


