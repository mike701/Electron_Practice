import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    logger: "webpack-infrastructure",
  }),
  new webpack.optimize.AggressiveSplittingPlugin({
    minSize: 40000,
    maxSize: 100000,
    chunkOverhead: 0,
    entryChunkMultiplicator: 1,
  }),
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css",
  }),
];
