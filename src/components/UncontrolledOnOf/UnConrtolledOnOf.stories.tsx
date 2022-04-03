import React, {useState} from 'react';
import '../../App.css';
import {Story} from '@storybook/react';
import {UncontrolledOnOf, OnOfPropsType} from './UncontrolledOnOf';
import {action} from "@storybook/addon-actions";



export default {
    title: 'components/UncontrolledOnOf',
    component:  UncontrolledOnOf,
};

const callback = action('on or off clicked')

const Template: Story<OnOfPropsType> = (args) => <UncontrolledOnOf {...args} />;
//
export const OnMode = Template.bind({});
OnMode.args = { onChange: callback, defaultOn: true}

export const OFFMode = Template.bind({});
OFFMode.args = { onChange: callback, defaultOn: false}








