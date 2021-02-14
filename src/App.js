import React, { Fragment } from 'react';
import Heading from './Heading';
import Card from './Card';
import Sdata from './Sdata';

function ncard(val)
{
    return(
        <Card
           sname={val.sname}
           imgsrc={val.imgsrc}
           genre={val.genre}
           links={val.links}
        />
    );
}
function App()
{
    return (
        <>
        <Heading/>
        <div className="Section">
        {Sdata.map(ncard)}
        </div>
        </>
    )
}

export default App;
