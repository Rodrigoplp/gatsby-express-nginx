module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	settings: {
		react: {
			pragma: 'React',
			version: '^16.8.6'
		}
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: [
		'react',
		'react-hooks'
	],
	rules: {
		'no-console': 'off',
		'react/prop-types': 0,
		'no-unused-vars': 'off',
		'no-undef': 'off',
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
	}
}
