import React from 'react';
import './Project.css'

export default function Project(props) {
    return (
        <div className='project'>
            <div className='project-img'>
                <img className='img' src= {props.img} />
                <div className='img-text'>
                    <p>{props.tech}</p>
                </div>
            </div>
            <p>{props.description}</p>
        </div>
    )
}
