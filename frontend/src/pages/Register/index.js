import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css'

import logoImg from '../../assets/logo.svg';

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="BTH" />
                    <h1>Register</h1>
                    <p>Register now! Log-in into the platform and help other people find and help your non-profit</p>
                
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        I already have a login
                    </Link>
                </section>

                <form>
                    <input placeholder="Non-profit name"/>
                    <input type="email" placeholder="E-mail"/>
                    <input placeholder="Whatsapp"/>
                    <div className="input-group">
                        <input placeholder="City"/>
                        <input placeholder="UF" style={{ width: 80 }}/>
                    </div>

                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
};