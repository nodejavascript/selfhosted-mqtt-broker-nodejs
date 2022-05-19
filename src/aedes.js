import 'dotenv/config'
import aedes from 'aedes'
import { Level } from 'level'
import aedesPersistencelevel from 'aedes-persistence-level'
import mqemitter from 'mqemitter'

const { AEDES_BROKER_NAME } = process.env

export const returnAedes = async () => {
  return aedes({
    id: AEDES_BROKER_NAME,
    persistence: aedesPersistencelevel(new Level('./mydb')),
    mq: mqemitter({
      concurrency: 500,
      matchEmptyLevels: true // [MQTT-4.7.1-3]
    })
  })
}
