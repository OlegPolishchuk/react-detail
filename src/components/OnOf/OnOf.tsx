import React, {useState} from 'react';

type OnOfPropsType = {
    // isOn: boolean
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

    let [on , setOn] = useState(false);

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

    return (
        <div className={'onOf'}>
            <div onClick={()=> { setOn(true) }} style={onStyle}>On</div>
            <div onClick={()=> { setOn(false)}} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOf;