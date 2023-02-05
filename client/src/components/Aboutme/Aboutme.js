import { useEffect, useState } from 'react';
import Header from '../Header';
import Contact from '../Contact';
import Timeliner from '../Timeline';
import { faPython,faNodeJs, faGitAlt,faHtml5,faJsSquare, faReact,} from '@fortawesome/free-brands-svg-icons'
  import Loader from 'react-loaders'
  import AnimatedLetters from '../AnimatedLetters'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import './index.scss'
  import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
  
  const Aboutme = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
  
    return (
      <>
         
        
        <link rel="stylesheet" href="styles.css" />
        <Header />
        {Array(1).fill(void 0).map( (val, index) =>  
        <Zoom key={index}>
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p align="LEFT">
              My Name is Kannan A.R. I'm a very ambitious web developer from Hyderabad.
              Iam currently pursuing my BTech in Computer Science at Sastra University
            </p>
            <p align="LEFT">
              I'm quiet confident, naturally curious, and perpetually working on
              improving my chops one design problem at a time.I like exploring new technologies .
            </p>
            <p align="LEFT">
              In my spare time i love watching movies.Workout has been a daily regime to me.
              Critical thinking and organisation are the skills i value the most
            </p>
          </div>
  
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faPython} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faNodeJs} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
        <br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/>
        {/* <Timeliner /> */}
        </Zoom>
        )}
        <Contact />
        <Loader type="pacman" />
        
      </>
    )
  }
  
  
  
// function Aboutme()
// {
//     return(
//         <div>
//             <Header />
            
//                 <div class="abouttxt">
//                     <h1>AAA</h1>
//                 </div>
                
            
//             <div class="myimg">
//                 <h1>BBB</h1>
//                 <h1>BBB</h1>
//                 <h1>BBB</h1>
//                 <h1>BBB</h1>
//                 <h1>BBB</h1>
//                 </div>
//             <Contact/>
//         </div>


//     );
// }

export default Aboutme;