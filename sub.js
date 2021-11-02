// MQTT Subscriber
const mqtt = require('mqtt');
let client = mqtt.connect('mqtt://localhost:1883')

const topicHeartBeat = "device-heartbeat";
const topicDeviceData = "device-data";
var clc = require("cli-color");


client.on('message', (TOPIC, message) => {

    if(TOPIC==topicHeartBeat ){
        client.publish('device-configuration','device configuration meta data');
        message = message.toString()
        console.log(message);
        
    }
    if(TOPIC==topicDeviceData ){ 
        message = message.toString()
        console.log(clc.green(message))
    }
})

client.on('connect', () =>{
    client.subscribe(topicHeartBeat,()=>{
        console.log('testing subscibe......');
    })
    client.subscribe(topicDeviceData,()=>{});
})

