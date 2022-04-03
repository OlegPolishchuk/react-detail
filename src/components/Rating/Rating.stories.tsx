import React, {useState} from 'react';
import {Story} from '@storybook/react';
import Rating, {RatingPropsType, RatingValueType} from "./Rating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'components/Rating stories',
    component: Rating,
}

const callback = action('Set value in Star component')


const Template: Story<RatingPropsType> = (args) => <Rating {...args} />;

export const EmptyRating = Template.bind({});
export const Rating1 = Template.bind({});
export const Rating2 = Template.bind({});
export const Rating3 = Template.bind({});
export const Rating4 = Template.bind({});
export const Rating5 = Template.bind({});
export const ChangeRating = () => {
    const [value,setValue] = useState<RatingValueType>(0)
    return <Rating value={value} onClick={setValue} />
}



EmptyRating.args = {value: 0, onClick: callback}

Rating1.args = {value: 1, onClick: callback}
Rating2.args = {value: 2, onClick: callback}
Rating3.args = {value: 3, onClick: callback}
Rating4.args = {value: 4, onClick: callback}
Rating5.args = {value: 5, onClick: callback}

