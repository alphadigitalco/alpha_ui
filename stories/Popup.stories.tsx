import type { Meta, StoryObj } from "@storybook/react";
import { Popup } from "../lib/index";

const meta = {
    title: "Popup",
    component: Popup,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Popup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: null,
        isOpen: true,
        handleClose: () => {},
    },
    render: (args) => (
        <Popup {...args}>
            <p>Popup Content</p>
        </Popup>
    ),
};
