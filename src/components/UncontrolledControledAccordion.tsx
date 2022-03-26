import React, {useState} from 'react';

type AccordionPropsType = {
    title: string
}

const UncontrolledAccordion = (props: AccordionPropsType) => {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.title} onClick={()=>setCollapsed(!collapsed)}/>
            {collapsed && <AccordionBody/>}
        </div>
    );
};

type TitlePropsType = {
    title: string
    onClick: () => void
}


function  AccordionTitle(props: TitlePropsType){
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
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