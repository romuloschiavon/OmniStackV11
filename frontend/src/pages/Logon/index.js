import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';


import './styles.css';

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(event){
        event.preventDefault();

        try{
            const res = await api.post('/sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', res.data.name);
            
            history.push('/profile');
        } catch (err) {
            alert('Failure to log-in, maybe try again later?');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="BTH" />

                <form onSubmit={handleLogin}>
                    <h1>Log-in to our platform!</h1>
                    <input 
                        placeholder="My ID"
                        value={id}
                        onChange={event => setId(event.target.value)}
                    />
                    <button className="button" type="submit">Log-in</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        I don't have an ID
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}