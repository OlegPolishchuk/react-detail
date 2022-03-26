import React from 'react';

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: (accordionCollapsed: boolean) => void
}

const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => props.onClick(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitleType = {
    title: string
    onClick : () => void
}

function  AccordionTitle(props: AccordionTitleType){
    return (
        <h3 onClick={props.onClick}>
            {props.title}
        </h3>
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