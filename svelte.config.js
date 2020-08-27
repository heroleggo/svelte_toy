const svelteProcess = require('svelte-preprocess');
const autoprefixer = require('autoprefixer');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	preprocess: svelteProcess({
		sourceMap: !prod,
		scss: {
			prependData: `@import "src/assets/scss/common.scss";`
		},
		postcss: {
			plugins: [autoprefixer()]
		}
	}),
	emitCss: true,
	hotReload: true
}