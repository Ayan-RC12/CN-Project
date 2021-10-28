module.exports={
    "connection": {
      "name": "wifi", // device name
      "ssid": "ANTWiFi _KURUBAS", // serial
      "apn": "internet", // meta
      "pass": "55627664", // meta
      "retry": 10, // hardcoded
      "ping": "8.8.4.4" // hardcoded
    },
    "mqtt": {
      "url": "mqtt://10.9.9.127:1883" // env variable
    },
    "modbus": {
      "uart": { // metadata
        "baud": 115200,
        "parity": 0,
        "databits": 3,
        "stopbits": 1
      },
      "pollInterval": 120, //metadata
      "devices": [ // child devices without communication || metadata
        {
          "slaveId": 2,
          "chcode": "",
          "responseTimeout": 10,
          "blockSize": 10,
          "is16Swapped": false,
          "is32Swapped": false,
          "is64Swapped": false,
          "groups": [
            {
              "functionType": "read",
              "addressList": [
                {
                  "address": 402000,
                  "paramType": 4
                },
                {
                  "address": 402002,
                  "paramType": 4
                },
                {
                  "address": 402004,
                  "paramType": 4
                }
              ]
            }
          ]
        }
      ]
    },
    "channels": [
      {
        "num": 0, // number of channels, channel=0
        "reginfo": [ // register model
          {
            "type": 1, // short energy
            "regs": [ // address
              128,
              129,
              78,
              55,
              160,
              161
            ]
          },
          {
            "type": 2, // long energy || 3 can be both(short, long)
            "regs": [
              160,
              161,
              162,
              163
            ]
          }
        ]
      },
      {
        "num": 1,
        "reginfo": [
          {
            "type": 1,
            "regs": [
              160,
              161,
              44,
              33,
              22
            ]
          },
          {
            "type": 2,
            "regs": [
              160,
              161,
              162,
              163
            ]
          }
        ]
      }
    ],
    "sntp": { // metadata, if not then predefined values
      "interval": 600,
      "server": "pool.ntp.org",
      "tz": "TRT-3" // timezone
    },
    "log": { // metadata
      "tshort": 20, // sec
      "tlong": 500 // sec
    },
    "tshort": 5, // metadata
    "tlong": 30 // metada
  }