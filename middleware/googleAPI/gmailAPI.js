var fs = require('fs');
var path = require('path');
var google = require('../../node_modules/googleapis');
var gmail = google.gmail('v1');
var SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];

var thisAuthClient = function() {
  var auth =  new google.auth.JWT(
        'webmail@webmail-1156.iam.gserviceaccount.com',
        './googleAPI/webMail-key.pem',
        null,
        // Scopes can be specified either as an array or as a single, space-delimited string
        SCOPES,
        // User to impersonate (leave empty if no impersonation needed)
        'javasoftwaredeveloper85@gmail.com'
    );
    return auth;
};

exports.getAllLabels = function(callback) {
  var authClient = thisAuthClient();
  authClient.authorize(function(err, tokens) {
    if (err) {
      console.log(err);
      return;
    }
    gmail.users.labels.list({
      auth: authClient,
      userId: 'me'
    }, function(err, response) {
      if (err) {
        console.log('The API returned an error: ' + err);
        return;
      }
      callback(response.labels);
    });
  });
}
