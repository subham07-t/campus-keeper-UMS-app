import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import react from "@vitejs/plugin-react-swc";
import dns from "dns";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: "localhost",
//   },
// });

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 5173,
  },
});
