import 'dotenv/config'
import net from 'net'
import { returnAedes } from './aedes'
import internalIp from 'internal-ip'
import { clearStdout } from './readline'
import { handleConnection, handleEvent } from './events'

const {
  AEDES_PORT,
  AEDES_BROKER_NAME,
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
    console.error('TIP run this:\ncp .env.example .env && npm start')
    return process.exit(2)
  }

  const [aedes, ipaddress] = await Promise.all([
    returnAedes(),
    internalIp.v4()
  ])
  const server = net.createServer(aedes.handle)

  server.listen(AEDES_PORT, () => {
    clearStdout(process)
    console.log(`\n\n${AEDES_BROKER_NAME} is running on ip ${ipaddress}, port ${AEDES_PORT}\n`)
    aedes.publish({ topic: '💖 Hello Walt! ☃️', payload: `${aedes.id}, broker I am.` })
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
    // decided to line these up so you can clearly see what's curious. pub sub has diff callbacks than connections.
    if (event.connection) aedes.on(event.name, client => handleConnection(aedes, event, client))
    if (!event.connection) aedes.on(event.name, (client, args) => handleEvent(aedes, event, client, args))
  })
}
