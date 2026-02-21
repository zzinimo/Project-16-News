import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Project-16-News/",
  plugins: [react()],
  server: {
    port: 3000, // Change the port number to 3000
  },
});
