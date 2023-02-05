import React from "react";
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Contact()
{
    return(
        <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        {Array(1).fill(void 0).map( (val, index) =>  
        <Zoom key={index}>
        <div id="contactpage">
        <div class="contact">
        <h1>Get in touch <br/> In any of these handles.</h1>
        <div class="links">
        
        <a class="email" href="mailto:kannanar464@gmail.com">Email</a>
        <br/><br/><br />
        <a class="insta" href="https://www.instagram.com//kannan.ar_15/">Instagram</a>
        <br/><br/><br />
        <a class="linkedin" href="">LinkedIn</a>
        </div>
        <div class="links1">
        
        <a class="email" href="mailto:kannanar464@gmail.com">
        <ContactMailIcon style={{color:"#103560"}} /></a>
        <br/><br/><br />
        <a class="insta1" href="https://www.instagram.com//kannan.ar_15/">
        <InstagramIcon style={{color:"#103560"}} /></a>
        <br/><br/><br />
        <a class="linkedin" href="">
        <LinkedInIcon style={{color:"#103560"}} /></a>
        </div>
        </div>
        </div>
        <div class="footer-padding">
            <div class="footer">
            <p>© A Kannan A.R Website</p>
            </div>
        </div>
        </Zoom>
        )}
        </div>

    );
}

export default Contact;