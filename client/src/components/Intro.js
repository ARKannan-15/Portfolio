import React from "react";
import {Helmet} from "react-helmet";
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

function Intro()
{
    return(
        // <div class="intro">
        // <link rel="stylesheet" href="styles.css" />
        //     <div id="left-side" class="side">
        //         <h2 class="title">Iam a <span class="fancy ">Programmer</span></h2>
        //     </div>
        //     <div id="right-side" class="side">
        //         <h2 class="title">Iam a <span class="fancy">Webdeveloper</span> </h2>
        //     </div>
        //     {/* <Helmet>
        //     <script src="change.js" type="text/javascript" />
        //     </Helmet> */}
        //     {change()}
        //     <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
        // </div>
        <div class="me">
            {Array(1).fill(void 0).map( (val, index) =>  
            <Zoom key={index}>
                <link rel="stylesheet" href="styles.css" />
                <h1>Iam a Programmer<br />and</h1>
                <p>Web Developer</p>
            </Zoom>
            )}
        </div>
    );

}

// function change()
// {
//     const left = document.getElementById("left-side");
// const handleMove = e => {
// left.style.width = `${e.clientX / window.innerWidth * 100}%`;
// }
// document.onmousemove = e => handleMove(e);
// document.ontouchmove = e => handleMove(e.touches[0]);   
// }



export default Intro;