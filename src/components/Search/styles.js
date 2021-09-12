import styled from 'styled-components';

export const Container = styled.div`
    /* color: ${(props) => (props.error ? 'red' : 'blue')}; */

    h1 {
        font-style: normal;
        font-weight: 900;
        font-size: 48px;
        line-height: 56px;
        color: #444444;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 36px;
            line-height: 42px;
            margin-bottom: 20px;
        }
    }
`;
export const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    input {
        background: #ffffff;
        border: 2px solid #e0e0e0;
        box-sizing: border-box;
        border-radius: 5px;
        height: 56px;
        max-width: 540px;
        width: 80%;
        padding: 0 10px;
    }
    button {
        max-width: 56px;
        width: 20%;
        height: 52px;
        border: none;
        color: white;
        background: #eb2328;
        border-radius: 0px 5px 5px 0px;
    }
`;
