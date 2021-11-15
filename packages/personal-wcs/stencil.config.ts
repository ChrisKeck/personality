import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';

import { postcss } from '@stencil/postcss';

import autoprefixer from 'autoprefixer';

import cssnano from 'cssnano';

import tailwindcss from 'tailwindcss';

export const config: Config = {
  namespace: 'personal-wcs',
  taskQueue: 'async',
  plugins: [
    sass(),
    postcss({
      plugins: [tailwindcss('./packages/personal-wcs/tailwind.config.js'), autoprefixer(), cssnano()],
    }),
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
