const makeConfig = require('./makeConfig');

module.exports = [
    makeConfig({
        dirname: __dirname,
        mode: 'client',
        src: './src',
        dist: './dist/static',
        publicPath: '/static/',
        tsconfig: './tsconfig.json',
        entry: './src/index.jsx',
        outFileName: 'index.js'
    })
];

