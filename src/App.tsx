import React from 'react';
import './App.css';
import Rating from "./components/Rating";
import Accordion from "./components/Accordion";
import OnOf from "./components/OnOf/OnOf";
import UncontrolledAccordion from "./components/UncontrolledControledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";

function App() {
  return (
    <div className="App">
        {/*<Accordion title={'menu'} collapsed={true}/>*/}
        {/*<Accordion title={'Users'} collapsed={false}/>*/}
        {/*<Rating value={0}/>*/}
        {/*<Rating value={1}/>*/}
        {/*<Rating value={2}/>*/}
        {/*<Rating value={3}/>*/}
        {/*<Rating value={4}/>*/}
        {/*<Rating value={5}/>*/}
        <OnOf/>
        {/*<OnOf/>*/}
        {/*<OnOf/>*/}
        <UncontrolledRating/>

        <UncontrolledAccordion title={'menu'} />
        <UncontrolledAccordion title={'Users'} />
    </div>
  );
}

export default App;
