import React, {useState} from 'react';
import {Story} from '@storybook/react';
import { UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";
import {RatingValueType} from "../Rating/Rating";


export default {
    title: 'components/UncontrolledRating ',
    component: UncontrolledRating,
}

const callback = action('Set value in Star component')


const Template: Story<typeof UncontrolledRating> = (args) => <UncontrolledRating {...args} />;

export const EmptyRating = Template.bind({});
export const Rating1 = Template.bind({});
export const Rating2 = Template.bind({});
export const Rating3 = Template.bind({});
export const Rating4 = Template.bind({});
export const Rating5 = Template.bind({});

EmptyRating.args = {defaultValue: 0}
Rating1.args = {defaultValue: 1}
Rating2.args = {defaultValue: 2}
Rating3.args = {defaultValue: 3}
Rating4.args = {defaultValue: 4}
Rating5.args = {defaultValue: 5}

