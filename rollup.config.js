import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'es',
        sourcemap: true
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
