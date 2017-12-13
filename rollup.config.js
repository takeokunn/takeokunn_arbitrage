import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'umd',
        sourcemap: true
    },
    watch: {
        include: 'src/**/*.js',
        exclude: 'node_modules/**'
    },
    plugins: [
        json(),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true,
        }),
        resolve({
            jsnext: true,
            extensions: ['.js', '.json'],
            modulesOnly: true
        })
    ]
}
