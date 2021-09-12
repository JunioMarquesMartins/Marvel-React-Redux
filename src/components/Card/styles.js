import styled from 'styled-components';

export const CharacterList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    list-style: none;
    @media (max-width: 768px) {
        display: block;
    }

    li {
        display: flex;
        flex-direction: column;
        background: white;
        border-radius: 5px;
        transition: 0.3s 0.3s ease;

        &:hover {
            box-shadow: 0 0 6px rgb(0 0 0 / 28%);
        }
        @media (max-width: 768px) {
            margin-bottom: 20px;
        }
        header {
            height: 230px;
            overflow: hidden;
            position: relative;
            @media (max-width: 768px) {
                margin-bottom: 10px;
            }
            img {
                width: 100%;
                align-self: center;
                position: relative;
                left: 0;
                top: -85px;
                @media (max-width: 768px) {
                    top: -35px;
                }
            }
        }
        > div {
            padding: 20px;
            @media (max-width: 768px) {
                padding: 0 20px;
            }
            strong {
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 135%;
                color: #444444;
            }
            p {
                color: #666666;
                font-weight: 500;
                font-size: 18px;
                overflow: hidden;
                height: 60px;
                @media (max-width: 768px) {
                    height: auto;
                }
            }
        }
        .cta-area {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            @media (max-width: 768px) {
                padding: 20px;
            }
            a {
                background: #444444;
                border-radius: 5px;
                color: white;
                text-decoration: none;
                padding: 10px 15px;
                display: flex;
                align-items: center;
                transition: background-color 0.3s 0.3s ease;
                border: 2px solid transparent;
                &:hover {
                    background: #ffffff;
                    border: 2px solid #444444;
                    border-radius: 5px;
                    color: #444444;
                    svg {
                        fill: #444444;
                    }
                }
                svg {
                    margin-left: 10px;
                    width: 15px;
                }
            }
        }
    }
`;
