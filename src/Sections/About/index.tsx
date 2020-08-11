import React from 'react';

import './styles.css'
import Numbers from '../../Components/Numbers/Numbers';
import javascriptImage  from '../../Assets/images/javascript.svg';
import nodeImage  from '../../Assets/images/node.svg';
import phpImage  from '../../Assets/images/php.svg';
import css3Image from '../../Assets/images/css3.svg';
import htmlImage  from '../../Assets/images/html.svg';
import reactImage from '../../Assets/images/react.svg';

function About() {
    return (
        <div className="aboutContainer">
            <div className="me">
                <img src="https://avatars3.githubusercontent.com/u/34790144?s=460&u=79bd2866192738cd3d8145364d9cc6b4dfd6e527&v=4" alt=""/>
                <div className="languages">
                    <img src={javascriptImage} />
                    <img src={nodeImage} />
                    <img src={phpImage} />
                    <img src={css3Image} />
                    <img src={htmlImage} />
                    <img src={reactImage} />
                </div>
            </div>
            <div className="aboutMe">
                <p>
                    Estudante de Ciência da Computação na Unesp de Presidente Prudente, 
                    sou um entusiasta da tecnologia.

                    Desde muito jovem tive contato com linguagens de programação, 
                    como&nbsp;
                        <span className="bold">VB .NET,&nbsp;</span> 
                        <span className="bold">C#&nbsp;</span>e 
                        <span className="bold">&nbsp;PHP&nbsp;</span>. 
                    Durante a faculdade encontrei novos desafios, 
                    onde pude ter o contato com 
                    <span className="bold">&nbsp;Node.JS,&nbsp;</span> 
                    <span className="bold">Java,&nbsp;</span>
                    <span className="bold">Flutter, &nbsp;</span>
                    <span className="bold">&nbsp;React Native.</span>
                </p>
            </div>
            <div className="myNumbers">
                <Numbers title="Linhas de código" total={2000} />
                <Numbers title="Projetos" total={10} />
                <Numbers title="Xícaras de café" total={2000} />
            </div>
        </div>
    );

}

export default About;