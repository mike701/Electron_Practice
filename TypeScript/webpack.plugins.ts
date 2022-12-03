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
    minSize: 40000,
    maxSize: 100000,
    chunkOverhead: 0,
    entryChunkMultiplicator: 1,
  }),
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css"
  }),
];
