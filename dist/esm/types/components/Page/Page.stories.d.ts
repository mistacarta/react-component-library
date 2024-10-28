import type { Meta, StoryObj } from '@storybook/react';
import Page from ".";
declare const meta: Meta<typeof Page>;
export default meta;
export declare const PageOne: StoryObj<typeof meta>;
export declare const PageTwo: {
    args: {
        title: string;
        children: string;
    };
};
