// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

import yargs from 'yargs';

export default yargs
  .options({
    'gecko-path': {
      describe: 'Path to a local mozilla-central clone.',
      type: 'string',
      requiresArg: true,
      demandOption: true,
    },
    frontend: {
      default: 'react',
      describe: 'Frontend to use.',
      choices: ['react', 'vanilla', 'vue'],
      type: 'string',
      requiresArg: true,
    },
    watch: {
      describe: 'Enter watch mode, which rebuilds on file change.',
      type: 'boolean',
    },
    run: {
      describe: 'Run Firefox with custom frontend.',
      type: 'boolean',
      conflicts: 'serve',
    },
    serve: {
      describe: 'Run a local development server.',
      type: 'boolean',
      conflicts: 'run',
    },
  })
  .argv;
