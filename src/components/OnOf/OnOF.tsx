import React, {useState} from 'react';

type OnOfPropsType = {
    isOn: boolean
    toggleOn: (isOn: boolean) => void
}

const OnOf = (props: OnOfPropsType) => {


    const onStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid #000',
        background: props.isOn ? 'green' : '#fff',
        color: props.isOn ? '#fff' : '#000',
    }
    const offStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid #000',
        background: props.isOn? '#fff' : 'red',
        color: props.isOn ? '#000' : '#fff',
    }
    const indicatorStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: '1px solid #000',
        background: props.isOn ? 'green' : 'red',
    }

    return (
        <div className={'onOf'}>
            <div onClick={()=> { props.toggleOn(true) }} style={onStyle}>On</div>
            <div onClick={()=> { props.toggleOn(false)}} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOf;