"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const amqp = require("amqplib/callback_api");
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
        const queue = 'hello';
        const message = 'Hello world';
        channel.assertQueue(queue, {
            durable: false
        });
        channel.sendToQueue(queue, Buffer.from(message));
        console.log("[x] Sent %s" + message);
    });
    setTimeout(function () {
        connection.close();
        process.exit(0);
    }, 500);
});
//# sourceMappingURL=index1.js.map