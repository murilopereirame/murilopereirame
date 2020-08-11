import React from 'react';

import './styles.css'
import Numbers from '../../Components/Numbers/Numbers';
const Typewriter = require('typewriter-effect');

function Intro() {
    return (
        <div className="introContainer">
            <div className="intro">
                <p>
                    Olá! Me chamo <span className='name'>Murilo Pereira</span>
                    <br />
                    <span>
                        Trabalho com:&nbsp;<Typewriter
                        options={{
                            wrapperClassName: 'typewriter',
                            strings: ['Frontend', 'Backend', 'Web', 'Mobile', 'Desktop'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    </span>
                </p>                     
            </div>   
            <button 
            className="checkMyJobs"
            >
                Confira meu trabalho&nbsp;&nbsp;
                <i className="material-icons">arrow_forward</i>
            </button>
        </div>
    )
}

export default Intro;