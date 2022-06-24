const esbuild = require( 'esbuild' );

esbuild.build( {
    entryPoints: [
        'src/index.js',
    ],
    loader: {
        '.js': 'jsx',
    },
    bundle: true,
    outfile: 'dist/out.js',
} ).catch( () => process.exit( 1 ) );
