import React from 'react'
import CountUp from 'react-countup';
import './styles.css'

interface NumbersProps {
    title: string,
    total: number
}

const Numbers: React.FC<NumbersProps> = (props) => {
    return (
        <div className="numberContainer">
            <div className="numberContainerTitle">
                {props.title}
            </div>
            <div className="numberContainerNumbers">
                <CountUp end={props.total} />
            </div>
        </div>
    );
}

export default Numbers;