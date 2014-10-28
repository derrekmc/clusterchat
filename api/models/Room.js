/**
* Room.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
        
      name: {
            type: 'string',
            unique: false,
            validations: [
                'notEmpty'
            ]
        },
        slug: {
            type: 'string',
            unique: false,
            validations: [
                'notEmpty'
            ]
        },
        room: {
            type: 'string',
            unique: false,
            validations: [
                'notEmpty'
            ]
        },
        url: {
            type: 'string',
            unique: false,
            validations: [
                'notEmpty'
            ]
        },
        uid: {
            type: 'string',
            index: true,
            unique: false,
            validations: [
                'notEmpty'
            ]
        },
        type: {
            type: 'string',
            defaultValue: 'public',
            validations: [
                'notEmpty'
            ]
        },
        status: {
            type: 'string',
            defaultValue: 'public',
            validations: [
                'notEmpty'
            ]
        },

  }


};

