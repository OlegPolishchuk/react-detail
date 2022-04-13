import React, {KeyboardEvent, useEffect, useState} from 'react';
import s from './Select.module.css'

export type ItemType = {
    value: string,
    title: string
}

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <div>
            <>
                {/*<select>*/}
                {/*    <option value=''>Minsk</option>*/}
                {/*    <option value=''>Moscow</option>*/}
                {/*    <option value=''>Kiev</option>*/}
                {/*</select>*/}
                <div className={s.select} tabIndex={0} onKeyUp={onKeyUp}>
                    <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                    {
                        active &&
                        <div className={s.items}>
                            {props.items.map(el => {
                                    return (
                                        <div
                                            className={s.item + ' ' + (hoveredItem === el ? s.selected : '')}
                                            onMouseEnter={() => {
                                                setHoveredElementValue(el.value)
                                            }}
                                            key={el.value}
                                            onClick={() => {
                                                onItemClick(el.value)
                                            }}
                                        >
                                            {el.title}
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    }
                </div>
            </>
        </div>
    );
};

export default Select;