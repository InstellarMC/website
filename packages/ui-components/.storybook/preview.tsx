import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Preview, ReactRenderer } from "@storybook/react-vite";
import { STORYBOOK_MODES } from "./constants";

import "../styles/lib.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#333" },
      ],
    },
    chromatic: { modes: STORYBOOK_MODES },
    // viewport: { defaultViewport: "large", viewports: STORYBOOK_SIZES },
  },
  decorators: [
    (Story) => <Story />,
    withThemeByDataAttribute<ReactRenderer>({
      themes: { light: "", dark: "high-contrast" },
      defaultTheme: "light",
      attributeName: "data-theme",
    }),
  ],
};

export default preview;
