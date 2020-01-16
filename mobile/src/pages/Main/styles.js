import styled from 'styled-components';
import MapView, { Marker, Callout } from 'react-native-maps';

export const MapViewStyled = styled(MapView)`
    flex: 1;
`;

export const MarkerStyled = styled(Marker)`
`;

export const ImageStyled = styled.Image`
    width: 54px;
    height: 54px;
    border-radius: 4px;
    border-width: 4px;
    border-color: #FFF;
`;

export const CalloutStyled = styled(Callout)`
    width: 260px;
`;

export const Details = styled.View`
`;

export const NameDev = styled.Text`
    font-weight: bold;
    font-size: 16px;
`;

export const BioDev = styled.Text`
    color: #666;
    margin-top: 16px;
`;

export const TechsDev = styled.Text`
    margin-top: 5px;
`;

export const Form = styled.View`
    position: absolute;
    bottom: ${props => props.visible ? 50 : 5 }%;
    left: 20px;
    right: 20px;
    z-index: 5;
    flex-direction: row;
`;

export const TextInputStyled = styled.TextInput`
    flex: 1;
    height: 50px;
    background-color: #FFF;
    color: #333;
    border-radius: 25px;
    paddingHorizontal: 20px;
    font-size: 16px;    
    shadowColor: #000;
    shadowOpacity: 0.2;
    shadowOffset: 4px;
    elevation: 2;
`;

export const ButtonStyled = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background-color: #8E4DFF;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
`;