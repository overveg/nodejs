const { beep } = require('../index')
const { sleep } = require('a1-util')

async function test() {
  // test normal beep
  beep()
  await sleep(2000)
  // test songs 
  beep('. ... .  . .') //roger rabbit
  await sleep(5000)
  beep('. . ... .... ..') // stadium
  await sleep(6000)
  beep('. . .  . .. . ..') // star wars
}

test().catch(console.error)
