const exec = require('shell-exec');

require('dotenv').config();

const { USERNAME, HOSTNAME, SITENAME } = process.env;

async function run() {
  const result = await exec(
    `scp -r ./build/* ${USERNAME}@${HOSTNAME}:${SITENAME}/public/`
  );
  console.log(result);
}

try {
  run();
} catch (e) {
  console.log(e);
}
