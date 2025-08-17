import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Epic/InputField",
  component: InputField,
  args: {
    label: "Username",
    placeholder: "Enter username",
  },
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {};

export const WithHelper: Story = {
  args: { helperText: "This will be your login ID" },
};

export const Error: Story = {
  args: { errorMessage: "Invalid username" },
};

export const Loading: Story = {
  args: { loading: true },
};

export const Clearable: Story = {
  args: { clearable: true },
};

export const Password: Story = {
  args: { type: "password", passwordToggle: true, placeholder: "Enter password" },
};
