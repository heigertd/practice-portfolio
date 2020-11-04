import React, {useState, useEffect} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Main from '../Components/Main/Main'
import Experience from '../Components/Experience/Experience';
import Project from '../Components/Project/Project';
import Mody from '../images/Mody.png'
import Social from '../images/social-distance.png'
import Mule from '../images/Screenshot (24).png';
import Savannah from '../images/Screenshot (51).png';
import home from '../Home/home-data';
import './portfolio.css';

export default function Portfolio() {
    const [pageState, setPageState] = useState([]);
    const [buttonClicked, setButtonClicked] = useState([]);

    useEffect(() => {
        setPageState('Home');
    }, [])

    useEffect(() => {
        setButtonClicked(' ');
    }, [pageState])


    function firstThing(e){
        setButtonClicked('yes')
        e.persist();
        setPageState(e.target.value)
    }

    return(
        <div className='portfolio'>
            <ReactCSSTransitionGroup
                transitionName='fade'
                transitionEnterTimeout={1500}
                transitionLeaveTimeout={1000}
            >
            {pageState == 'Home' &&
                <div className='option1'>
                    <div className='box1'>
                    </div>
                    <div className='box2'>
                        <div>
                            <h1 className='main-h1'>{home[0].page}</h1>
                            <h3>Seattle-based Web Developer</h3>
                        </div>  
                        <button className='next-page' value={home[1].page} onClick={firstThing}>About</button>  
                    </div>
                    <div className='box3'> 
                    </div>
                </div> 
            }
            
            
            {pageState == 'About' &&
                <div className='option1'>
                    <div className='box1'>
                        <p>{home[1].con1}</p>
                    </div>
                    <div className='box2'>
                        <div>
                            <h1>{home[1].page}</h1>
                        </div>
                            <button className='next-page' value={home[1].nextPage} onClick={firstThing}>Portfolio</button>
                    </div>
                    <div className='box3'>
                    <h2>Experience</h2>
                    <div className = 'experience'>
                        {home[1].xp.map(element => { 
                            return <Experience image = {element.image} title = {element.title} />
                        })}
                    </div>
                    </div>
                </div>     
            }

            {pageState == 'Portfolio' &&
                <div className='option1'>
                    <div className='box1'>
                    <Project img = {Mule} description = {home[2].box1[0].description} tech = {home[2].box1[0].tech} />
                    <Project img = {Savannah} description = {home[2].box1[1].description} tech = {home[2].box1[1].tech} />
                    </div>
                    <div className='box2'>
                        <div>
                            <h1>{home[2].page}</h1>
                        </div>
                            <button className='next-page' value={home[2].nextPage} onClick={firstThing}>{home[2].nextPage}</button>
                    </div>
                    <div className='box3'>
                    <Project img = {Mody} description = {home[2].box3[0].description} tech = {home[2].box3[0].tech} />
                    <Project img = {Social} description = {home[2].box3[1].description} tech = {home[2].box3[1].tech} />
                    </div>
                </div>    
            }
            </ReactCSSTransitionGroup>
            
        </div>

    )

}
