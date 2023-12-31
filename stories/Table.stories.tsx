import type { Meta, StoryObj } from "@storybook/react";
import { Button, Table } from "../lib/index";

const meta = {
    title: "Table",
    component: Table,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        headers: ["Column 1", "Column 2", "Column 3"],
    },
    render: (args) => (
        <Table {...args}>
            <tr>
                <td>Item 1</td>
                <td>Item 2</td>
                <td>Item 3</td>
            </tr>
            <tr>
                <td>Item 1</td>
                <td>Item 2</td>
                <td>Item 3</td>
            </tr>
            <tr>
                <td>Item 1</td>
                <td>Item 2</td>
                <td><Button>Button</Button></td>
            </tr>
        </Table>
    ),
};
