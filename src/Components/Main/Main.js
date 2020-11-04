import React from 'react';
import './main.css'

export default function Main(props) {
    return (
        <div>
            <div className='option1'>
                    <div className='box1'>
                    </div>
                    <div className='box2'>
                        <div>
                            <h1 className='main-h1'>{props.title}</h1>
                            <h3>Seattle-based Web Developer</h3>
                        </div>  
                        <button className='next-page' value={props.value}>About</button>  
                    </div>
                    <div className='box3'> 
                    </div>
                </div>
        </div>
    )
}
