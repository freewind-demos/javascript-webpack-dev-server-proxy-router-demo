import {Configuration} from 'webpack-dev-server';
import {Configuration as DevConfig} from 'webpack';

const webpackConfig: Configuration & DevConfig = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devServer: {
    proxy: [
      {
        target: 'a', // required a non-empty string by webpack dev, just make it registered by 'http-proxy-middleware'
        context: ['/**', '!**/**.js'],
        router: (req) => {
          const {baseUrl, url, path, hostname, headers: {host}, originalUrl} = req;
          console.log("### req1", {baseUrl, url, path, hostname, host, originalUrl});
          return 'http://localhost:34893/static-server';
        }
      },
      {
        target: 'a', // Same
        context: ['/**'],
        router: (req) => {
          const {baseUrl, url, path, hostname, headers: {host}, originalUrl} = req;
          console.log("### req2", {baseUrl, url, path, hostname, host, originalUrl});
          return 'http://another.com';
        }
      }

    ]
  }
}

export default webpackConfig;
