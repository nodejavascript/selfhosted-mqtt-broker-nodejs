import { clearStdout } from './readline'

const {
  NODE_ENV,
  DISPLAY_TABLE
} = process.env

// helps to scroll through stdout
let count = 0

export const handleEvent = (aedes, { event, args, client }) => {
  if (!NODE_ENV === 'local') return

  count += 1

  // clears terminal every event so table appears reactive.
  if (DISPLAY_TABLE) clearStdout(process)

  const display = {
    event: event.name,
    count,
    now: (new Date()).toISOString(),
    aedes: `${aedes.id}`
  }

  // client won't exist on aedes.publish()
  if (client) display.client = client.id

  // args can exist as a `subscriptions` object for connection === true, OR as packet object if event is `publish`
  if (args && args.topic) display.topic = args.topic

  let payload

  if (['publish'].includes(event.name)) {
    display.payloadSize = `${args.payload.toString().length} char(s)`
    payload = args.payload.toString()
  }

  DISPLAY_TABLE && console.table(display)

  if (!DISPLAY_TABLE) {
    const { event, count, now, topic, client } = display

    let output = `\n\n----${event}---- ${count}\n${now}`
    if (client) output += `\nclient: ${client}`
    if (payload) output += `\ntopic: ${topic}\n${payload}`

    // expensive, paint once
    console.log(output)
  }
}
