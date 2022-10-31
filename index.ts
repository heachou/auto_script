import { autoDraw, autoSign } from './juejin'
import axios from 'axios'

const PUSH_KEY = process.env.PUSH_KEY
const fangtangUrl = `https://sctapi.ftqq.com/${PUSH_KEY}.send`

const result: Record<string, unknown>[] = []

async function sendMsg(msg:string) {
  const res = await axios.post(`${fangtangUrl}?title=${encodeURI("签到")}&desp=${encodeURI(msg)}`)
}

async function run() {
  try {
    const res1: Record<string, unknown> = await autoSign()
    const res2: Record<string, unknown> = await autoDraw()

    result.push(res1)
    result.push(res2)

    const str = result.map(item => {
      return typeof item === 'string' ? item : JSON.stringify(item)
    }).join('\n')

    await sendMsg(str)
  } catch (error: any) {
    console.log(error)
    sendMsg(`签到失败: ${JSON.stringify(error)}`)
  }
}

run()
