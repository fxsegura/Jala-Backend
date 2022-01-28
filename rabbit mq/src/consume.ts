import amqp = require('amqplib/callback_api');

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

        channel.assertQueue(queue,{
            durable:false
        });
        console.log("Waiting for messages...");
        channel.consume(queue,function(message){
            console.log("Recieved: %s", message.content.toString());
        },{
            noAck:true
        });
    });
    setTimeout(function(){
        connection.close();
        process.exit(0);
    },500);
});