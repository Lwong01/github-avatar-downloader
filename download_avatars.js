var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');


function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request'
    }
  };

  request(options, function(err, res, body) {
    cb(err, body);
    var body = Json.parse(body);
    body = forEach(function(element){
    var elementUrl = element.avatar_url;

  }
   console.log(elementUrl);
  });
}
function downloadImageByURL(url, filePath) {
  // ...
}
