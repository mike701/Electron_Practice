import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';

export const mainConfig: Configuration = {
  cache: true, //helps the erformance of AggressiveSplittingPlugin
  entry: './src/index.ts',
  // Put your normal webpack config below here
  module: {
    rules,
  },
  //can cache groups of components later?
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       pages: {
          
  //       }
  //     }
  //   }
  // },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
};
