import React from 'react';
import home from './home-data';
import './home.css'



export default function Home() {
    function clicked(e){
        console.log(e.target.value)
    }
    
    let arrow = '<';

    return (
        <div className='grid'>
            <div className='con1'></div>
            <div className='con2'></div>
            <div className='con3'></div>
            <div className='con4'></div>
            <div className='page'>
                <h1>{home[0].page}</h1>
                <h3>Seattle based Web Developer</h3>
            </div>
            <div className='b1'>
                <button value={home[0].b1} onClick={clicked}>^</button>
                <p>{home[0].b1}</p>
            </div>
            <div className='b2'>
            <button value='portfolio' onClick={clicked}>></button>
            <p>Portfolio</p>
            </div>
            <div className='b3'>
                <button value='contact' onClick={clicked}>V</button>
                <p>Contact</p>
            </div>
            <div className='b4'>
                <button value='experience' onClick={clicked}>{arrow}</button>
                <p>Experience</p>
            </div>
        </div>
    )
}
