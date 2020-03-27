import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        }

        try{
            const res = await api.post('ongs', data);

            alert(`Your access ID: ${res.data.id}, make sure you never forget this!`);
            history.push('/');
        } catch(err) {
            alert('Error in the register, maybe try agan later?');
        }
    };

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

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Non-profit name"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={event => setWhatsapp(event.target.value)}
                    />
                    <div className="input-group">
                        <input 
                            placeholder="City"
                            value={city}
                            onChange={event => setCity(event.target.value)}
                        />
                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }}
                            value={uf}
                            onChange={event => setUf(event.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
};