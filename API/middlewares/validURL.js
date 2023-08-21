const url = require('url');

function isValidUrl(inputUrl) {
  try {
    new URL(inputUrl);
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = {
  isValidUrl
};