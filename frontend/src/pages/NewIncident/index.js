import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css'

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    return (
        <div className="newincident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="BTH" />
                    <h1>Register new incident</h1>
                    <p>Describe and detail your incident so that our community help you in the best way only we can! Find your hero!</p>
                
                    <Link className="back-link" to="/Profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Go back to the homescreen
                    </Link>
                </section>

                <form>
                    <input placeholder="Incident title"/>
                    <textarea placeholder="Description"/>
                    <input placeholder="Value"/>
            

                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
};