const { writeFile, openSync, closeSync } = require('fs');
const { promisify } = require('util');
const dotenv = require('dotenv');

dotenv.config();

const writeFilePromisified = promisify(writeFile);

const targetPath = './src/environments/environment.ts';
const prodTargetPath = './src/environments/environment.prod.ts';

const envConfigFile = `export const environment = {
  production: false,
  api: {
    serverUrl: '${process.env['API_SERVER_URL']}',
  },
};
`;

(async () => {
  try {
    openSync(targetPath, 'w');
    await writeFilePromisified(targetPath, envConfigFile);

    openSync(prodTargetPath, 'w');
    await writeFilePromisified(prodTargetPath, envConfigFile);
  } catch (err) {
    console.error(err);
    throw err;
  }
})();
