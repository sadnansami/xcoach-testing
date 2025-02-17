// app.config.ts
import { defineConfig } from "@tanstack/start/config";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
var app_config_default = defineConfig({
  server: {
    preset: "node-server"
  },
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"]
      }),
      tailwindcss()
    ]
  }
});
export {
  app_config_default as default
};
