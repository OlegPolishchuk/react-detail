import React, {useState} from 'react';

type AccordionPropsType = {
    title: string
}

const UncontrolledAccordion = (props: AccordionPropsType) => {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.title}/>
            <button onClick={()=> { setCollapsed(!collapsed) }}>Toggle</button>
            {collapsed && <AccordionBody/>}
        </div>
    );
};


function  AccordionTitle(props: AccordionPropsType){
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody (){
    return (
        <ul className={'accordion_wrapper'}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;