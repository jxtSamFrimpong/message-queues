const amqp = require('amqplib')
const config = require('./config')

const consumeMessages = async () => {
    console.log('warningAndConsumer consumer microservise started')

    const connection = await amqp.connect(config.rabbitMQ.url)

    const channel = await connection.createChannel();

    await channel.assertExchange('logExchange', 'direct')

    const q = await channel.assertQueue("WarningAndErrorQueue")

    await channel.bindQueue(q.queue, "logExchange", "Warning")
    await channel.bindQueue(q.queue, "logExchange", "Error")

    channel.consume(q.queue, (msg) => {
        const data = JSON.parse(msg.content)
        if (data.logType === 'Warning') {
            console.log(`warning message content recieved is `, data)
            channel.ack(msg)
        } else {
            console.log(`Error message content recieved is `, data)
            channel.ack(msg)
        }
    })
}

consumeMessages()