var mongoose = require('mongoose');

var playListSchema = mongoose.Schema({
  session : Number,
  videoId : String,
  title : String
  }
);

var playListS = mongoose.model('playList', playListSchema);
module.exports = playListS;
