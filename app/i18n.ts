import AppConfig from "./lib/app-config";

export default {
  supportedLngs: AppConfig.locales,
  fallbackLng: AppConfig.defaultLocale,
  defaultNS: "common",
};
