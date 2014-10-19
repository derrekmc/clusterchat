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

        homePageImage: {
            type: 'string',
            defaultValue: null
        },
        profileImage: {
            type: 'string',
            defaultValue: null
        },
        userCount: {
            type: 'integer',
            defaultValue: 0
        },
        users: {
            type: 'json',
            defaultValue: []
        },
        owners: {
            type: 'json',
            defaultValue: []
        },
        log: {
            type: 'json',
            defaultValue: []
        },
        topic: {
            type: 'string',
            defaultValue: 'No Topic Specified'
        },
        tipGoal: {
            type: 'integer',
            defaultValue: 30
        },
        tipRemaining: {
            type: 'integer',
            defaultValue: 30
        },
        tippedAmount: {
            type: 'integer',
            defaultValue: 0
        },
        totalTips: {
            type: 'integer',
            defaultValue: 0
        }
  }


};

