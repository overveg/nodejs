# a1-beep

Play a beep sound on the computer.

## Why

Beep is usually a `\u07` character printed to console. Unfortunately, on modern computers beeping is disabled.

## Usage

Pre-requisite: Make sure that the `aplay` command is installed (aplay is already installed by default in Ubuntu and other distros).

Then, simply write:

```javascript
const { beep } = require('a1-beep')
beep() //normal beep
```

Complex beeps, like songs, can also be played. Whitespace means 200ms of silence
```javascript
beep('. . ... .... ..')
```

Notes:

beep() returns inmediately (and not async function) because there is no need for waiting beep to finish.

