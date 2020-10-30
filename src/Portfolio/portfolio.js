import React, {useState, useEffect} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import home from '../Home/home-data';
import './portfolio.css';

export default function Portfolio() {
    const [pageState, setPageState] = useState([]);
    const [buttonClicked, setButtonClicked] = useState([]);

    useEffect(() => {
        setPageState('About');
    }, [])

    // useEffect(() => {
    //     home[1].xp.forEach(element => {
    //         var newImg = document.createElement('img');
    //         console.log(newImg)
    //         newImg.setAttribute('src', element);
    //         document.getElementById('experience').appendChild(newImg);
    //        })
    // }, [])

    useEffect(() => {
        setButtonClicked(' ');
    }, [pageState])


    function firstThing(){
        setButtonClicked('yes')
        
    }

    const secondThing = async (e) => {
        e.persist();
        const result = await firstThing();
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
                        <h1>{home[0].page}</h1>
                        <button id='next-page' value={home[1].page} onClick={secondThing}>Option 1</button>
                        <div id='one' className={`move-picture ${buttonClicked=='yes' ? 'animate' : ''}`}></div>
                    </div>
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
                    <button id='next-page' value={home[1].nextPage} onClick={secondThing}>Option 1</button>
                    <div id='one' className={`move-picture ${buttonClicked=='yes' ? 'animate' : ''}`}></div>
                </div>
            </div>
            <div className='box3'>
               <h2>Experience</h2>
               <div id='experience'>
                   
               </div>
            </div>
        </div>     
            }
            </ReactCSSTransitionGroup>
            
        </div>

    )

}
