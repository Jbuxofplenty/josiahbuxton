const rp = require('request-promise');
const cors = require('cors');

// Express for parsing body
var checkRecaptcha = require('express')()
var bodyParser = require('body-parser')

checkRecaptcha.use(bodyParser.json()) // for parsing application/json
checkRecaptcha.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Automatically allow cross-origin requests
checkRecaptcha.use(cors({ origin: true }));

checkRecaptcha.post('*', (req, res) => {
  const response = req.body.response;
  console.log("recaptcha response", response)
  rp({
      uri: 'https://recaptcha.google.com/recaptcha/api/siteverify',
      method: 'POST',
      form: {
          secret: '6LfEJbEUAAAAAPRepi7xqCOzxgyNovQZnDSqVDZ9',
          response: response
      },
      json: true
  }).then(result => {
      console.log("recaptcha result", result)
      if (result.success) {
          res.send({type: 'success'})
      }
      else {
          res.send({type: 'recaptchaFailure'})
      }
  }).catch(reason => {
      console.log("Recaptcha request failure", reason)
      res.send({type: 'apiFailure', error: reason })
  })
});


module.exports = {
  checkRecaptcha
};
