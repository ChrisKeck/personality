import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';

import { postcss } from '@stencil/postcss';

import * as autoprefixer from 'autoprefixer';

import * as cssnano from 'cssnano';


export const config: Config = {
  namespace: 'personal-wcs',
  taskQueue: 'async',
  plugins: [
    sass(),
//    postcss({
//      plugins: [autoprefixer(), cssnano()],
//    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/packages/personal-wcs/dist',
    },
    {
      type: 'www',
      dir: '../../dist/packages/personal-wcs/www',
      serviceWorker: null, // disable service workers
    },
  ],
};
