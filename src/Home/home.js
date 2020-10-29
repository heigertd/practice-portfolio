import React, {useState, useEffect} from 'react';
import home from './home-data';
import './home.css'



export default function Home() {
    const [pageState, setPageState] = useState([0]);

    function clicked(e){
        let newPage = e.target.value
        console.log(newPage)
        switch(newPage){
            case 'About':
                setPageState(1);
                break;
            
            case 'Home':
                setPageState(0);
                break;
        }
        console.log(pageState)
    }
    

    return (
        <div className='grid'>
            <div className='con1'>{home[pageState].con1}</div>
            <div className='con2'>{home[pageState].con2}</div>
            <div className='con3'>{home[pageState].con3}</div>
            <div className='con4'>{home[pageState].con4}</div>
            <div className='page'>
                <h1>{home[pageState].page}</h1>
            </div>
            <div className='b1'>
                <button value={home[pageState].b1} onClick={clicked}>{home[pageState].b1}</button>
            </div>
            <div className='b2'>
            <button value={home[pageState].b2} onClick={clicked}>{home[pageState].b2}</button>
            </div>
            <div className='b3'>
                <button value={home[pageState].b3} onClick={clicked}>{home[pageState].b3}</button>
            </div>
            <div className='b4'>
                <button value={home[pageState].b4} onClick={clicked}>{home[pageState].b4}</button>
            </div>
        </div>
    )
}
