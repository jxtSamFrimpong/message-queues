const amqp = require('amqplib')
const config = require('./config')

class Producer {
    channel;

    async createChannel() {
        console.log('this url', config.rabbitMQ.url);

        const connection = await amqp.connect(config.rabbitMQ.url)
        console.log('connected')
        this.channel = await connection.createChannel();
    }

    async publishMessage(routingKey, message) {
        if (!this.channel) {
            await this.createChannel();
            console.log('channel created');
        }

        const exchangeName = config.rabbitMQ.exchangeName
        await this.channel.assertExchange(exchangeName, "direct")

        const logDetails = {
            logType: routingKey,
            message,
            dateTime: new Date()
        }
        await this.channel.publish(exchangeName, routingKey,
            Buffer.from(JSON.stringify(logDetails)))

        console.log(`The new ${routingKey} log with the message ${message} is sent to the exchange ${exchangeName} at ${new Date()}`)
    }
}


module.exports = Producer