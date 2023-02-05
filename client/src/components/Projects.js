import React from 'react'
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import b from './b.png';
import a1 from './a.png';
import c from './c.png';
function Project()
{
    return(
        <div>
        <link rel="stylesheet" href="styles.css" />
        {Array(1).fill(void 0).map( (val, index) =>  
        <Zoom key={index}>
        <div >
        <div class="statement" id="workpage">
        <h1>Some Things I’ve Built from full stack to<br></br>websites using cloud</h1>
        </div>
        <div class="commonbox blog">
        <h1>An Exposure for Unique <br /> Blogging</h1>
        <div class="project-description">
        <p>A web app for improving your blog experience. View your recently added articles whenever needed. Create and save new articles deleted if not needed and more.All articles dispalyed using their titles</p>
        </div>
        <div class="project-image">
        <img class="iphone" src={a1}></img>
        </div>
        <p class="app">MERN Stack Application</p>
        <br/><p class="sw">MongoDB, Express JS, React JS, Node JS</p>
        </div>
        {/* next project */}
            
        <div class="commonbox blog1">
        <h1>Cloud based<br /> E-coomerce Website</h1>
        <div class="project-description">
        <p>An E-commerce website for online shopping . Website has an admin registration to control/limit the users.Hosted on Google-cloud ways to sophisticate mulitplte clients and single server</p>
        </div>
        <div class="project-image1">
        <img class="iphone" src={b}></img>
        </div>
        <p class="app1">CLOUD &amp; MERN Stack Application</p>
        <br/><p class="sw1">MongoDB, Express JS, React JS, Node JS,<br></br>PHP ,Laravel</p>
        </div>
        {/* next project */}
        <div class="commonbox blog2">
        <h1>A Keeper Notes inspired from <br /> Google Notes</h1>
        <div class="project-description1">
        <p>A web app for taking notes of important points which contains CURD operations of notes</p>
        </div>
        <div class="project-image2">
        <img class="iphone" src={c}></img>
        </div>
        <p class="app2">React Application</p>
        </div>
        </div>
        </Zoom>
        )}
        </div>
    );
}
export default Project;