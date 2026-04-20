import babel from "@rolldown/plugin-babel";
import rsc from "@vitejs/plugin-rsc/plugin";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite-plus";
import devtoolsJson from "vite-plugin-devtools-json";

export default defineConfig({
	lint: {
		options: {
			typeAware: true,
			typeCheck: true,
		},
		categories: {
			correctness: "warn",
		},
		ignorePatterns: ["dist/**"],
	},
	fmt: {
		semi: true,
		singleQuote: false,
		useTabs: true,
		ignorePatterns: ["dist/**"],
	},
	plugins: [
		tailwindcss(),
		react(),
		babel({
			presets: [reactCompilerPreset()],
		}),
		rsc({
			entries: {
				client: "src/entry.browser.tsx",
				rsc: "src/entry.rsc.tsx",
				ssr: "src/entry.ssr.tsx",
			},
		}),
		devtoolsJson(),
	],
	define: {
		"import.meta.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
	},
});
