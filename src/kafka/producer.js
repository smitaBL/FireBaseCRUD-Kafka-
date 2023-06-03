const { Kafka } = require('kafkajs')
// import { Kafka } from 'kafkajs'

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
})

const producer = kafka.producer()

export const producerFn = async (data) => {

    let msg = JSON.stringify(data);
    // Producing
    await producer.connect()
    await producer.send({
        topic: 'test-topic',
        messages: [
            { value: msg },
        ],
    })

}

