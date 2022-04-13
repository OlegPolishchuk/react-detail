import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from './Accordion';
import {Story} from "@storybook/react";

export default {
    title: 'components/Accordion',
    component: Accordion,
}

const callback = action('accordion mode was changed')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />

export const CollapsedAccordion = Template.bind({})
CollapsedAccordion.args = {
    title: 'Menu',
    collapsed: true,
    onChange: callback
}

export const UnCollapsedAccordion = Template.bind({})
UnCollapsedAccordion.args = {
    title: 'Users',
    collapsed: false,
    items: [
        {title: 'Dimych', value: '1'},
        {title: 'Oleg', value: '2'},
        {title: 'Victor', value: '3'},
        {title: 'Igor', value: '4'}
    ],
    onChange: callback
}

export const ModeChanging: Story<AccordionPropsType>  = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion {...args}  collapsed={value} onChange={()=>setValue(!value)} />
}

ModeChanging.args = {
    title: 'Menu',
    items: [
        {title: 'Dimych', value: ''},
        {title: 'Oleg', value: ''},
        {title: 'Victor', value: ''},
        {title: 'Igor', value: ''}
    ],
}



