import type { MetaFunction } from "@remix-run/node";

import AppConfig from "~/lib/app-config";

export const meta: MetaFunction = () => {
  return [
    { title: AppConfig.title },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      Welcome to remix
    </div>
  );
}
