// MQTT Subscriber
const mqtt = require('mqtt');
let client = mqtt.connect('mqtt://localhost:1883')
// let topic = 'PROJECT';
const topicHeartBeat = "device-heartbeat";
const topicDeviceData = "device-data";

client.on('message', (TOPIC, message) => {

    if(TOPIC==topicHeartBeat ){
        client.publish('device-configuration','this is a test message');
        message = message.toString()
        console.log(message)
    }
    if(TOPIC==topicDeviceData ){ 
        message = message.toString()
        console.log(message)
    }
})

client.on('connect', () =>{
    client.subscribe(topicHeartBeat,()=>{
        console.log('testing subscibe......');
    })
    client.subscribe(topicDeviceData,()=>{});
})

