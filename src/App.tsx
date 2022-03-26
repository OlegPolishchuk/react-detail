import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./components/Rating";
import Accordion from "./components/Accordion";
import UncontrolledOnOf from "./components/OnOf/UncontrolledOnOf";
import UncontrolledAccordion from "./components/UncontrolledControledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";
import OnOf from "./components/OnOf/OnOF";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)

  return (
    <div className="App">
        <Accordion
            title={'menu'}
            collapsed={accordionCollapsed}
            onClick={setAccordionCollapsed}
        />

        <Rating value={ratingValue} onClick={setRatingValue}/>

        <UncontrolledOnOf onChange={setOn}/> {on.toString()}
        <OnOf isOn={on} toggleOn={setOn}/>

        <UncontrolledRating/>

        <UncontrolledAccordion title={'menu'} />

    </div>
  );
}

export default App;
