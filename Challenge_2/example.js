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

async function solution() {
  const a = await attempt('Attempt');
  console.log(a);
}

solution();
