import React, {useState, useEffect} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './portfolio.css';

export default function Portfolio() {
    const [pageState, setPageState] = useState([]);

    useEffect(() => {
        setPageState('home');
    
    }, [])

    // useEffect(() => {
    //     sal({
    //         threshold: .05,
    //         once: false,
    //         enterEventName: 'sal:in'
    //     });
    // }, [])
    
    function optionOne(click){
        setPageState(click.target.value)
    }


    return(
        <div className='portfolio'>
            <ReactCSSTransitionGroup
                transitionName='fade'
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={300}
            >
            {pageState == 'home' &&
            <div className='option1'>
                <h1>home</h1>
                <button value='option1' onClick={optionOne}>Option 1</button>
            </div>    
            }
            
            
            {pageState == 'option1' &&
            <div className='option1'>
                <h1>option one</h1>
                <button value='home' onClick={optionOne}>Home</button>
            </div>    
            }
            </ReactCSSTransitionGroup>
            
        </div>

    )

}
