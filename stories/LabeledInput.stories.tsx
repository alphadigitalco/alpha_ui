import type { Meta, StoryObj } from '@storybook/react';
import { LabeledInput } from '../lib/index';

const meta = {
    title: 'Input',
    component: LabeledInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof LabeledInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Labeled: Story = {
    args: {
        label: "Alpha Digital",
        description: "Input description example",
        required: true,
    },
};
