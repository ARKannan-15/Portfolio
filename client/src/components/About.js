import React from 'react';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

import pic1 from './2.png';
function About()
{
    return(
        
        <div>
            {Array(1).fill(void 0).map( (val, index) =>  
            <Zoom key={index}>
                <div>
                    <a class="text-link v" href="/about">
                        <div class="commonbox about">
                        <h1 class="k">Hello It's<br/>Kannan A.R</h1>
                        <p>About me</p>
                        <img src={pic1} />
                        </div>
                    </a>
                </div>
            </Zoom>
            )}
        </div>
    );
}

export default About;