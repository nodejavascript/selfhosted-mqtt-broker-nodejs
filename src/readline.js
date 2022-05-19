import readline from 'readline'

export const clearStdout = process => {
  const { stdout } = process
  readline.cursorTo(stdout, 0, 0)
  readline.clearScreenDown(stdout)
}
