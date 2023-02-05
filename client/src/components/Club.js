import React from 'react';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import ti from './techno.png';
import sts from './sts.png';
function Club()
{
    return(
        <div id="club">
        {Array(1).fill(void 0).map( (val, index) =>  
        <Zoom key={index}>
        <div >
        <div class="statement-club" id="clubpage">
        <h1>Member of the University's Management &amp; Cultural Clubs</h1>
        </div>
        </div>

        <div >
        <a class="text-link" href="#/club">
        <div class="commonbox club">
        <p></p><img src={ti} class="technoimage" />
        <div class="techno">
            <h1>TechnoInformals</h1>
            <p>The Entertainment &amp; Management Cluster of SASTRA University.</p>
            <p>Member</p>
        </div>
        <img src={sts} class="stsimage" />
        <div class="sts">
            <h1>Sastra Tamizh Sangam</h1>
            <p>Official Tamizh Literature and Cultural Club of SASTRA University</p>
            <p>Member</p>
        </div>
        </div>
        </a>
        </div>
        </Zoom>
        )}
        </div>
    );
}

export default Club;