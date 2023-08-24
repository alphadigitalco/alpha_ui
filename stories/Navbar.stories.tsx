import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from "../lib/index";

const meta = {
    title: 'Navbar',
    component: Navbar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        logo: {
            alt: "Company logo",
            name: "@Alpha.Digital",
            source: "",
        },
        items: [
            { label: "Item 1", href: "#item1" },
            { label: "Item 2", href: "#item2" },
            { label: "Item 3", href: "#item3" },
        ],
    },
};
