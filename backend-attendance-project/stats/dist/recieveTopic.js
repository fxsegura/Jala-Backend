"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const amqp = require("amqplib/callback_api");
const args = process.argv.slice(2);
if (args.length == 0) {
    console.log("Usage: Message <animal>.<type>");
    process.exit(1);
}
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
        const exchange = 'backend-exchange';
        channel.assertExchange(exchange, "topic", {
            durable: false
        });
        channel.consume('mar', function (message) {
            console.log(message.content.toString());
        });
    });
    setTimeout(function () {
        connection.close();
        process.exit(0);
    }, 500);
});
//# sourceMappingURL=recieveTopic.js.map