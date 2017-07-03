const password = "p"

function checkPassword(candidate) {
  if (candidate.length !== password.length) return false;
  for (var i = 0; i < password.length; i += 1) {
    if (candidate[i] !== password[i]) return false;
  }
  return true;
}

console.log(checkPassword(process.argv[2]))
