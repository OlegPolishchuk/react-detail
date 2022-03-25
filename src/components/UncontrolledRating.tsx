import React, {useState} from 'react';


export function UncontrolledRating() {
    const [value, setValue] = useState(0)

    return (
        <div>
            <Star  selected={value > 0} callBack={setValue} value={1}/>
            <Star  selected={value > 1} callBack={setValue} value={2}/>
            <Star  selected={value > 2} callBack={setValue} value={3}/>
            <Star  selected={value > 3} callBack={setValue} value={4}/>
            <Star  selected={value > 4} callBack={setValue} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    callBack: (value: number) => void
    value: number
}

function Star(props: StarPropsType) {



    return <span onClick={()=>props.callBack(props.value)}> {props.selected ? <b>star  </b> : 'star  '}</span>
}

