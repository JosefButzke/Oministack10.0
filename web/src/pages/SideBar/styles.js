import styled from 'styled-components';

export const Aside = styled.aside`
    width: 320px;
    background: #FFF;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
    border-radius: 2px;
    padding: 30px 20px;
    
    strong {
        font-size: 25px;
        text-align: center;
        display: block;
        color: #333;
    }

    form {
        margin-top: 30px;

        button {
            width: 100%;
            border: 0;
            margin-top: 30px;
            background: #7D40E7;
            border-radius: 2px;
            padding: 15px 20px;
            font-size: 16px;
            font-weight: bold;
            color: #FFF;
            cursor: pointer;
            transition: background 0.5s;

            :hover {
             background: #6930CA;   
            }
        }
    }

    & + & {
        margin-top: 20px;
    }
`;

export const DivInputBlock = styled.div`
    label {
        color: #ACACAC;
        font-size: 14px;
        font-weight: block;
    }

    input {
        width: 100%;
        height: 32px;
        font-size: 14px;
        color: #666;
        border: 0;
        border-bottom: 1px solid #EEE;   
    }

    & + & {
        margin-top: 20px;
    }
`;

export const DivInputGroup = styled.div`
    margin-top: 20px;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;

    & ${DivInputBlock} {
        margin-top: 0;
    }
`;