/**
 * RoomController
 *
 * @description :: Server-side logic for managing rooms
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	 hi: function (req, res) {
         return res.send("Hi there!");
      },
      message: function (req, res) {
        return res.redirect("http://www.sayonara.com");
      }


};

