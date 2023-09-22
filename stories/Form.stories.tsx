import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "../lib/index";

const meta = {
    title: "Form",
    component: Form,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: null,
        header: {
            title: "Form Title",
            subtitle: "Form Subtitle",
        },
    },
    render: (args) => (
        <Form {...args}>
            <p>Form Content</p>
        </Form>
    ),
};
