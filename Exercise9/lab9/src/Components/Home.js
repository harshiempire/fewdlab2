import React from 'react';
import HomeChild1 from './HomeChild1';
import HomeChild2 from './HomeChild2';

const Home=()=>{
    return(
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of our website.</p>
            <HomeChild1/>
            <HomeChild2/>
        </div>
    )
}

export default Home;