import type { Meta, StoryObj } from '@storybook/react';
import { SimpleInput } from '../lib/index';

const meta = {
    title: 'Input',
    component: SimpleInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof SimpleInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
    args: {
        placeholder: "Alpha Digital",
        description: "Input description example",
    },
};
