import React from 'react';

type RatingPropsType = {
    value: 1 | 2 | 3 | 4 | 5 | 0
}

const Rating = (props: RatingPropsType) => {
    return (
        <div>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 4}/>
            <Star selected={props.value > 3}/>
        </div>
    );
};

type StarPropsType = {
    selected: boolean
}

function Star (props: StarPropsType){
    if(props.selected) {
        return <span><b>--start--</b></span>
    } else {
        return <span>--star--</span>
    }
}

export default Rating;
