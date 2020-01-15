import styled from 'styled-components';

export const MainContainer = styled.main`
    flex: 1;
    margin-left: 30px;

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        list-style: none;

        @media(max-width: 650px) {
            grid-template-columns: 1fr;
        }

        li {
            background: #FFF;
            box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
            border-radius: 2px;
            padding: 20px;

            header {
                display: flex;
                flex-direction: row;
                align-items: center;

                img {
                    width: 54px;
                    height: 54px;
                    border-radius: 50%;
                }

                div {
                    margin-left: 10px;

                    strong {
                        display: block;
                        font-size: 16px;
                        color: #333;
                    }

                    span {
                        font-size: 13px;
                        color: #999;
                        margin-top: 2px;
                    }
                }
            }

            p {
                color: #666;
                font-size: 14px;
                line-height: 20px;
                margin: 10px 0;
            }

            a {
                color: #8E4DFF;
                font-size: 14px;
                text-decoration: none;

                :hover {
                    color: #5A2EA6;
                }
            }
        }
    }
`;