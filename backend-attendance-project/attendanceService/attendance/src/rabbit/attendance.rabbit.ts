import amqp = require('amqplib/callback_api');

export function attendanceService(input: any) {
    amqp.connect({
        protocol: 'amqp',
        hostname: 'localhost',
        port: 5673,
        username: 'guest',
        password: 'guest'
    }, function (error, connection) {
        if (error) {
            throw error;
        }

        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }

            const queue = 'attendance';
            const message = input;
            const exchangeName = 'attendance-exchange'
            //const consumerName = 'attendance-consume'
            const routingKey = 'routing'

            channel.assertExchange(exchangeName, 'direct');
            channel.assertQueue(queue, {
                durable: false
            });
            channel.sendToQueue(queue, Buffer.from(message));
            //console.log("[x] Sent %s" + message);

            channel.sendToQueue(queue, Buffer.from(message));
            channel.bindQueue(queue, exchangeName, 'false')
            channel.publish(exchangeName, routingKey, Buffer.from(message))
            console.log(" [x] Sent %s: '%s'", routingKey, message);
            console.log('message sent: ' + message);
        });
    });
}