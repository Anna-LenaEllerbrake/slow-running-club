import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  server: {
    // FSEvents liefert hier keine zuverlässigen Datei-Events; Polling behebt
    // veraltete Inhalte im Dev-Server nach Datei-Änderungen.
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
});
