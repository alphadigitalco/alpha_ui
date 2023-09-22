import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "../lib/index";

const meta = {
    title: "Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
    args: {
        stateManager: () => {},
        placeholder: "Select your option",
        options: [
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
            { label: "Option 3", value: "3" },
            { label: "Option 4", value: "4" },
            { label: "Option 5", value: "5" },
        ],
    },
};

export const Multiple: Story = {
    args: {
        stateManager: () => {},
        multiple: true,
        placeholder: "Select your option",
        options: [
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
            { label: "Option 3", value: "3" },
            { label: "Option 4", value: "4" },
            { label: "Option 5", value: "5" },
        ],
    },
};

export const Labeled: Story = {
    args: {
        stateManager: () => {},
        multiple: true,
        label: "Labeled select",
        placeholder: "Select your option",
        options: [
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
            { label: "Option 3", value: "3" },
            { label: "Option 4", value: "4" },
            { label: "Option 5", value: "5" },
        ],
    },
};
