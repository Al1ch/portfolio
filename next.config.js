/** @type {import('next').NextConfig} */
const nextConfig = {

	webpack(config, _options) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
}

module.exports = nextConfig
