import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion, AccordionPropsType} from './UncontrolledAccordion';
import {Story} from "@storybook/react";

export default {
    title: 'components/UnControlledAccordion',
    component: UncontrolledAccordion,
}

const callback = action('accordion mode was changed')

const Template: Story<AccordionPropsType> = (args) => <UncontrolledAccordion {...args} />

export const ModeChanging = Template.bind({})
ModeChanging.args = {
    title: 'Menu'
}






