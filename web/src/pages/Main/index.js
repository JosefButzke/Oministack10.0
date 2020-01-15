import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { MainContainer } from './styles';

function Main() {

    const [devs, setDevs] = useState([]);

    useEffect(() => {
        async function loadDevs() {
            const response = await api.get('/devs');
            setDevs(response.data);
        }

        loadDevs();
    }, []);
    return (
    <MainContainer>
        <ul>
            {devs.map( dev => (
                <li key={dev._id}>
                    <header>
                        <img src={dev.avatar_url} alt={dev.name} />
                        <div>
                            <strong>{dev.name}</strong>
                            <span>{dev.techs.join(', ')}</span>
                        </div>
                    </header>
                    <p>{dev.bio}</p>
                    <a href={`https://github.com/${dev.github_username}`} target="_blank" rel="noopener noreferrer">Acessar perfil no github</a>
                </li>
            ))}
        </ul>
    </MainContainer>
    );
}

export default Main;