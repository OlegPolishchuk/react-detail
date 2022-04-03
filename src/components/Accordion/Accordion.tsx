import React from 'react';

export type AccordionPropsType = {
    title: string
    /**
     * collapsed is a state of component. Show accordion is opened or closed
     */
    collapsed: boolean
    /**
     * Callback is called when item clicked
     * @param accordionCollapsed is a flag of accordion state(collapsed/ uncollapsed)
     */
    onChange: (accordionCollapsed: boolean) => void
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.title} onChange={() => props.onChange(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitleType = {
    title: string
    onChange : () => void
}

function  AccordionTitle(props: AccordionTitleType){
    return (
        <h3 onClick={(e) => props.onChange()}>
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
