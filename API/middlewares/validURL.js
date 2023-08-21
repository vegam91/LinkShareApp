const validator= require("validator");

function isValidUrl(inputUrl) {
  return validator.isURL(inputUrl, {
    require_protocol: true, 
    allow_underscores: true, 
  });
}

module.exports = {
  isValidUrl
};