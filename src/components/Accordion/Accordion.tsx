import React from 'react';

type ItemType = {
    title: string
    value: any
}

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
    items: ItemType[]
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.title} onChange={() => props.onChange(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody items={props.items}/>}
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

type AccordionBodyPropsType = {
    items: ItemType[]
}

function AccordionBody (props: AccordionBodyPropsType){
    return (
        <ul>
            {props.items.map((el,i) => <li key={i}>{el.title}</li>)}

        </ul>
    )
}
