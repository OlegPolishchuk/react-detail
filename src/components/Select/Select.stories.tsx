import React, {useState} from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Select  from './Select';
import {action} from "@storybook/addon-actions";

export default  {
    title: 'Select',
    component: Select
} as ComponentMeta<typeof Select>

const items = [
    {value: '1', title: 'Minsk'},
    {value: '2', title: 'Moscow'},
    {value: '3', title: 'Kiev'}
]

export const WithValue: ComponentStory<typeof Select> = () =>  {
    const [value, setValue] = useState('2')

    return <Select value={value} onChange={setValue} items={items} />
}

export const WithoutValue: ComponentStory<typeof Select> = () =>  {
    const [value, setValue] = useState(null)

    return <Select value={value}  onChange={setValue} items={items} />
}