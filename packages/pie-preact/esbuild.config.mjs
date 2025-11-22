import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/main.jsx'],
  outdir: 'dist',
  format: 'esm',
  bundle: true,
  minify: true,
  jsx: 'automatic',
  jsxImportSource: 'preact'
}).then(() => {
  console.log('Build complete.');
}).catch(() => process.exit(1));
