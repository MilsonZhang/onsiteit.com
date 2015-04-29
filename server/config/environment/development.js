'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    //uri: 'mongodb://172.17.42.1/onsiteit-dev'  //local on docker
    uri: 'mongodb://192.168.59.103/onsiteit-dev'  //local on host
  },

  seedDB: true
};
