import React from 'react';

type OnOfPropsType = {
    isOn: boolean
}

const OnOf = (props: OnOfPropsType) => {
    // return (
    //     // <div className={'onOf'}>
    //     //     <button className={props.isOn ? 'green' : ''}>On</button>
    //     //     <button className={props.isOn ? '' : 'red'}>Off</button>
    //     //     <div className={ props.isOn ? 'green light' : 'red light' }>
    //     //     </div>
    //     // </div>
    // );

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
        background: props.isOn ? '#fff' : 'red',
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
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOf;