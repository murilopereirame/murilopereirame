import React from 'react';

import './styles.css';

function Contact() {
    return (
        <div className="contactContainer"> 
            <div className="contactHeader">
                <p>C O N T A T O</p>
            </div>
            <div className="contactForm">
                <form action="" id="sendMessage">
                    <label htmlFor="name">Qual seu nome?</label>
                    <input id="name" placeholder="Nome" type="text" />
                    <label htmlFor="mail">Qual seu email?</label>
                    <input id="mail" placeholder="Email" type="mail" />
                    <label htmlFor="text">Fale sobre sua ideia</label>
                    <textarea maxLength={300} placeholder="Diga o que quiser em 300 caracteres" id="text">

                    </textarea>
                    <button type="submit">ENVIAR</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;