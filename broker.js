// MQTT broker
const mosca = require('mosca');
let settings = {port: 1234}
let broker = new mosca.Server(settings)

broker.on('ready', () => {
    console.log('Broker is ready!');
});

broker.on('published', (packet) => {
console.log(packet.payload.toString())
})