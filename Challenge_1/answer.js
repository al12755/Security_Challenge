const exec = require('child_process').exec;
const cmd = function(string) {
  return `./challenge-macos ${string}`;
}

async function attempt(string) {
  return new Promise(function(resolve, reject) {
    exec(cmd(string), function(error, stdout, stderr) {
      if (error) reject(error);
      if (stdout.split('\n')[0] === 'true') resolve(true)
      resolve(false);
    });
  });
}

function buildString(A) {
  return A.map(char => String.fromCharCode(char)).join('');
}

async function solution() {
  var start = 97;
  var end = 122;
  var string = [start]

  while(! await attempt(buildString(string))) {
    console.log(await buildString(string))
    string[0] += 1;
    for (let i = 0; i < string.length; i++) {
      if (string[i] > end) {
        if (i === string.length - 1) {
          string.push(start);
          console.log(string.length);
        } else {
          string[i+1] += 1;
        }
        string[i] = start;
      }
    }
  }
  console.log(buildString(string));
  console.log('Answer:', buildString(string));
}

solution();
