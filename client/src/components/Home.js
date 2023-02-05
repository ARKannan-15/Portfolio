import React ,{useEffect,useState} from 'react';

import Header from './Header';
import About from './About';
import Intro from './Intro';
import Club from './Club';
import Project from './Projects';
import Contact from './Contact';




function Home()
{

    return(
        <div>
            <Header />
            <Intro />
            <About />
            <Club />
            <Project />
            <Contact />
        </div>
    );
}

export default Home;


