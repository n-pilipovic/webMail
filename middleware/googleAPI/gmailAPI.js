var config = require('./config');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var Gmail = require('node-gmail-api');
var gmail;
var gmailStream;


passport.serializeUser(function(user, done) {
    console.log('Google User SERIALIZE: ', user);
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    console.log('Google User deserialize: ', obj);
    done(null, obj);
});

passport.use(new GoogleStrategy(
    {
        clientID: config.google.client_id,
        clientSecret: config.google.client_secret,
        callbackURL: config.google.redirect_url
    },
    function(accessToken, refreshToken, profile, done) {
        console.log('Access token: ' + accessToken);
        console.log('Refresh token: ' + refreshToken);
        console.log('Profile: ', profile);
        gmail = new Gmail(accessToken);
        process.nextTick(function() {
            return done(null, profile);
        });
    }
));

var handleAuthenticateUser = function() {
    return passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 
                                                     'https://www.googleapis.com/auth/gmail.modify', 
                                                     'https://www.googleapis.com/auth/gmail.compose'] 
                                                     });
};

var handleAuthenticateUserCallback = function() {
    return passport.authenticate('google', { failureRedirect: '/login' });
}

var streamGmailInbox = function() {
    gmailStream = gmail.messages('label:inbox');
    return gmailStream.on('data', function(message) {
        return message.snippet;
    });
}



module.exports = {
    passport: passport,
    handleAuthenticateUser: handleAuthenticateUser,
    handleAuthenticateUserCallback: handleAuthenticateUserCallback,
    streamGmailInbox: streamGmailInbox
};