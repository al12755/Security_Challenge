// These commands execute the challenge binary for you
// You may need to change challenge-macos to your relevant OS
const exec = require('child_process').exec;
const cmd = function(string) {
  return `./challenge-macos ${string}`;
}

// This function will run the attempt for you
// True: correct password
// False: incorrect password
// Don't worry about it just call it your password attempt!
async function attempt(string) {
  return new Promise(function(resolve, reject) {
    exec(cmd(string), function(error, stdout, stderr) {
      if (error) reject(error);
      if (stdout.split('\n')[0] === 'true') resolve(true)
      resolve(false);
    });
  });
}

async function solution() {
  const a = await attempt('Attempt');
  console.log(a);
  // ...Code here
}

solution();
