const amqp = require('amqplib')
const config = require('./config')

const consumeMessages = async () => {
    console.log('consumer microservise started')

    const connection = await amqp.connect(config.rabbitMQ.url)

    const channel = await connection.createChannel();

    await channel.assertExchange('logExchange', 'direct')

    const q = await channel.assertQueue("InfoQueue")

    await channel.bindQueue(q.queue, "logExchange", "Info")

    channel.consume(q.queue, (msg) => {
        const data = JSON.parse(msg.content)
        console.log(`message content recieved is `, data)
        channel.ack(msg)
    })
}

consumeMessages()