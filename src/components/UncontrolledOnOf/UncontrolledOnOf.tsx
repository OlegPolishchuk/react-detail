import React, {useState} from 'react';

export type OnOfPropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export const UncontrolledOnOf = (props: OnOfPropsType) => {


    let [on , setOn] = useState(props.defaultOn ? props.defaultOn : false);

    const onStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid #000',
        background: on ? 'green' : '#fff',
        color: on ? '#fff' : '#000',
    }
    const offStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid #000',
        background: on? '#fff' : 'red',
        color: on ? '#000' : '#fff',
    }
    const indicatorStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: '1px solid #000',
        background: on ? 'green' : 'red',
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div className={'onOf'}>
            <div onClick={()=> { onClicked() }} style={onStyle}>On</div>
            <div onClick={()=> { offClicked() }} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default UncontrolledOnOf;