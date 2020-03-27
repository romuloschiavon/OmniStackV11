import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="BTH" />
                <span>Welcome, #NAME#</span>

                <Link className="button" to="/incidents/new">Register new incident</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Incidents</h1>
            
            <ul>
                <li>
                    <strong>#Incident:#</strong>
                    <p>#Test Incident#</p>

                    <strong>#Description#</strong>
                    <p>#VALUE#</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>#Incident:#</strong>
                    <p>#Test Incident#</p>

                    <strong>#Description#</strong>
                    <p>#VALUE#</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>#Incident:#</strong>
                    <p>#Test Incident#</p>

                    <strong>#Description#</strong>
                    <p>#VALUE#</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>#Incident:#</strong>
                    <p>#Test Incident#</p>

                    <strong>#Description#</strong>
                    <p>#VALUE#</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    )
}