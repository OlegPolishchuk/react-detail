import React, {ChangeEvent, useState} from 'react';
import {action} from "@storybook/addon-actions";

import {Story} from "@storybook/react";

type  inputType = {
    value: string
}

export default {
    title: 'input',
    // component: Accordion,
}

const Template: Story<inputType> = (args) => <input {...args} />

export const Input = () => {
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        action('onChange event')
        setValue(e.currentTarget.value)
    }


    return <input value={value} onChange={onChange}/>
}





