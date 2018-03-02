import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as Parse from 'parse';

//console.log('process.env.REACT_APP_PARSE_SERVER_URL', process.env.REACT_APP_PARSE_SERVER_URL);
console.log(process.env.REACT_APP_PARSE_APP_ID);
Parse.initialize(process.env.REACT_APP_PARSE_APP_ID);
Parse.serverURL = process.env.REACT_APP_PARSE_SERVER_URL;

var GameScore = Parse.Object.extend('GameScore');
var gameScore = new GameScore();

gameScore.set('score', 12);
gameScore.set('playerName', 'df Plott');
gameScore.set('cheatMode', false);

gameScore.save(null, {
  success: function(gameScore) {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + gameScore.id);
  },
  error: function(gameScore, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  }
});

var user = new Parse.User();
user.set('username', 'myname');
user.set('password', 'mypass');
user.set('email', 'emai@example.com');

// other fields can be set just like with Parse.Object

user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
    console.log(user);
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    console.error('user.signUp: ', error);
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
