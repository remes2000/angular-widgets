import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/main.jsx'],
  outdir: 'dist',
  format: 'esm',
  bundle: true,
  jsx: 'automatic',
  minify: true
}).then(() => {
  console.log('Build complete.');
}).catch(() => process.exit(1));
