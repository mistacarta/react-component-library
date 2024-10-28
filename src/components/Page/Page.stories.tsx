import type { Meta, StoryObj } from '@storybook/react';

import Page from ".";

const meta: Meta<typeof Page> = {
  title: "MyComponents/Page",
  component: Page,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "The title of the Page",
      control: {
        type: "text"
      }
    },
    children: {
      description: "The children of the Page",
      control: {
        type: "text"
      }
    }
  },
}

export default meta

export const PageOne: StoryObj<typeof meta> = {
  args: {
    title: "This is the Page One title",
    children: "These are the Page One children"
  }
};

export const PageTwo = {
  args: {
    title: "This is the Page Two title",
    children: "These are the Page Two children"
  }
};