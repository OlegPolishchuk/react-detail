import React, {useState} from 'react';
import '../../App.css';
import {Story} from '@storybook/react';
import {OnOf, OnOfPropsType} from './OnOF';
import {action} from "@storybook/addon-actions";



export default {
    title: 'components/OnOf',
    component:  OnOf,
    argTypes: {
        isOn: {
            type: 'boolean',
            description: 'Состояние переключателя',
            defaultValue: 'false',
            options: [true, false],
            control: {type: 'radio'}
        }
    }
};

const Template: Story<OnOfPropsType> = (args) => <OnOf {...args} />;
//
export const OnMode = Template.bind({});
OnMode.args = {isOn: true, toggleOn: (action('clicked'))}

export const OFFMode = Template.bind({});
OFFMode.args = {isOn: false, toggleOn: action('clicked')}

export const ChangeOnOf = () => {
    const [value,setValue] = useState<boolean>(false)
    return <OnOf isOn={value} toggleOn={()=> setValue(value=> !value)}/>
}





