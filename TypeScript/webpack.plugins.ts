import type IForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';


// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

var webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    logger: 'webpack-infrastructure',
  }),
  new webpack.optimize.AggressiveSplittingPlugin({
    minSize: 35000,
    maxSize: 60000,
    chunkOverhead: 3,
    entryChunkMultiplicator: 3,
  }),
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css"
  }),
];
