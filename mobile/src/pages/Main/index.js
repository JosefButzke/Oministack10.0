import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

import { 
    MapViewStyled, 
    MarkerStyled, 
    ImageStyled, 
    CalloutStyled, 
    Details, 
    NameDev, 
    BioDev, 
    TechsDev, 
    Form,
    TextInputStyled,
    ButtonStyled
} from './styles';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';
import { connect, disconnect, subscribeToNewDevs } from '../../services/socket';

function Main({ navigation }) {
    
    const [devs, setDevs] = useState([]);
    const [techs, setTechs] = useState('');
    const [currentegion, setCurrentRegion] = useState(null);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
            setKeyboardVisible(true); // or some other action
        }
        );
        const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
            setKeyboardVisible(false); // or some other action
        }
        );

        return () => {
        keyboardDidHideListener.remove();
        keyboardDidShowListener.remove();
        };
    }, []);

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } =await requestPermissionsAsync();

            if(granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude, 
                    longitude, 
                    latitudeDelta: 0.08, 
                    longitudeDelta: 0.08,
                });
            }
        }
        loadInitialPosition();
    }, []);

    useEffect(() => {
        subscribeToNewDevs(dev => setDevs([...devs, dev]));
    }, [devs]);

    const setupWebSocket = () => {
        disconnect();

        const { latitude, longitude } = currentegion;

        connect(latitude, longitude, techs);
    }

    const loadDevs = async() => {
        const { latitude, longitude } = currentegion;

        const response = await api.get('/search', { params: {
            latitude,
            longitude,
            techs
        }});

        setDevs(response.data.devs);
        setupWebSocket();
    }

    const handleRegionChange = (region) => {
        setCurrentRegion(region);
    }

    if(!currentegion) {
        return null;
    }

    return (
        <>
            <MapViewStyled 
                initialRegion={currentegion} 
                onRegionChangeComplete={handleRegionChange}
                >
                {devs.map( dev => (
                    <MarkerStyled 
                    key={dev._id}
                    coordinate={{ 
                        latitude: dev.location.coordinates[1], 
                        longitude: dev.location.coordinates[0] 
                    }}
                    >
                    <ImageStyled source={{ uri: dev.avatar_url}} />
                        <CalloutStyled onPress={() => {
                            navigation.navigate('Profile', { github_username: dev.github_username })
                        }}>
                            <Details>
                                <NameDev>{dev.name}</NameDev>
                                <BioDev>{dev.bio}</BioDev>
                                <TechsDev>{dev.techs.join(', ')}</TechsDev>
                            </Details>
                        </CalloutStyled>
                </MarkerStyled>
                ))}
            </MapViewStyled>
            <Form visible={isKeyboardVisible}>
                <TextInputStyled 
                    placeholder="Buscar devs por techs..."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={techs}
                    onChangeText={(text) => setTechs(text)}
                />
                <ButtonStyled onPress={loadDevs}>
                    <MaterialIcons name="my-location" size={20} color="#FFF" />
                </ButtonStyled>
            </Form>
        </>
    );
}

export default Main;