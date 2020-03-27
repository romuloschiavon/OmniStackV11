import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(event){
        event.preventDefault();

        const data= {
            title,
            description,
            value
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    auth: ongId,
                }
            });
            alert('You sucessfully created an incident!');

            history.push('/profile');
        } catch (err) {
            alert('Error creating new incident, maybe try again later?')
        }
    }

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

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Incident title"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                    <textarea 
                        placeholder="Description"
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />
                    <input 
                        placeholder="Value in R$"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />
            

                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
};