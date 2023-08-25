import type { Meta, StoryObj } from '@storybook/react';
import { Button, Table } from "../lib/index";

const meta = {
    title: 'Table',
    component: Table,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        headers: ["Column 1", "Column 2", "Column 3"],
        data: [
            { col1: "Item 1", col2: "Item 2", col3: "Item 3" },
            { col1: "Item 1", col2: "Item 2", col3: "Item 3" },
            { col1: "Item 1", col2: "Item 2", col3: <Button>Button</Button> },
        ],
    },
    render: (args) => (
        <Table {...args}/>
    ),
};
