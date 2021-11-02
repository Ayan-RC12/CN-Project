const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost:1883");
// const client = mqtt.connect("mqtt://eclipse");
const topicHeartBeat = "device-heartbeat";
const topicConfiguration = "device-configuration";
const topicDeviceData = "device-data";
var clc = require("cli-color");
const file3 = require("./data");
const message =require('./data2');
// On boot run Publisher, send device up information
async function OnHeartBeat() {
  try {
    
    client.on("connect", () => {
      console.log("Device is on !", message);
      client.publish(topicHeartBeat, JSON.stringify(message,null,2), { retain: true });
    });
  } catch (err) {
    throw err;
  }
}

// subscriber, for getting the device configs  

async function OnDeviceConfiguration() {
  try {
    client.on("connect", () => {
      client.subscribe(topicConfiguration, function (err) {
        if (err) {
          console.log(err);
          return;
        }
      });
    });
  } catch (err) {
    throw err;
  }
}

// messages listener
receiver = () => {
  client.on("message", (TOPIC, message) => {
    if (TOPIC == "device-configuration") {
      //receive file 2 as message
      console.log("file 2 received");
      console.log(clc.red("sending data to client!!!!!"));

      setInterval(() => {
        client.publish(topicDeviceData, JSON.stringify(file3,null,2), {
          retain: true,
        });
        console.log(clc.blue("sending data to the Subscriber!"));
      }, 2000);
    }
  });
};

receiver();
OnHeartBeat();
OnDeviceConfiguration();
