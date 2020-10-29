import React, {useState, useEffect} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './portfolio.css';

export default function Portfolio() {
    const [pageState, setPageState] = useState([]);
    const [buttonClicked, setButtonClicked] = useState([]);

    useEffect(() => {
        setPageState('home');
    }, [])

    useEffect(() => {
        setButtonClicked(' ');
    }, [pageState])


    function firstThing(){
        setButtonClicked('yes')
        
    }

    const secondThing = async () => {
        const result = await firstThing();
        
        setPageState('option1')
       
    }

    const thirdThing = async () => {
        const result = await firstThing();
        
        setPageState('home')
       
    }


    return(
        <div className='portfolio'>
            <ReactCSSTransitionGroup
                transitionName='fade'
                transitionEnterTimeout={1500}
                transitionLeaveTimeout={1000}
            >
            {pageState == 'home' &&
            <div className='option1'>
                <div className='box1'>
                </div>
                <div className='box2'>
                    <div>
                        <h1>home</h1>
                        <button id='next-page' value='option1' onClick={secondThing}>Option 1</button>
                        <div id='one' className={`move-picture ${buttonClicked=='yes' ? 'animate' : ''}`}></div>
                    </div>
                </div>
                <div className='box3'>
                   
                </div>
            </div>    
            }
            
            
            {pageState == 'option1' &&
            <div className='option1'>
                <h1>option one</h1>
                <button value='home' onClick={thirdThing}>Home</button>
                <div className={`move-picture ${buttonClicked=='yes' ? 'animate' : ''}`}>
                    <p id='one'></p>
                </div>
            </div>    
            }
            </ReactCSSTransitionGroup>
            
        </div>

    )

}
