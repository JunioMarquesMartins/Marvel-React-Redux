import styled from 'styled-components';

export const MainCharacters = styled.div`
    /* color: ${(props) => (props.error ? 'red' : 'blue')}; */
`;

export const LoadMore = styled.div`
    display:flex;
    justify-content: center;
    margin-top: 40px;

    button {
        background: #EB2328;
        border-radius: 5px;
        padding: 12px 22px;
        border: 0;
        color: white;
        width: 333px;
        height: 48px;
        font-size: 18px;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
`;
