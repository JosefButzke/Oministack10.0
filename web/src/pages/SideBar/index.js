import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Aside, DivInputBlock, DivInputGroup } from './styles';

function SideBar() {

    const [github_username, setGithub_username] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
            }, (err) => {
                console.log(err);
            }, 
            {
                timeout: 30000,
            }
        )
    }, []);

    async function handleAddDev(event) {
        event.preventDefault();

        await api.post('/devs', {
            github_username,
            techs,
            latitude,
            longitude,
        }).then((e) => {window.location.reload()});

        
    }

    return (
    <Aside>
        <strong>Cadastrar</strong>
        <form onSubmit={(e) => {handleAddDev(e)}}>
            <DivInputBlock>
                <label htmlFor="github_username">Usuário do github</label>
                <input 
                    id="github_username" 
                    name="github_username" 
                    onChange={e => setGithub_username(e.target.value)}
                    required 
                />
            </DivInputBlock>
            <DivInputBlock>
                <label htmlFor="techs">Tecnologias</label>
                <input 
                    id="techs" 
                    name="techs" 
                    onChange={e => setTechs(e.target.value)}
                    required
                />
            </DivInputBlock>
            <DivInputGroup>
                <DivInputBlock>
                    <label htmlFor="latitude">Latitude</label>
                    <input 
                        id="latitude" 
                        type="number" 
                        name="latitude" 
                        value={latitude} 
                        onChange={e => setLatitude(e.target.value)}
                        required
                    />
                </DivInputBlock>
                <DivInputBlock>
                    <label htmlFor="longitude">Longitude</label>
                    <input 
                        id="longitude" 
                        type="number" 
                        name="longitude" 
                        value={longitude} 
                        onChange={e => setLongitude(e.target.value)}
                        required 
                    />
                </DivInputBlock>
            </DivInputGroup>

            <button type="submit"> Salvar </button>
        </form>
    </Aside>
    );
}

export default SideBar;