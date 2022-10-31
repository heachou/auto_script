const {autoDraw,autoSign} = require('./juejin')
const axios = require('axios')

const result = []

async function sendMsg(){
  const str = result.map(item => {
    return JSON.stringify(item)
  }).join('\n')
  const res = await axios.post(`${fangtangUrl}?title=${encodeURI("签到")}&desp=${encodeURI(str)}`)
}


async function run(){
  try {
    const res1 = await autoSign()
    const res2 = await autoDraw()
    
    result.push(res1)
    result.push(res2)

    await sendMsg()
  } catch (error) {
    result.push(error)
    sendMsg()
  }
}

run()
