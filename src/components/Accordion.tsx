import React from 'react';

type AccordionPropsType = {
    title: string
    collapsed?: boolean
}

const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
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
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;