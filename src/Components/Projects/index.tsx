import React from 'react';
import './styles.css';

interface projectProps {
    src: string,
    title?: string,
    href?: string,
}

const Projects: React.FC<projectProps> = (props) => {
    return (
        <div className="projectItem">
            <img className="image" width="100%" src={props.src} />
            <div className="overlay">
                <div className="text">{props.title}</div>
                <button>sa</button>
            </div>
        </div>
    );
}

export default Projects;