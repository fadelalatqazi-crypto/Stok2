import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.alborihi.warehousemanager",
  appName: "warehouse-manager",
  webDir: "dist",
  bundledWebRuntime: false,
  server: { androidScheme: "https" },
  android: { allowMixedContent: false, backgroundColor: "#0f172a" },
};

export default config;
