// https://nuxt.com/docs/api/configuration/nuxt-config

import presetUno from "@unocss/preset-uno";
import presetRemToPx from "@unocss/preset-rem-to-px";
import presetAttributify from "@unocss/preset-attributify";
import presetIcons from "@unocss/preset-icons";

export default defineNuxtConfig({
	css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css", "assets/sass/settings.scss"],
	modules: ["@nuxt/devtools", "@unocss/nuxt"],
	build: {
		transpile: ["vuetify"],
	},
	vite: {
		define: {
			"process.env.DEBUG": false,
		},
	},

	unocss: {
		presets: [
			presetUno({
				prefix: "unocss-",
			}),
			presetAttributify(),
			presetIcons(),
			presetRemToPx(),
		],
		shortcuts: [],
		rules: [],
	},
});
