import 'dotenv/config'
import net from 'net'
import { returnAedes } from './aedes'
import { clearStdout } from './readline'
import { handleEvent } from './events'

const {
  AEDES_PORT,
  AEDES_USERNAME,
  AEDES_PASSWORD
} = process.env

// start with array to scale easier
const events = [
  {
    name: 'client',
    connection: true
  },
  {
    name: 'clientDisconnect',
    connection: true
  },
  {
    name: 'subscribe'
  },
  {
    name: 'unsubscribe'
  },
  {
    name: 'publish'
  }
]

export const startBroker = async () => {
  if (!AEDES_PORT) {
    console.log('TIP run this: cp .env.example .env && npm start')
    return process.exit(2)
  }

  const aedes = await returnAedes()
  const server = net.createServer(aedes.handle)

  server.listen(AEDES_PORT, () => {
    clearStdout(process)
    console.log(`Aedes is running on port ${AEDES_PORT}`)

    aedes.publish({ topic: '💖 Happy Birthday! ☃️', payload: `${aedes.id}, broker I am.` })
  })

  aedes.authenticate = (client, username, password, callback) => {
    if (username === AEDES_USERNAME && password.toString() === AEDES_PASSWORD) {
      callback(null, true)
    } else {
      const error = new Error('Auth error')
      error.returnCode = 4
      callback(error)
    }
  }

  events.forEach(event => {
    // decided to line these up so you can clearly see what's curious
    if (event.connection) aedes.on(event.name, client => handleEvent(aedes, { event, client }))
    if (!event.connection) aedes.on(event.name, (args, client) => handleEvent(aedes, { event, args, client }))
  })
}
