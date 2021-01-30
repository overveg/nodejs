module.exports = { beep }

const { execute, sleep } = require('a1-util')

const COMMAND = 'aplay beep.wav'

/**
 * Make a beep,
 * The function is not async to be faster (detach the beep ASAP),
 * and never throw errors.
 * 
 * This way, the function will never raise problems on runtime. 
 * 
 * Note: the `play` command must be installed
 * @param beep?{string} optional, whitespace means silence. Example '. . ...' or 'a a a bbb' 
 */
function beep(song = '.') {
  const fn = async song => {
    try {
      await sleep(100)
      for (let c of song.split('')) {
        if (c !== ' ') {
          try { await execute(COMMAND) } catch (err) { ; }
          await sleep(100)
        } else await sleep(200)
      }
    } catch (err) { console.log(err) }
  }
  fn(song).catch(err => { })
}
