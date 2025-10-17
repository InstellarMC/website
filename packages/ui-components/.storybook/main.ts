import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  addons: ["@storybook/addon-themes"],
  stories: ["../components/**/*.stories.tsx"],
  logLevel: "error",
  typescript: { reactDocgen: false },
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
};

export default config;
