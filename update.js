const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

const publicationsFilename = "src/json/publications.json"
const publicationsSpreadsheetId = '1xuE0l_JiaCDmAYeL8lufvbbcIFW28AC4xKzHFGLTUR8'
const publicationsRange = 'Publications!A1:G'

const cvFilename = "src/json/cv.json"
const cvSpreadsheetId = "1BGN78Pm2gnuu6BS2imaKqbfCyAAxIiMUzkST3a8mFcA"
const cvRanges = ['Education!A1:D','Research!A1:D','Conferences!A1:D','Schools!A1:D']
const cvIcons = ['user-graduate', 'robot', 'users', 'chalkboard-teacher']

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content), update);
});

/**
* Create an OAuth2 client with the given credentials, and then execute the
* given callback function.
* @param {Object} credentials The authorization client credentials.
* @param {function} callback The callback to call with the authorized client.
*/
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return getNewToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      callback(oAuth2Client);
    });
  }

  /**
  * Get and store new token after prompting for user authorization, and then
  * execute the given callback with the authorized OAuth2 client.
  * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
  * @param {getEventsCallback} callback The callback for the authorized client.
  */
  function getNewToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error('Error while trying to retrieve access token', err);
        oAuth2Client.setCredentials(token);
        // Store the token to disk for later program executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) return console.error(err);
          console.log('Token stored to', TOKEN_PATH);
        });
        callback(oAuth2Client);
      });
    });
  }

  function parseResponse(data) {
    var cols = data[0];
    var rows = data.slice(1,data.length);
    return rows.map(function(r) {
      var entry = {};
      for (var i = 0; i < cols.length; i++) {
        entry[cols[i]] = r[i];
      }
      return entry;
    });
  }

  function fetchJson(auth, spreadsheetId, range) {
    const sheets = google.sheets({version: 'v4', auth});
    return new Promise((resolve,reject) => {
      sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range,
      }, (err, res) => {
        if (err) reject(err);
        var response = parseResponse(res.data.values);
        resolve(response);
      });
    });
  }

  function updatePublications(auth) {
    fetchJson(auth,publicationsSpreadsheetId,publicationsRange).then(entries => {
      var json = JSON.stringify(entries);
      fs.writeFile(publicationsFilename, json, 'utf8', function(err){
        if(err) throw err;
      });
      console.log("Publications updated.");
    }).catch((err) => {
      console.log("Error!");
    });
  }

  function updateCV(auth) {
    var promises = cvRanges.map(function(range){
      return fetchJson(auth,cvSpreadsheetId,range).then(x => x )
    })
    Promise.all(promises).then(function(results) {
      const cvItems = Array.from(Array(cvRanges.length).keys()).map(i => ({
          title : cvRanges[i].substr(0, cvRanges[i].indexOf('!')),
          icon : cvIcons[i],
          events : results[i]
        })
      );
      var json = JSON.stringify(cvItems);
      fs.writeFile(cvFilename, json, 'utf8', function(err){
        if(err) throw err;
      });
      console.log("CV updated.");
    })
  }

  function update(auth){
    updateCV(auth);
    updatePublications(auth);
  }
