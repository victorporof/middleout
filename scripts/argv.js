// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

import yargs from 'yargs';

export default yargs
  .demandOption(['frontend'])
  .demandOption(['geckoPath'])
  .argv;
