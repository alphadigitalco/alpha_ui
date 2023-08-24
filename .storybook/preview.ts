import type { Preview, Decorator } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { BaseCSS } from "../lib/index";

export const decorators: Decorator[] = [
    withThemeFromJSXProvider({
        ...BaseCSS
    }),
];

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
