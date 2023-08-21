const mongoose = require("mongoose");

const allowedPlatforms = [
  "Github", "Frontend Mentor", "Twitter", "LinkedIn", "Youtube", "Facebook",
  "Twitch", "Dev.to", "CodeWars", "FreeCodeCamp", "Gitlab", "Hashnode", "Stack Overflow"
];

const linkSchema = new mongoose.Schema({
  index: Number,
  platform: {
    type: String,
    enum: allowedPlatforms,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  user: {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
      required: true
    }
  }
});

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;


module.exports = linkSchema;
