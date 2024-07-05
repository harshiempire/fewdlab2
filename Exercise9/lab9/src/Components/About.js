import React from 'react';
import AboutChild1 from './AboutChild1';
import AboutChild2 from './AboutChild2';

const About=()=>{
    return(
        <div>
            <h3>This is AboutUs Page!!</h3>
            <AboutChild1/>
            <AboutChild2/>
        </div>
    )
}

export default About;