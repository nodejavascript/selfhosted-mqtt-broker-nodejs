export const handleConnection = (aedes, event, client = null) => {
  const logline = returnLogline(event)

  if (client) logline.push(`clientId: ${client.id}`)

  displayLogline(logline)
}

export const handleEvent = (aedes, event, message, args) => {
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
