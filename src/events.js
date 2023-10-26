const { AEDES_COMMAND_TOPIC } = process.env

export const handleConnection = (aedes, event, client = null) => {
  const logline = returnLogline(event)

  if (client) logline.push(`clientId: ${client.id}`)

  displayLogline(logline)
}

const listClients = aedes => {
  const clients = Object.keys(aedes.clients).map(key => {
    const client = aedes.clients[key]

    return {
      client: key,
      subscriptions: Object.keys(client.subscriptions),
      remoteAddress: client.conn.remoteAddress
    }
  })

  aedes.publish({ topic: `${AEDES_COMMAND_TOPIC}/listClients`, payload: JSON.stringify(clients) })
}

const handleCommand = (aedes, { topic, payload: payloadBuf }) => {
  if (!topic) return
  if (topic.includes('/') < 0) return

  const [auth, cmd] = topic.split('/')
  if (auth !== AEDES_COMMAND_TOPIC) return
  if (cmd !== 'cmd') return

  const payload = payloadBuf.toString()

  if (payload === 'listClients') listClients(aedes)
}

export const handleEvent = (aedes, event, message, args) => {
  handleCommand(aedes, message)
  const logline = returnLogline(event)

  const clientId = args ? args.id : aedes.id

  logline.push(`clientId: ${clientId}`)
  const { topic, payload } = message

  if (payload) logline.push(`payload (${typeof payload}), ${payload.toString()}`)

  if (topic) logline.push(`topic: ${topic}`)

  displayLogline(logline)
}

let count = 0
const returnLogline = event => {
  count += 1
  const logline = []
  logline.push(count)
  logline.push((new Date()).toISOString())
  logline.push(event.name)
  return logline
}

const displayLogline = logline => console.log(logline.join(', '))
