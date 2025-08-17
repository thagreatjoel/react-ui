import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { Plus } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Epic/Button",
  component: Button,
  args: {
    children: "Click Me",
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary" },
};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Danger: Story = {
  args: { variant: "danger" },
};

export const Loading: Story = {
  args: { loading: true },
};

export const WithIcon: Story = {
  args: { leftIcon: <Plus size={16} />, children: "Add Item" },
};
