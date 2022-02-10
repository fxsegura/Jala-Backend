import { createSendQueueToUser } from './userSend';
import amqp = require('amqplib/callback_api')

export function consumeAttendanceQueue() {
    let messages: any;
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
            const exchangeName = 'attendance-exchange'
            channel.assertExchange(exchangeName, 'direct');
            channel.assertQueue(queue,{
                durable:false
            });
            channel.consume(queue,function(message){
                console.log("Recieved: %s", message.content.toString());
                const messages = message?.content.toString();
                    createSendQueueToUser(messages);
            },{
                noAck:true
            });
        });
    });

    return messages;
}